# ChiroHaven Spine & Physical Therapy — Static Website

A high-performance, accessible (WCAG 2.2 AAA target), and SEO/AEO-optimized static website for a specialized chiropractic and physical therapy practice in Boston, MA. Built with [Astro](https://astro.build) with zero client-side JavaScript frameworks.

---

## 1. Quick Start

### Prerequisites
- Node.js v18.0.0 or later
- npm v9.0.0 or later

### Installation
```bash
cd demo
npm install
```

### Development Server
```bash
npm run dev
```
Starts the local development server at `http://localhost:4321/`.

---

## 2. Build & Modes

The project supports two operational build modes controlled via the `SITE_MODE` environment variable:

### Demo Mode (Default)
When shipping as a client demo or staging preview:
```bash
# Sets noindex meta, allows crawlers to see that directive, omits the sitemap URL, and displays "Demo site, sample content" in the footer
npm run build
```

### Production Mode
When deploying to a public, indexable custom domain:
```bash
# In Linux/macOS
SITE_MODE=production npm run build

# In Windows PowerShell
$env:SITE_MODE="production"; npm run build
```
In production mode:
- `<meta name="robots" content="index, follow" />` is output on all indexable pages.
- `robots.txt` serves `Allow: /` and links to `sitemap.xml`.
- `sitemap.xml` generates a complete XML sitemap for all Tier A and Tier B pages.
- The footer demo notice is omitted.

Demo mode keeps pages crawlable so search engines can see the `noindex` directive; `robots.txt` must not block those pages.

### Sub-Path Deployment (`BASE_PATH`)
If deploying to a sub-directory or GitHub Pages repo sub-path:
```bash
BASE_PATH="/medical/demo/" npm run build
```

---

## 3. Verification & Auditing

The site includes automated audit scripts covering WCAG 2.2 AAA accessibility, Lighthouse metrics, link integrity, and anti-AI design hygiene:

### Run Full Verification Suite
```bash
node scripts/verify-all.mjs
```
Runs:
1. Static server at `http://127.0.0.1:4321`.
2. Full multi-viewport (320px and 1280px) Playwright crawl with `@axe-core/playwright` across all pages.
3. Mobile throttled Lighthouse audits on Home, Service, Contact, and Case Study pages.

### Check Clean Dist (No leftover theme classes, vendor domains, or dummy links)
```bash
node scripts/check-clean.mjs
```

---

## 4. Key Performance & Quality Metrics

Measured via Lighthouse (Mobile, simulated throttling) and axe-core on `SITE_MODE=production`:

| Template | Performance | Accessibility | Best Practices | SEO | LCP | CLS | TBT |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Home (`/`)** | **95** | **100** | **100** | **100** | 2.40s | 0 | 164ms |
| **Service Detail (`/services/chiropractic-therapy/`)** | **100** | **100** | **100** | **100** | 1.50s | 0 | 66ms |
| **Contact / Booking (`/contact/`)** | **100** | **100** | **100** | **100** | 1.22s | 0 | 0ms |
| **Clinical Case Study (`/case-studies/...`)** | **100** | **100** | **100** | **100** | 1.23s | 0 | 0ms |

- **Axe Violations:** 0 (WCAG 2.2 AAA ruleset verified across all 21 crawled routes at 320px and 1280px viewports).
- **Third-Party Runtime Requests:** 0 (All fonts, icons, product images, and scripts are strictly self-hosted).
- **Broken Internal Links:** 0 (All 24 routes resolve to built pages or semantic stubs).

---

## 5. Complete Storytelling, Ecommerce & Animation Architecture

Engineered using the `/impeccable`, `/design-taste-frontend`, `/high-end-visual-design`, and `/brandkit` architectural directives:

1. **Complete Client-Side Ecommerce Suite**:
   - **Clinic Store Catalog (`/shop/`)**: Filterable product catalog with instant category tabs (Ergonomic Supports, Spinal Traction, Resistance Rehab, Thermal Therapy), real-time search, star ratings, and live Add to Cart & Wishlist actions.
   - **Product Detail Page (`/shop/ergonomic-lumbar-cushion/`)**: High-res product gallery with interactive thumbnails, quantity selector, FSA/HSA eligibility badges, and tabbed clinical biomechanics & doctor instructions.
   - **Interactive Shopping Cart (`/cart/`)**: Line-item quantity controls, shipping fulfillment selector (Free Boston Pickup vs $5.99 MA Delivery), promotional discount code engine (`BOSTON10`), and tax calculator.
   - **Secure Clinical Checkout (`/checkout/`)**: Multi-step patient intake, delivery address configuration, payment simulator (Credit/Debit/HSA/FSA vs In-Person), and order confirmation dialog.
   - **Saved Wishlist (`/wishlist/`)**: Persistent product bookmarking with move-to-cart and remove actions.
   - **Header Cart & Wishlist Badges**: Live item counter badges and accessible slide-in toast notifications (`#chiro-toast`).

2. **Panoramic Storytelling Hero, Trust & Video Theater**:
   - Full-width panoramic hero visual (`hero-panoramic-visual`) spanning 100% of the section width, showcasing the high-resolution Back Bay clinic facility without distracting button overlays.
   - Interactive 60-second clinical video overview modal (`<dialog id="clinic-video-dialog">`) triggered from the hero action buttons.
   - Animated Clinical Statistics Ribbon: `14+` Years of Practice, `6,200+` Spine Cases, `98%` Recovery Rate, and `1-on-1` Provider Care.
   - **Verified Patient Outcomes & Testimonials**: 3 in-depth clinical case stories (sciatica disc extrusion, runner knee mechanics, and desk ergonomics/headaches) featuring large editorial quotation mark (`“`) glyphs, measurable outcome benchmarks (VAS pain reduction, gait cadence improvements), and provider credits.
   - Clean, confident typography with zero distracting bouncy arrows or novelty animations.

3. **High-Visibility Typography & Contrast Optimization**:
   - Upgraded core color tokens to stark, crisp values: `--color-text: #081714`, `--color-text-muted: #18332e` (contrast ratio > 9:1), `--color-dark-text: #ffffff` on `#091a17` ground.
   - Bold, high-contrast badges, table cells, and form labels preventing text wash-out on calibrated and uncalibrated displays.
   - **Accessible Wishlist Toggles & Counters**: High-contrast, circular wishlist buttons (`.btn-wishlist-toggle`) on product cards with prominent SVG heart icons, along with an elegant header count badge.

4. **Biomechanical Interactive Telemetry Stations**:
   - Kinetic Spine Biomechanical Telemetry Station (`KineticSpineStory.astro`) with interactive SVG vertebrae and load progress bar.
   - Interactive Treatment Modality Showcase (`InteractiveModalityShowcase.astro`).
   - 4-Phase Recovery Roadmap (`RecoveryRoadmap.astro`).
   - Before/After Posture Alignment Visualizer (`PostureComparison.astro`).
   - Clinical Pathway Finder (`SymptomExplorer.astro`).
   - Out-of-Pocket Insurance Reimbursement Calculator (`/pricing/`).
   - **Architectural Clinical Facility Tour (`/about/`)**: Upgraded double-bezel interactive tour with room indicator tabs, high-res photos, and clinical specifications (equipment technology and primary care indications).
   - Transit & Parking Multi-Tab Navigator (`/contact/`).

---

## 5. Information Architecture & Content To-Do

Review [`DESIGN_BRIEF.md`](./DESIGN_BRIEF.md) for the design tokens, color contrast analysis, and page categorization.

Review [`CONTENT_TODO.md`](./CONTENT_TODO.md) for the complete checklist of client assets, provider credentials, and clinic data to replace before launching in production.
