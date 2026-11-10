import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const isProduction = process.env.SITE_MODE === 'production';
  const siteUrl = 'https://chirohaven.boston-demo.com';

  if (!isProduction) {
    return new Response('<!-- Sitemap disabled in demo mode -->', {
      status: 200,
      headers: { 'Content-Type': 'application/xml; charset=utf-8' }
    });
  }

  const pages = [
    '',
    '/services/',
    '/services/chiropractic-therapy/',
    '/services/physiotherapy/',
    '/services/clinical-pilates/',
    '/services/soft-tissue-therapy/',
    '/about/',
    '/pricing/',
    '/shop/',
    '/shop/ergonomic-lumbar-cushion/',
    '/faq/',
    '/contact/',
    '/privacy/',
    '/accessibility/',
    '/case-studies/',
    '/case-studies/spinal-decompression-lumbar-herniation/',
    '/blog/',
    '/blog/preventing-desk-fatigue-spine-mobility/'
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${siteUrl}${p}</loc>
    <changefreq>monthly</changefreq>
    <priority>${p === '' ? '1.0' : p.startsWith('/services/') ? '0.8' : '0.6'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};

