import fs from 'node:fs';
import path from 'node:path';

const rootDir = path.resolve(import.meta.dirname, '..');
const manifest = JSON.parse(
  fs.readFileSync(path.join(rootDir, 'shared', 'security-manifest.json'), 'utf8')
);

const commonIgnoreText = manifest.commonVercelIgnore.join('\n') + '\n';

for (const [project, cfg] of Object.entries(manifest.projects)) {
  const projectDir = path.join(rootDir, project);
  if (!fs.existsSync(projectDir)) {
    console.warn(`Skipping missing project: ${project}`);
    continue;
  }

  // 1. Build vercel.json from shared headers + project-specific settings
  const securityHeaders = [
    ...manifest.commonHeaders.slice(0, 1),
    { key: 'X-Frame-Options', value: cfg.xFrameOptions },
    ...manifest.commonHeaders.slice(1),
    { key: 'Content-Security-Policy', value: cfg.csp }
  ];

  const vercelConfig = {
    $schema: 'https://openapi.vercel.sh/vercel.json',
    framework: cfg.type === 'astro' ? 'astro' : null,
    ...(cfg.type === 'astro' ? { buildCommand: 'npm run build', outputDirectory: 'dist' } : { outputDirectory: '.' }),
    cleanUrls: true,
    trailingSlash: cfg.trailingSlash,
    headers: [
      {
        source: '/(.*)',
        headers: securityHeaders
      },
      {
        source: cfg.cacheSource,
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      },
      {
        source: cfg.imageSource,
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' }
        ]
      }
    ]
  };

  fs.writeFileSync(
    path.join(projectDir, 'vercel.json'),
    JSON.stringify(vercelConfig, null, 2) + '\n',
    'utf8'
  );

  // 2. Write .vercelignore
  fs.writeFileSync(path.join(projectDir, '.vercelignore'), commonIgnoreText, 'utf8');

  // 3. Ensure robots.txt exists for static projects (Astro uses src/pages/robots.txt.ts)
  if (cfg.type === 'static') {
    const robotsPath = path.join(projectDir, 'robots.txt');
    if (!fs.existsSync(robotsPath)) {
      const hasSitemap = fs.existsSync(path.join(projectDir, 'sitemap.xml'));
      const robotsContent = hasSitemap
        ? 'User-agent: *\nAllow: /\n\nSitemap: /sitemap.xml\n'
        : 'User-agent: *\nAllow: /\n';
      fs.writeFileSync(robotsPath, robotsContent, 'utf8');
    }
  }

  console.log(`Synced ${project}`);
}
