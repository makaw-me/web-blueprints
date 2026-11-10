const fs = require('fs');

const pages = {
  'index.html': {
    title: 'Plumbing & Drain Services in New York | Plumbright', // 51 chars
    desc: 'Plumbright provides dependable residential and commercial plumbing services. Available 24/7 for emergency repairs, drain clearing, and water heater repairs.' // 158 chars
  },
  'about.html': {
    title: 'About Our Licensed Plumbing Specialists | Plumbright', // 53 chars
    desc: 'Learn about Plumbright, our 30+ year history of providing certified residential and commercial plumbing services, and our dedicated team of master plumbers.' // 156 chars
  },
  'service.html': {
    title: 'Residential & Commercial Plumbing Services | Plumbright', // 55 chars
    desc: 'Explore Plumbright\'s professional plumbing services including drain cleaning, sewer repair, water heater maintenance, and 24/7 emergency repairs in New York.' // 157 chars
  },
  'booking.html': {
    title: 'Schedule Licensed Plumbing Services Online | Plumbright', // 55 chars
    desc: 'Schedule an appointment with Plumbright\'s licensed plumbers. Fast booking for residential repairs, commercial inspections, and emergency services in New York.' // 158 chars
  },
  'team.html': {
    title: 'Certified Master Plumbers & Technicians | Plumbright', // 52 chars
    desc: 'Meet Plumbright\'s certified master plumbers and technicians providing dependable residential repairs, sewer diagnostics, and commercial plumbing solutions.' // 156 chars
  },
  'testimonial.html': {
    title: 'Client Reviews & Plumbing Testimonials | Plumbright', // 51 chars
    desc: 'Read authentic customer reviews and testimonials from homeowners and business managers who rely on Plumbright for professional residential plumbing services.' // 158 chars
  },
  'contact.html': {
    title: '24/7 Emergency Plumbing & Repair Contact | Plumbright', // 53 chars
    desc: 'Contact Plumbright for immediate 24/7 emergency plumbing repairs, transparent upfront quotes, or to schedule an on-site consultation in New York and nearby.' // 157 chars
  },
  '404.html': {
    title: '404 Page Not Found - Plumbing Support | Plumbright', // 50 chars
    desc: 'The requested page could not be located. Return to the Plumbright homepage to explore our residential plumbing services or contact our team for assistance.' // 156 chars
  }
};

const imgDims = {
  'carousel-1.jpg': { width: 1920, height: 1080 },
  'carousel-2.jpg': { width: 1920, height: 1080 },
  'about-1.jpg': { width: 700, height: 700 },
  'about-2.jpg': { width: 400, height: 400 },
  'service-1.jpg': { width: 500, height: 300 },
  'service-2.jpg': { width: 500, height: 300 },
  'service-3.jpg': { width: 500, height: 300 },
  'team-1.jpg': { width: 400, height: 400 },
  'team-2.jpg': { width: 400, height: 400 },
  'team-3.jpg': { width: 400, height: 400 },
  'team-4.jpg': { width: 400, height: 400 },
  'testimonial-1.jpg': { width: 100, height: 100 },
  'testimonial-2.jpg': { width: 100, height: 100 },
  'testimonial-3.jpg': { width: 100, height: 100 },
  'testimonial-4.jpg': { width: 100, height: 100 }
};

Object.keys(pages).forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const meta = pages[file];

  // 1. Update Title
  content = content.replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`);
  content = content.replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${meta.title}"`);

  // 2. Update Meta Description
  content = content.replace(/<meta content="[^"]*" name="description">/, `<meta content="${meta.desc}" name="description">`);
  content = content.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${meta.desc}">`);
  content = content.replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${meta.desc}"`);

  // 3. Demote Brand logo <h1 class="text-primary m-0">Plumbright</h1> to <span class="h1 text-primary m-0">Plumbright</span>
  content = content.replace(/<h1 class="text-primary m-0">Plumbright<\/h1>/g, '<span class="h1 text-primary m-0">Plumbright</span>');

  // 4. In inner pages, ensure the Page Header is the ONLY <h1>
  if (file !== 'index.html' && file !== '404.html') {
    // Demote any <h1> inside the main body to <h2>
    // We match <h1> that is NOT in page-header
    const parts = content.split('<!-- Page Header End -->');
    if (parts.length === 2) {
      let mainPart = parts[1];
      mainPart = mainPart.replace(/<h1 class="([^"]*)">/g, '<h2 class="$1">');
      mainPart = mainPart.replace(/<\/h1>/g, '</h2>');
      content = parts[0] + '<!-- Page Header End -->' + mainPart;
    }
  } else if (file === '404.html') {
    // On 404, Page header has <h1>Not Found</h1>
    // In body: <p class="display-1 text-primary fw-bold mb-2">404</p> and <h2 class="mb-4">Page Not Found</h2>
    content = content.replace('<i class="bi bi-exclamation-triangle display-1 text-primary" aria-hidden="true"></i>\n                    <h1 class="display-1">404</h1>\n                    <h1 class="mb-4">Page Not Found</h1>', '<i class="bi bi-exclamation-triangle display-1 text-primary" aria-hidden="true"></i>\n                    <p class="display-1 text-primary fw-bold mb-0" aria-hidden="true">404</p>\n                    <h2 class="mb-4">Page Not Found</h2>');
    content = content.replace('<i class="bi bi-exclamation-triangle display-1 text-primary" aria-hidden="true"></i>\r\n                    <h1 class="display-1">404</h1>\r\n                    <h1 class="mb-4">Page Not Found</h1>', '<i class="bi bi-exclamation-triangle display-1 text-primary" aria-hidden="true"></i>\r\n                    <p class="display-1 text-primary fw-bold mb-0" aria-hidden="true">404</p>\r\n                    <h2 class="mb-4">Page Not Found</h2>');
  } else if (file === 'index.html') {
    // On index.html: exactly one <h1> on carousel item 1
    // Demote carousel item 2 <h1> to <h2>
    content = content.replace('<h1 class="display-3 text-white animated slideInDown mb-4">Expert Commercial Plumbing Services</h1>', '<h2 class="display-3 text-white animated slideInDown mb-4">Expert Commercial Plumbing Services</h2>');
    // Demote About section <h1> to <h2>
    content = content.replace('<h1 class="mb-4">We Are a Trusted Plumbing Company Since 1990</h1>', '<h2 class="mb-4">We Are a Trusted Plumbing Company Since 1990</h2>');
    // Demote Fact rotate <h1> to <h2>
    content = content.replace('<h1 class="display-3 text-white m-0" style="transform: rotate(-90deg);">34 Years Experience</h1>', '<h2 class="display-3 text-white m-0" style="transform: rotate(-90deg);">34 Years Experience</h2>');
    // Demote Services <h1> to <h2>
    content = content.replace('<h1 class="mb-5">Explore Our Services</h1>', '<h2 class="mb-5">Explore Our Services</h2>');
    // Demote Emergency <h1> to <h2>
    content = content.replace('<h1 class="text-white mb-4">Emergency Plumbing Service</h1>', '<h2 class="text-white mb-4">Emergency Plumbing Service</h2>');
    // Demote Booking <h1> to <h2>
    content = content.replace('<h1 class="mb-4">Book a Service</h1>', '<h2 class="mb-4">Book a Service</h2>');
    // Demote Technicians <h1> to <h2>
    content = content.replace('<h1 class="mb-5">Our Expert Technicians</h1>', '<h2 class="mb-5">Our Expert Technicians</h2>');
    // Demote Testimonial <h1> to <h2>
    content = content.replace('<h1 class="mb-5">Our Clients Say!</h1>', '<h2 class="mb-5">Our Clients Say!</h2>');
  }

  // 5. Update Images with explicit width/height and loading/decoding
  // LCP image is carousel-1.jpg on index.html: gets fetchpriority="high", decoding="async", explicit width/height
  Object.keys(imgDims).forEach(imgName => {
    const dim = imgDims[imgName];
    // Find all <img ... src="...imgName"...>
    const regex = new RegExp(`(<img\\s+[^>]*src="img\\/${imgName}"[^>]*>)`, 'g');
    content = content.replace(regex, (match) => {
      let tag = match;
      if (!tag.includes('width=')) {
        tag = tag.replace('<img ', `<img width="${dim.width}" height="${dim.height}" `);
      }
      if (imgName === 'carousel-1.jpg' && file === 'index.html') {
        if (!tag.includes('fetchpriority=')) {
          tag = tag.replace('<img ', '<img fetchpriority="high" decoding="async" ');
        }
      } else {
        if (!tag.includes('loading=')) {
          tag = tag.replace('<img ', '<img loading="lazy" decoding="async" ');
        }
      }
      return tag;
    });
  });

  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated ${file}`);
});

