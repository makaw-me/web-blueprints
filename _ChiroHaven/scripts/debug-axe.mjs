import path from 'path';
import fs from 'fs';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

const tempDir = path.resolve('temp');
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });
process.env.TEMP = tempDir;
process.env.TMP = tempDir;

const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
const ctx = await browser.newContext({ viewport: { width: 320, height: 800 } });
const page = await ctx.newPage();

await page.goto('http://127.0.0.1:4321/', { waitUntil: 'networkidle' });
const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa', 'wcag2aaa']).analyze();

console.log('Violations at 320px on Home:');
for (const v of results.violations) {
  console.log(`- ${v.id} (${v.impact}): ${v.help}`);
  for (const n of v.nodes) {
    console.log(`   Target: ${n.target.join(' ')}`);
    console.log(`   HTML: ${n.html}`);
    console.log(`   Failure summary: ${n.failureSummary}`);
  }
}

await browser.close();
