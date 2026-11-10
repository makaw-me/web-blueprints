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
  const matches = [];
  const regex = /(src|href)="([^"]*)"/g;
  let m;
  while ((m = regex.exec(c)) !== null) {
    const val = m[2];
    if (val.startsWith('/') && !val.startsWith('//')) {
      matches.push(val);
    }
  }
  if (matches.length > 0) {
    console.log(f, 'has leading slash paths:', matches);
  }
});
console.log('Path check complete.');

