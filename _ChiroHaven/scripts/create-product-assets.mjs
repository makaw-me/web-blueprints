import fs from 'fs';
import path from 'path';
import sharp from '../node_modules/sharp/lib/index.js';

const outDir = path.resolve('demo/public/images');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const products = [
  {
    filename: 'prod-lumbar-cushion.webp',
    title: 'Ergonomic Lumbar Cushion',
    sub: 'High-Density Memory Foam with Spinal Groove',
    color1: '#1b3b35',
    color2: '#0c221f',
    accent: '#8be2c7',
    iconSvg: `
      <rect x="140" y="160" width="320" height="240" rx="40" fill="#244d45" stroke="#8be2c7" stroke-width="4"/>
      <path d="M300 170 Q300 280 300 390" stroke="#122b26" stroke-width="24" stroke-linecap="round"/>
      <path d="M220 220 C220 200 380 200 380 220 C380 320 220 320 220 220 Z" fill="#183630" opacity="0.6"/>
      <circle cx="300" cy="280" r="14" fill="#8be2c7"/>
    `
  },
  {
    filename: 'prod-cervical-pillow.webp',
    title: 'Cervical Contour Traction Pillow',
    sub: 'Orthopedic Neck Cradle &amp; Head Cavity',
    color1: '#263238',
    color2: '#102027',
    accent: '#80cbc4',
    iconSvg: `
      <rect x="120" y="180" width="360" height="200" rx="36" fill="#37474f" stroke="#80cbc4" stroke-width="4"/>
      <ellipse cx="300" cy="270" rx="80" ry="50" fill="#1a272c"/>
      <path d="M140 330 Q300 360 460 330" stroke="#80cbc4" stroke-width="8" fill="none" stroke-linecap="round"/>
    `
  },
  {
    filename: 'prod-rehab-bands.webp',
    title: 'Progressive Rehab Bands (Set of 5)',
    sub: 'Latex-Free Calibrated Resistance',
    color1: '#3e2723',
    color2: '#1b0000',
    accent: '#ffab91',
    iconSvg: `
      <rect x="130" y="170" width="340" height="50" rx="16" fill="#d32f2f" stroke="#ffcdd2" stroke-width="2"/>
      <rect x="130" y="230" width="340" height="50" rx="16" fill="#f57c00" stroke="#ffe0b2" stroke-width="2"/>
      <rect x="130" y="290" width="340" height="50" rx="16" fill="#388e3c" stroke="#c8e6c9" stroke-width="2"/>
      <rect x="130" y="350" width="340" height="50" rx="16" fill="#1976d2" stroke="#bbdefb" stroke-width="2"/>
    `
  },
  {
    filename: 'prod-posture-brace.webp',
    title: 'Adjustable Posture Clavicle Brace',
    sub: 'Breathable Scapular Retractor',
    color1: '#1a237e',
    color2: '#0d133a',
    accent: '#9fa8da',
    iconSvg: `
      <path d="M180 180 L300 280 L420 180" stroke="#9fa8da" stroke-width="24" stroke-linecap="round" fill="none"/>
      <path d="M180 380 L300 280 L420 380" stroke="#9fa8da" stroke-width="24" stroke-linecap="round" fill="none"/>
      <circle cx="300" cy="280" r="28" fill="#ffca28"/>
    `
  },
  {
    filename: 'prod-foam-roller.webp',
    title: 'High-Density Spine Foam Roller',
    sub: 'Deep Myofascial Trigger Grid (36 Inch)',
    color1: '#212121',
    color2: '#000000',
    accent: '#b0bec5',
    iconSvg: `
      <rect x="160" y="140" width="280" height="280" rx="140" fill="#2d3748" stroke="#cbd5e0" stroke-width="4"/>
      <circle cx="300" cy="280" r="80" fill="#1a202c"/>
      <circle cx="300" cy="280" r="40" fill="#0d1117"/>
      <path d="M220 280 L160 280 M380 280 L440 280 M300 200 L300 140 M300 360 L300 420" stroke="#a0aec0" stroke-width="8"/>
    `
  },
  {
    filename: 'prod-cryo-pack.webp',
    title: 'Cryo-Gel Reusable Lumbar Pack',
    sub: 'Cold &amp; Hot Compression Therapy',
    color1: '#004d40',
    color2: '#00251a',
    accent: '#4db6ac',
    iconSvg: `
      <rect x="140" y="180" width="320" height="200" rx="30" fill="#00796b" stroke="#80dfc8" stroke-width="4"/>
      <path d="M180 240 Q300 220 420 240 Q300 320 180 240 Z" fill="#004d40" opacity="0.6"/>
      <circle cx="240" cy="280" r="12" fill="#e0f2f1"/>
      <circle cx="300" cy="270" r="16" fill="#e0f2f1"/>
      <circle cx="360" cy="280" r="12" fill="#e0f2f1"/>
    `
  }
];

for (const p of products) {
  const svg = `
    <svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg-${p.filename}" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stop-color="${p.color1}"/>
          <stop offset="100%" stop-color="${p.color2}"/>
        </radialGradient>
        <filter id="shadow">
          <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.45"/>
        </filter>
      </defs>
      
      <!-- Outer Canvas -->
      <rect width="600" height="600" fill="url(#bg-${p.filename})"/>
      <rect x="20" y="20" width="560" height="560" rx="20" fill="none" stroke="${p.accent}" stroke-width="1.5" stroke-opacity="0.25"/>
      
      <!-- Product Icon Art with Shadow -->
      <g filter="url(#shadow)">
        ${p.iconSvg}
      </g>
      
      <!-- Top Clinic Badge -->
      <g transform="translate(40, 50)">
        <rect x="0" y="0" width="165" height="28" rx="6" fill="${p.accent}" fill-opacity="0.15" stroke="${p.accent}" stroke-width="1"/>
        <text x="12" y="19" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="${p.accent}" letter-spacing="1">CHIROHAVEN CLINIC</text>
      </g>
      
      <!-- Bottom Metadata Panel -->
      <g transform="translate(40, 480)">
        <text x="0" y="30" font-family="'Georgia', serif" font-size="24" font-weight="700" fill="#ffffff">${p.title}</text>
        <text x="0" y="60" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="#cde0d9">${p.sub}</text>
      </g>
    </svg>
  `;

  const dest = path.join(outDir, p.filename);
  await sharp(Buffer.from(svg))
    .webp({ quality: 90 })
    .toFile(dest);
  console.log(`Created: ${dest}`);
}

console.log('All 6 product images generated successfully.');
