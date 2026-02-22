const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;

// ---------------------------------------------------------------------------
// Cache-busting hashes from file content at startup
// ---------------------------------------------------------------------------
function fileHash(filePath) {
  return crypto.createHash('md5').update(fs.readFileSync(filePath)).digest('hex').slice(0, 8);
}
const cssHash = fileHash(path.join(__dirname, 'public', 'tailwind.css'));
const jsHash  = fileHash(path.join(__dirname, 'public', 'app.js'));

// ---------------------------------------------------------------------------
// Pre-render & minify HTML once at startup
// ---------------------------------------------------------------------------
function renderHtml(filename) {
  let html = fs.readFileSync(path.join(__dirname, 'public', filename), 'utf8');
  html = html.replace(/__CSS_HASH__/g, cssHash).replace(/__JS_HASH__/g, jsHash);
  // Strip HTML comments (except doctype / IE conditionals)
  html = html.replace(/<!--(?!\[if)[\s\S]*?-->/g, '');
  // Collapse runs of whitespace between tags
  html = html.replace(/>\s{2,}</g, '> <');
  // Trim leading whitespace on lines
  html = html.replace(/\n\s+/g, '\n');
  return html;
}

const indexHtml = renderHtml('index.html');

// ---------------------------------------------------------------------------
// In-memory rate limiter (no extra dependency)
// ---------------------------------------------------------------------------
const RATE_WINDOW_MS = 60_000;       // 1 minute
const RATE_MAX_REQUESTS = 120;       // requests per window per IP
const ipHits = new Map();

// Sweep stale entries every 2 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of ipHits) {
    if (now - entry.start > RATE_WINDOW_MS) ipHits.delete(ip);
  }
}, 120_000).unref();

app.use((req, res, next) => {
  const ip = req.ip;
  const now = Date.now();
  let entry = ipHits.get(ip);

  if (!entry || now - entry.start > RATE_WINDOW_MS) {
    entry = { start: now, count: 0 };
    ipHits.set(ip, entry);
  }

  entry.count++;
  if (entry.count > RATE_MAX_REQUESTS) {
    res.setHeader('Retry-After', Math.ceil((entry.start + RATE_WINDOW_MS - now) / 1000));
    return res.status(429).send('Too many requests');
  }
  next();
});

// ---------------------------------------------------------------------------
// Security headers
// ---------------------------------------------------------------------------
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc:      ["'self'"],
      styleSrc:        ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      fontSrc:         ["'self'", 'https://fonts.gstatic.com'],
      imgSrc:          ["'self'", 'data:'],
      scriptSrc:       ["'self'"],
      connectSrc:      ["'self'"],
      frameAncestors:  ["'none'"],
      formAction:      ["'self'"],
      baseUri:         ["'self'"],
      objectSrc:       ["'none'"],
    },
  },
}));

// Permissions-Policy: restrict powerful browser APIs
app.use((req, res, next) => {
  res.setHeader('Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()'
  );
  next();
});

// ---------------------------------------------------------------------------
// Gzip / Brotli compression
// ---------------------------------------------------------------------------
app.use(compression({ level: 6 }));

// ---------------------------------------------------------------------------
// Preload hints (Link header) for the homepage
// ---------------------------------------------------------------------------
app.use((req, res, next) => {
  if (req.path === '/') {
    res.setHeader('Link', [
      `</tailwind.css?v=${cssHash}>; rel=preload; as=style`,
      `</images/hero-bg.webp>; rel=preload; as=image; type=image/webp`,
      '<https://fonts.googleapis.com>; rel=preconnect',
      '<https://fonts.gstatic.com>; rel=preconnect; crossorigin',
    ].join(', '));
  }
  next();
});

// ---------------------------------------------------------------------------
// Serve the single page
// ---------------------------------------------------------------------------
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache');
  res.send(indexHtml);
});

// ---------------------------------------------------------------------------
// Static files with aggressive caching
// ---------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public'), {
  etag: true,
  lastModified: true,
  maxAge: '1y',
  immutable: true,
  setHeaders(res, filePath) {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    }
  },
}));

// ---------------------------------------------------------------------------
// 404 — proper status, minimal response
// ---------------------------------------------------------------------------
app.use((req, res) => {
  res.status(404).setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.send('404 Not Found');
});

// ---------------------------------------------------------------------------
// Start server with production timeouts
// ---------------------------------------------------------------------------
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Anaela running on port ${PORT} (CSS: ${cssHash}, JS: ${jsHash})`);
});

// Prevent hanging connections under load
server.keepAliveTimeout = 65_000;   // slightly above typical ALB 60 s
server.headersTimeout   = 66_000;
