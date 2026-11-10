const fs = require('fs');

const files = [
  'index.html',
  'about.html',
  'service.html',
  'booking.html',
  'team.html',
  'testimonial.html',
  'contact.html',
  '404.html'
];

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  console.log(`\n=== ${f} ===`);

  // Title
  const tMatch = c.match(/<title>([^<]*)<\/title>/);
  if (tMatch) {
    console.log(`Title (${tMatch[1].length} chars): "${tMatch[1]}"`);
  }

  // Description
  const dMatch = c.match(/<meta[^>]*content="([^"]*)"[^>]*name="description"/i) || c.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/i);
  if (dMatch) {
    console.log(`Desc (${dMatch[1].length} chars): "${dMatch[1]}"`);
  }

  // H1 elements
  const h1s = c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  console.log(`H1 count: ${h1s.length}`);
  h1s.forEach(h => console.log(`  - ${h.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ')}`));

  // Images check
  const imgs = c.match(/<img[^>]*>/gi) || [];
  let withoutLazy = 0;
  let withoutDims = 0;
  imgs.forEach(img => {
    if (!img.includes('loading="lazy"') && !img.includes('fetchpriority="high"')) {
      withoutLazy++;
    }
    if (!img.includes('width=') || !img.includes('height=')) {
      withoutDims++;
    }
  });
  console.log(`Images: ${imgs.length} total | without loading/fetchpriority: ${withoutLazy} | without width/height: ${withoutDims}`);
});

