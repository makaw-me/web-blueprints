const fs = require('fs');
const path = require('path');

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

let allPassed = true;

function assert(condition, message) {
  if (!condition) {
    console.error('❌ FAIL:', message);
    allPassed = false;
  } else {
    console.log('✅ PASS:', message);
  }
}

files.forEach(file => {
  console.log(`\n--- Auditing ${file} ---`);
  const content = fs.readFileSync(file, 'utf8');

  // 1. Plumberz check
  assert(!content.toLowerCase().includes('plumberz'), `${file}: No mention of "Plumberz"`);

  // 2. HTML Codex check
  assert(!content.toLowerCase().includes('html codex') && !content.toLowerCase().includes('htmlcodex'), `${file}: No mention of HTML Codex`);

  // 3. MAKAW check
  assert(content.includes('https://makaw.me') && content.includes('MAKAW'), `${file}: Powered by MAKAW credit present`);

  // 4. Plumbright check
  assert(content.includes('Plumbright'), `${file}: Plumbright branding present`);

  // 5. Main landmark check
  const mainOpenMatches = content.match(/<main id="main-content">/g);
  const mainCloseMatches = content.match(/<\/main>/g);
  assert(mainOpenMatches && mainOpenMatches.length === 1, `${file}: Exactly one <main id="main-content"> open tag`);
  assert(mainCloseMatches && mainCloseMatches.length === 1, `${file}: Exactly one </main> close tag`);

  // 6. Skip link check
  assert(content.includes('class="skip-link"'), `${file}: Skip to main content link present`);

  // 7. Canonical link check
  const canonicalMatch = content.match(/<link rel="canonical" href="https:\/\/plumbright\.com\/([^"]*)">/);
  assert(canonicalMatch !== null, `${file}: Valid canonical URL tag present`);

  // 8. JSON-LD check
  const jsonLdMatch = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert(jsonLdMatch !== null, `${file}: JSON-LD script present`);
  if (jsonLdMatch) {
    try {
      JSON.parse(jsonLdMatch[1]);
      assert(true, `${file}: JSON-LD is valid parseable JSON`);
    } catch (e) {
      assert(false, `${file}: JSON-LD failed to parse: ` + e.message);
    }
  }

  // 9. Encoding artifacts check
  assert(!content.includes('â'), `${file}: Zero UTF-8 encoding corruption artifacts`);

  // 10. Low contrast text-secondary on bg-primary check
  // Check if text-secondary is placed within the immediate contents of a bg-primary element
  const bgPrimaryBlocks = content.match(/<div[^>]*class="[^"]*bg-primary[^"]*"[^>]*>[\s\S]*?<\/div>/g) || [];
  let directSecondaryInPrimary = false;
  bgPrimaryBlocks.forEach(block => {
    if (block.includes('text-secondary')) {
      directSecondaryInPrimary = true;
      console.error(`Found text-secondary in bg-primary block in ${file}:`, block);
    }
  });
  assert(!directSecondaryInPrimary, `${file}: Zero text-secondary inside bg-primary`);

  // 11. Image alt checks
  const imgRegex = /<img\s+([^>]*?)>/gi;
  let imgMatch;
  let missingAlt = false;
  while ((imgMatch = imgRegex.exec(content)) !== null) {
    if (!imgMatch[1].includes('alt="') && !imgMatch[1].includes("alt='")) {
      missingAlt = true;
      console.error('Image missing alt:', imgMatch[0]);
    }
  }
  assert(!missingAlt, `${file}: All <img> elements have alt attributes`);

  // 12. Input label association check
  const inputRegex = /<(input|select|textarea)\s+([^>]*?)>/gi;
  let inputMatch;
  let unlabelledInput = false;
  while ((inputMatch = inputRegex.exec(content)) !== null) {
    const attrs = inputMatch[2];
    const typeMatch = attrs.match(/type="([^"]*)"/);
    const type = typeMatch ? typeMatch[1] : (inputMatch[1] === 'select' ? 'select' : (inputMatch[1] === 'textarea' ? 'textarea' : 'text'));
    if (['hidden', 'submit', 'button'].includes(type)) continue;

    const idMatch = attrs.match(/id="([^"]*)"/);
    const ariaLabel = attrs.match(/aria-label="([^"]*)"/);
    const ariaLabelledby = attrs.match(/aria-labelledby="([^"]*)"/);

    let hasLabel = false;
    if (idMatch) {
      const id = idMatch[1];
      const labelRegex = new RegExp(`<label[^>]*for=["']${id}["']`, 'i');
      if (labelRegex.test(content)) hasLabel = true;
    }
    if (ariaLabel || ariaLabelledby) hasLabel = true;

    if (!hasLabel) {
      unlabelledInput = true;
      console.error(`Unlabelled input in ${file}:`, inputMatch[0]);
    }
  }
  assert(!unlabelledInput, `${file}: All inputs have accessible labels`);

  // 13. Back to top button accessible label
  const backToTopMatch = content.match(/class="[^"]*back-to-top[^"]*"/);
  if (backToTopMatch) {
    const bttTag = content.substr(backToTopMatch.index - 50, 200).match(/<a[^>]*back-to-top[^>]*>/);
    assert(bttTag && bttTag[0].includes('aria-label='), `${file}: Back-to-top button has aria-label`);
  }
});

console.log('\n=======================================');
if (allPassed) {
  console.log('🎉 ALL ACCESSIBILITY & SANITY CHECKS PASSED!');
} else {
  console.log('⚠️ SOME CHECKS FAILED - REVIEW ABOVE OUTPUT.');
}
