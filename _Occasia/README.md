# Occasia

Modern, static, fully accessible, and responsive website for **Occasia** — specialists in turnkey event management, scenic fabrication, and experiential brand activations.

Converted from legacy PHP to static HTML/CSS/JS, optimized for 1-click standalone and monorepo deployment on **Vercel** or any modern static hosting provider.

---

## Key Highlights & Updates

1. **Rebranded to Occasia**:
   - Replaced all previous branding with **Occasia**.
   - Standardized contact points: `contact@occasia.com`, `careers@occasia.com`, and official Delhi headquarters.

2. **100% Static HTML (No PHP, Zero Build Steps Required)**:
   - Standalone semantic HTML5 files with clean routing and zero server-side dependencies.
   - Clean page routing enabled with `.html` and `vercel.json` `cleanUrls` support.
   - All asset references (`css/`, `js/`, `img/`, `lib/`) use relative paths, making the project resilient whether deployed at the root of a domain or as a sub-path (`/_Occasia/`).

3. **Accessibility (WCAG 2.2) & Design Consistency**:
   - Touch targets for all interactive controls (icon buttons, toggles, back-to-top) meet or exceed 44x44px.
   - Visible 3px offset custom focus rings added via `:focus-visible`.
   - Accessible skip link (`.skip-link`) on every page.
   - Form fields have associated explicit `<label for="...">` and `autocomplete` attributes.
   - Respects `prefers-reduced-motion` settings.
   - AAA text contrast on light and dark surfaces.

4. **Updated Social Icons**:
   - Modernized the Twitter icon to the official **X** logo using an accessible inline SVG vector and `aria-label="X (formerly Twitter)"`.

5. **Legal & Governance Pages Added**:
   - [`privacy.html`](privacy.html) (Privacy Policy) and [`terms.html`](terms.html) (Terms of Service), linked across all page footers and sitemap.

6. **Footer Copyright & Attribution**:
   - Copyright line: `&copy; 2026 Occasia, All Rights Reserved.`
   - Attribution: `Powered by MAKAW` with link to `https://makaw.me`

7. **Vercel & Monorepo Deployment Ready**:
   - `vercel.json` configured with `"framework": null`, `cleanUrls`, strict Content-Security-Policy, security headers, and immutable static asset caching.
   - Automatic 404 handling via root [`404.html`](404.html).
   - `package.json` includes `dev`, `start`, and a safe `build` script (`echo 'Static build ready'`) to prevent monorepo build failures.
   - `robots.txt`, `sitemap.xml`, and `llms.txt` included.

---

## File Structure

```text
_Occasia/
├── index.html           # Homepage (Hero carousel, About summary, Capabilities, Gallery preview)
├── about.html           # About Occasia, production standards, and operational pillars
├── services.html        # Detailed breakdown of the 6 core event production capabilities
├── gallery.html        # Filterable project portfolio with Lightbox image viewers
├── careers.html         # Work culture, operational standards, open roles & application guide
├── contact.html         # Consultation request form, contact cards, and responsive map
├── privacy.html         # Privacy Policy
├── terms.html           # Terms of Service
├── 404.html             # Custom 404 error page (automatically served by Vercel on missing routes)
├── vercel.json          # Vercel configuration (routing, caching, CSP & security headers)
├── package.json         # Project metadata, monorepo safe build & local serve scripts
├── .vercelignore        # Deployment ignore rules
├── .gitignore           # Git ignore rules
├── robots.txt           # Search engine crawler instructions
├── sitemap.xml          # XML sitemap for SEO indexing
├── llms.txt             # Plain-text site summary for AI/LLM search systems
├── css/                 # Bootstrap and custom styles with accessibility enhancements
├── js/                  # Main scripts (sticky navbar, carousel, counters)
├── img/                 # Imagery, favicon, and icons
└── lib/                 # Vendor libraries (OwlCarousel, Lightbox, Isotope, WOW.js)
```

---

## Vercel Deployment Guide

### Monorepo Deployment (Recommended)

When this project resides inside a monorepo repository alongside other demo projects (e.g., `_Dextria`, `_Nexora`, `_Plumbright`, `_Wanderly`, etc.):

1. **Import Repository**:
   - Go to the [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New > Project**.
   - Select your monorepo repository.

2. **Configure Project Settings**:
   - **Project Name**: e.g., `occasia` (or `occasia-demo`)
   - **Framework Preset**: Select **Other** (the `"framework": null` setting in `vercel.json` will ensure zero-config static hosting).
   - **Root Directory**: Click **Edit** and set it to:
     ```text
     _Occasia
     ```
     *(Check the box "Include source files outside of the Root Directory in the Build Step" if your repo requires shared root dependencies, otherwise leave unchecked).*

3. **Build & Development Settings**:
   - **Build Command**: Leave default (`npm run build` will safely run `echo 'Static build ready'`).
   - **Output Directory**: Leave blank / default (`.` or root of `_Occasia`).
   - **Install Command**: Leave default or blank.

4. **Monorepo Ignored Build Step (Optional but Recommended)**:
   To prevent Vercel from rebuilding Occasia when changes only occur in other demo folders in the monorepo:
   - In Vercel Project Settings &rarr; **Git** &rarr; **Ignored Build Step**, select **Custom** and enter:
     ```bash
     git diff HEAD^ HEAD --quiet .
     ```
     *(When Vercel evaluates this command inside `_Occasia`, the build is skipped if no files in `_Occasia` changed).*

5. **Deploy**:
   - Click **Deploy**. Vercel will deploy the site with instant static caching, security headers, clean URLs, and custom 404 handling.

---

### Standalone / CLI Deployment

#### Option A: Deploying from the `_Occasia` directory
```bash
cd _Occasia
npx vercel
# To deploy to production:
npx vercel --prod
```

#### Option B: Deploying from the Monorepo Root via CLI
```bash
npx vercel --cwd _Occasia
# To deploy to production:
npx vercel --cwd _Occasia --prod
```

---

## Local Development Preview

You can run the local development server using `package.json` scripts:

```bash
# Start local server at http://localhost:3000
npm run dev

# Or with start script
npm start
```

Or directly via `npx serve`:
```bash
npx serve .
```

---

## Powered By

Powered by [MAKAW](https://makaw.me).
