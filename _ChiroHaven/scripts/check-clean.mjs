import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '..', 'dist');

const badPatterns = [
  /lorem\s+ipsum/i,
  /httrack/i,
  /elementor/i,
  /wp-content/i,
  /chirohaven\.wpthemeverse\.com/i,
  /wpthemeverse/i,
  /href=["']#["']/i,
  /href=["']javascript:/i
];

let issues = 0;

function scan(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scan(full);
    } else if (entry.name.endsWith('.html')) {
      const text = fs.readFileSync(full, 'utf8');
      for (const pat of badPatterns) {
        if (pat.test(text)) {
          console.error(`ISSUE in ${path.relative(distDir, full)}: matched ${pat}`);
          issues++;
        }
      }
    }
  }
}

scan(distDir);
if (issues === 0) {
  console.log('✓ Clean scan: 0 leftover strings, 0 empty hash/javascript links across all HTML files in dist.');
} else {
  console.error(`Found ${issues} issues.`);
  process.exit(1);
}

