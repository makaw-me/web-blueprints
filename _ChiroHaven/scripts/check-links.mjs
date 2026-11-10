import { LinkChecker } from '../node_modules/linkinator/build/src/index.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '..', 'dist');

const checker = new LinkChecker();
checker.on('link', result => {
  if (result.state === 'BROKEN') {
    console.log(`BROKEN [${result.status}]: ${result.url} (found in ${result.parent})`);
  }
});

const res = await checker.check({
  path: distDir,
  recurse: true,
  linksToSkip: [
    '^https?://maps\\.google\\.com',
    '^tel:',
    '^mailto:'
  ]
});

console.log(`\nLinkinator checked ${res.links.length} total links.`);
const broken = res.links.filter(x => x.state === 'BROKEN');
console.log(`Broken links count: ${broken.length}`);
process.exit(broken.length ? 1 : 0);

