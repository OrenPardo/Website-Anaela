import { NextResponse } from 'next/server';

const ipHits         = new Map();
const RATE_WINDOW_MS = 60_000;  // 1-minute window
const RATE_MAX       = 120;     // max requests per window
const CLEANUP_EVERY  = 500;     // purge stale entries every N requests

let reqCount = 0;

export function middleware(request) {
  // Lazy cleanup: purge expired IPs every CLEANUP_EVERY requests
  if (++reqCount >= CLEANUP_EVERY) {
    reqCount = 0;
    const cutoff = Date.now() - RATE_WINDOW_MS;
    for (const [ip, entry] of ipHits) {
      if (entry.start < cutoff) ipHits.delete(ip);
    }
  }

  // Prefer leftmost IP from X-Forwarded-For (set by trusted reverse proxy)
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    request.ip ??
    'unknown';

  const now = Date.now();
  let entry = ipHits.get(ip);

  if (!entry || now - entry.start > RATE_WINDOW_MS) {
    entry = { start: now, count: 0 };
    ipHits.set(ip, entry);
  }

  entry.count++;

  if (entry.count > RATE_MAX) {
    const retryAfter = Math.ceil((entry.start + RATE_WINDOW_MS - now) / 1000);
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'Retry-After':  String(retryAfter),
        'Content-Type': 'text/plain',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon\\.ico|robots\\.txt|sitemap\\.xml).*)',
};
