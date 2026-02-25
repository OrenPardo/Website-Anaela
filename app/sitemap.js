import { SITE_URL } from './lib/constants';

export default function sitemap() {
  return [
    {
      url:             SITE_URL,
      lastModified:    '2026-02-25',
      changeFrequency: 'monthly',
      priority:        1.0,
    },
  ];
}
