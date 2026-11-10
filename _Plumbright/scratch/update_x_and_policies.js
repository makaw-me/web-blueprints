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

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // 1. Footer Copyright
  const targetCopyright = '&copy; <a class="border-bottom" href="index.html">Plumbright</a>, All Rights Reserved.';
  const replacementCopyright = '&copy; <a class="border-bottom" href="index.html">Plumbright</a>, All Rights Reserved. <span class="mx-2 opacity-50" aria-hidden="true">|</span> <a class="border-bottom" href="index.html#terms">Terms of Use</a> <span class="mx-2 opacity-50" aria-hidden="true">|</span> <a class="border-bottom" href="index.html#privacy">Privacy Policy</a>';
  content = content.replace(targetCopyright, replacementCopyright);

  // 2. Footer Services & Policies
  content = content.replace('<h4 class="text-light mb-4">Services</h4>', '<h4 class="text-light mb-4">Services & Policies</h4>');
  content = content.replace(
    '<a class="btn btn-link" href="service.html">Broken Pipe</a>',
    '<a class="btn btn-link" href="index.html#terms">Terms of Use</a>\r\n                    <a class="btn btn-link" href="index.html#privacy">Privacy Policy</a>'
  );
  content = content.replace(
    '<a class="btn btn-link" href="service.html">Broken Pipe</a>',
    '<a class="btn btn-link" href="index.html#terms">Terms of Use</a>\n                    <a class="btn btn-link" href="index.html#privacy">Privacy Policy</a>'
  );

  fs.writeFileSync(file, content, 'utf8');
  console.log(`Added Terms of Use and Privacy Policy in ${file}`);
});
