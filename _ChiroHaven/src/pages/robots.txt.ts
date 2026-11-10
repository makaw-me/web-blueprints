import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const isProduction = process.env.SITE_MODE === 'production';
  const siteUrl = 'https://chirohaven.boston-demo.com';

  const content = isProduction
    ? `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
    : `User-agent: *\nAllow: /\n`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
};
