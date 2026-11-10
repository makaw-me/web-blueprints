import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..', '..');
const distDir = path.resolve(__dirname, '..', 'dist');

const tempDir = path.join(rootDir, 'temp');
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });
process.env.TEMP = tempDir;
process.env.TMP = tempDir;

// MIME types for static server
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath.endsWith('/')) reqPath += 'index.html';
  let filePath = path.join(distDir, reqPath);

  if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
    filePath += '.html';
  } else if (!fs.existsSync(filePath) && fs.existsSync(path.join(filePath, 'index.html'))) {
    filePath = path.join(filePath, 'index.html');
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    const notFound = path.join(distDir, '404.html');
    if (fs.existsSync(notFound)) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      fs.createReadStream(notFound).pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  }
});

await new Promise(resolve => server.listen(4321, '127.0.0.1', resolve));
console.log('Static server listening on http://127.0.0.1:4321');

const runCommand = (cmd, args) => new Promise((resolve) => {
  const p = spawn(cmd, args, { stdio: 'inherit', shell: true, env: { ...process.env, TEMP: tempDir, TMP: tempDir } });
  p.on('close', code => resolve(code));
});

try {
  console.log('\n=== RUNNING CRAWL AUDIT (AXE WCAG AAA, SEO, 3RD-PARTY) ===');
  const auditCode = await runCommand('node', ['demo/scripts/audit.mjs', 'http://127.0.0.1:4321/']);
  console.log('Audit exit code:', auditCode);

  console.log('\n=== RUNNING LIGHTHOUSE (MOBILE THROTTLED) ON KEY PAGES ===');
  const lhTargets = [
    { name: 'home', path: '/' },
    { name: 'service', path: '/services/chiropractic-therapy/' },
    { name: 'contact', path: '/contact/' },
    { name: 'case-study', path: '/case-studies/spinal-decompression-lumbar-herniation/' }
  ];

  const lhResults = {};
  for (const t of lhTargets) {
    const outPath = path.join(rootDir, `lh-${t.name}.json`);
    console.log(`Running Lighthouse on ${t.path}...`);
    await runCommand('node', [
      'demo/node_modules/lighthouse/cli/index.js',
      `http://127.0.0.1:4321${t.path}`,
      '--only-categories=performance,accessibility,best-practices,seo',
      '--output=json',
      `--output-path=${outPath}`,
      '--chrome-flags="--headless=new --no-sandbox"',
      '--quiet'
    ]);

    if (fs.existsSync(outPath)) {
      const data = JSON.parse(fs.readFileSync(outPath, 'utf8'));
      lhResults[t.name] = {
        perf: Math.round(data.categories.performance.score * 100),
        a11y: Math.round(data.categories.accessibility.score * 100),
        bestPractices: Math.round(data.categories['best-practices'].score * 100),
        seo: Math.round(data.categories.seo.score * 100),
        lcp: Math.round(data.audits['largest-contentful-paint'].numericValue) + ' ms',
        cls: data.audits['cumulative-layout-shift'].numericValue,
        tbt: Math.round(data.audits['total-blocking-time'].numericValue) + ' ms'
      };
    }
  }

  console.log('\n=== LIGHTHOUSE SCORES SUMMARY ===');
  console.table(lhResults);

} finally {
  server.close();
  console.log('\nServer stopped.');
}
