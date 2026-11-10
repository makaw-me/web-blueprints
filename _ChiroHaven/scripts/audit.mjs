import os from 'os';
import path from 'path';
import fs from 'fs';

const tempDir = path.resolve('temp');
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });
process.env.TEMP = tempDir;
process.env.TMP = tempDir;

import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

const base = new URL(process.argv[2]);
const maxPages = Number(process.argv[3] || 60);
const browser = await chromium.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});
const seen = new Set(), queue = [base.href], report = [], thirdParty = new Set();

while (queue.length && seen.size < maxPages) {
  const url = queue.shift();
  if (seen.has(url)) continue;
  seen.add(url);
  for (const width of [320, 1280]) {
    const ctx = await browser.newContext({ viewport: { width, height: 800 } });
    const page = await ctx.newPage();
    page.on('request', r => {
      const h = new URL(r.url());
      if (h.host !== base.host && h.protocol.startsWith('http')) thirdParty.add(h.host);
    });
    const res = await page.goto(url, { waitUntil: 'networkidle' });
    if (width === 1280) {
      const info = await page.evaluate(() => {
        const q = s => [...document.querySelectorAll(s)];
        const ld = q('script[type="application/ld+json"]').map(s => {
          try { return JSON.parse(s.textContent)['@type'] ?? 'graph'; } catch { return 'INVALID'; }
        });
        return {
          h1: q('h1').length,
          title: document.title.length,
          desc: document.querySelector('meta[name=description]')?.content.length ?? 0,
          canonical: !!document.querySelector('link[rel=canonical]'),
          lang: !!document.documentElement.lang,
          noAlt: q('img').filter(i => !i.hasAttribute('alt')).length,
          ld,
          links: q('a[href]').map(a => a.href),
        };
      });
      const issues = [];
      if (res.status() >= 400) issues.push(`status ${res.status()}`);
      if (info.h1 !== 1) issues.push(`h1 count ${info.h1}`);
      if (info.title < 30 || info.title > 65) issues.push(`title length ${info.title}`);
      if (info.desc < 120 || info.desc > 165) issues.push(`meta description length ${info.desc}`);
      if (!info.canonical) issues.push('no canonical');
      if (!info.lang) issues.push('no html lang');
      if (info.noAlt) issues.push(`${info.noAlt} img without alt`);
      if (!info.ld.length) issues.push('no JSON-LD');
      else if (info.ld.includes('INVALID')) issues.push('invalid JSON-LD');
      report.push({ url, width, kind: 'seo', issues });
      for (const l of info.links) {
        const u = new URL(l);
        u.hash = '';
        if (u.host === base.host && !seen.has(u.href)) queue.push(u.href);
      }
    }
    const axe = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa', 'wcag2aaa', 'best-practice'])
      .analyze();
    report.push({
      url,
      width,
      kind: 'axe',
      issues: axe.violations.map(v => `${v.id} (${v.nodes.length}) ${v.impact}`)
    });
    await ctx.close();
  }
}
await browser.close();

let bad = 0;
for (const r of report) {
  if (r.issues.length) {
    bad++;
    console.log(`${r.kind.toUpperCase()} ${r.width}px ${r.url}\n  - ${r.issues.join('\n  - ')}`);
  }
}
console.log(`\nPages checked: ${seen.size}. Reports with issues: ${bad}. Third-party hosts: ${[...thirdParty].join(', ') || 'none'}`);
process.exit(bad || thirdParty.size ? 1 : 0);
