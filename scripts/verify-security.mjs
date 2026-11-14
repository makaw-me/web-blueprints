import fs from 'node:fs';
import path from 'node:path';

const rootDir = path.resolve(import.meta.dirname, '..');
const manifest = JSON.parse(
  fs.readFileSync(path.join(rootDir, 'shared', 'security-manifest.json'), 'utf8')
);

const requiredHeaders = [
  'X-Content-Type-Options',
  'X-Frame-Options',
  'Referrer-Policy',
  'Permissions-Policy',
  'Strict-Transport-Security',
  'Content-Security-Policy'
];

function walk(dir, exts, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === '.git' || entry.name === '.astro') {
      continue;
    }
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, exts, out);
    } else if (exts.includes(path.extname(entry.name).toLowerCase())) {
      out.push(full);
    }
  }
  return out;
}

function parseCsp(csp) {
  const map = {};
  for (const part of csp.split(';').map((s) => s.trim()).filter(Boolean)) {
    const [dir, ...vals] = part.split(/\s+/);
    map[dir] = vals;
  }
  return map;
}

function isOriginAllowed(origin, allowedList = []) {
  return allowedList.some((item) => item === origin || item === 'https:' || item === '*');
}

let failures = 0;

for (const [project, cfg] of Object.entries(manifest.projects)) {
  const projectDir = path.join(rootDir, project);
  const errors = [];

  // 1. Check vercel.json
  const vercelPath = path.join(projectDir, 'vercel.json');
  if (!fs.existsSync(vercelPath)) {
    errors.push('Missing vercel.json');
  } else {
    const vj = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
    const rootRule = vj.headers?.find((h) => h.source === '/(.*)');
    const headerKeys = new Set((rootRule?.headers || []).map((h) => h.key));
    for (const req of requiredHeaders) {
      if (!headerKeys.has(req)) errors.push(`Missing header: ${req}`);
    }
    const corpRule = vj.headers?.find((h) =>
      (h.headers || []).some((x) => x.key === 'Cross-Origin-Resource-Policy' && x.value === 'same-origin')
    );
    if (!corpRule) errors.push('Missing Cross-Origin-Resource-Policy: same-origin');

    // 2. Check CSP against actual HTML/CSS external origins
    const cspHeader = (rootRule?.headers || []).find((h) => h.key === 'Content-Security-Policy')?.value || '';
    const csp = parseCsp(cspHeader);

    const htmlFiles = walk(projectDir, ['.html', '.astro']);
    for (const file of htmlFiles) {
      const raw = fs.readFileSync(file, 'utf8');
      // Strip HTML conditional comments like <!--[if lt IE 9]>...<![endif]-->
      const content = raw.replace(/<!--\[if[\s\S]*?<!\[endif\]-->/gi, '');

      for (const m of content.matchAll(/<script[^>]+src=["'](https?:)?\/\/([^/"'>]+)/gi)) {
        const origin = `https://${m[2].toLowerCase()}`;
        if (!isOriginAllowed(origin, csp['script-src'])) {
          errors.push(`CSP script-src missing ${origin} (in ${path.relative(projectDir, file)})`);
        }
      }
      for (const m of content.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]+href=["'](https?:)?\/\/([^/"'>]+)|<link[^>]+href=["'](https?:)?\/\/([^/"'>]+)[^>]+rel=["']stylesheet["']/gi)) {
        const host = (m[2] || m[4] || '').toLowerCase();
        if (host) {
          const origin = `https://${host}`;
          if (!isOriginAllowed(origin, csp['style-src'])) {
            errors.push(`CSP style-src missing ${origin} (in ${path.relative(projectDir, file)})`);
          }
        }
      }
      for (const m of content.matchAll(/<iframe[^>]+src=["'](https?:)?\/\/([^/"'>]+)/gi)) {
        const origin = `https://${m[2].toLowerCase()}`;
        if (!isOriginAllowed(origin, csp['frame-src'])) {
          errors.push(`CSP frame-src missing ${origin} (in ${path.relative(projectDir, file)})`);
        }
      }
    }

    const cssFiles = walk(projectDir, ['.css']);
    for (const file of cssFiles) {
      const content = fs.readFileSync(file, 'utf8');
      for (const m of content.matchAll(/@import\s+(?:url\()?["']?(https?:)?\/\/([^/"')]+)/gi)) {
        const origin = `https://${m[2].toLowerCase()}`;
        if (!isOriginAllowed(origin, csp['style-src'])) {
          errors.push(`CSP style-src missing @import ${origin} (in ${path.relative(projectDir, file)})`);
        }
      }
    }
  }

  // 3. Check .vercelignore
  const ignorePath = path.join(projectDir, '.vercelignore');
  if (!fs.existsSync(ignorePath)) {
    errors.push('Missing .vercelignore');
  } else {
    const ign = fs.readFileSync(ignorePath, 'utf8');
    for (const pat of ['*.map', '.env', 'scss/', 'scratch/', '*.php']) {
      if (!ign.includes(pat)) errors.push(`.vercelignore missing ${pat}`);
    }
  }

  // 4. Check robots.txt
  if (cfg.type === 'static') {
    const robotsPath = path.join(projectDir, 'robots.txt');
    if (!fs.existsSync(robotsPath)) errors.push('Missing robots.txt');
  } else if (cfg.type === 'astro') {
    const robotsTs = path.join(projectDir, 'src', 'pages', 'robots.txt.ts');
    const robotsPub = path.join(projectDir, 'public', 'robots.txt');
    if (!fs.existsSync(robotsTs) && !fs.existsSync(robotsPub)) errors.push('Missing robots.txt');
  }

  // 5. Check Astro dist for .map files
  if (cfg.type === 'astro') {
    const distDir = path.join(projectDir, 'dist');
    if (fs.existsSync(distDir)) {
      const maps = walk(distDir, ['.map']);
      if (maps.length > 0) errors.push(`Found ${maps.length} .map files in dist/`);
    }
  }

  if (errors.length > 0) {
    failures += errors.length;
    console.error(`FAIL ${project}:\n  - ${errors.join('\n  - ')}`);
  } else {
    console.log(`PASS ${project}`);
  }
}

if (failures > 0) {
  process.exit(1);
}
console.log('\nAll 16 projects passed security & CSP verification.');
