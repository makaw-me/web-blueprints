# Aurelia Hotel & Suites — Luxury Boutique Hotel Website

A modern, responsive, high-performance website for **Aurelia Hotel & Suites**, an intimate boutique luxury hotel and residential retreat located in Paris, France.

---

## Brand Overview
- **Brand Name**: Aurelia Hotel & Suites
- **Brand Meaning**: Derived from the Latin *aureus* ("golden", "radiant"), reflecting timeless neoclassical elegance, warm hospitality, and bespoke luxury.
- **Location**: 124 Avenue des Champs-Élysées, 75008 Paris, France
- **Powered by**: [MAKAW](https://makaw.me)

---

## Key Features & Enhancements
- **Accessibility (WCAG 2.2 AAA standard)**:
  - High text-to-background contrast meeting and exceeding 7:1 for body copy and 4.5:1 for headers.
  - Visible `:focus-visible` custom focus rings (3px solid ruby crimson with offset, and champagne gold for dark containers).
  - Semantic HTML structure with `<main id="main-content">`, `<nav>`, `<section>`, `<article>`, and `<footer>`.
  - Accessible "Skip to main content" link on every page.
  - Full keyboard navigability without focus traps.
  - Form fields equipped with programmatic `<label for="...">`, autocomplete attributes, and field descriptions.
  - Meaningful `alt` text and explicit width/height dimensions on all images to prevent Cumulative Layout Shift (CLS).
  - Unlocked mobile zoom (viewport meta tag fixed, removing `maximum-scale=1`).
  - Respects user preferences with `@media (prefers-reduced-motion: reduce)` and high-contrast support via `@media (forced-colors: active)`.
- **English Sanity Audit**:
  - Completely purged all placeholder text, Latin Lorem Ipsum snippets, and Letraset dry-transfer copy.
  - Restored natural, evocative, and grammatically polished hospitality copy across all rooms, suites, blog articles, and about pages.
  - Distinctive naming and descriptions for all 6 signature guest rooms and suites.
- **Security & Privacy**:
  - Removed outdated third-party tracking scripts (`leostop.com/tracking/tracking.js`).
  - Strict `rel="noopener noreferrer"` attributes on all external links opening in new windows.
  - Schema.org JSON-LD structured data for rich search engine and voice assistant indexing.

---

## Project Structure
```
keto-1.0.0/
├── index.html       # Homepage with banner, booking widget, about, rooms, gallery, blog, contact
├── about.html       # Brand story, history, and bespoke service philosophy
├── room.html        # Comprehensive showcase of rooms and luxury suites
├── gallery.html     # High-resolution photo gallery of interior and exterior amenities
├── blog.html        # Concierge travel stories, culinary highlights, and Parisian guides
├── contact.html     # Reservation inquiry form, contact info, and Google Maps embed
├── css/             # Stylesheets (style.css, bootstrap, responsive.css)
├── js/              # Client-side scripts (bootstrap, jquery, custom.js)
├── fonts/           # Local font assets and FontAwesome icons
└── images/          # High-resolution optimized photography and brand assets
```

---

## Local Setup & Preview
To run locally using any static web server or PHP/Apache (e.g. XAMPP):
1. Place the project folder into your web root (e.g. `C:\xampp\htdocs\keto-1.0.0`).
2. Start your Apache server via the XAMPP Control Panel or run a quick local server:
   ```bash
   # Node.js
   npx serve .

   # Or Python
   python -m http.server 8080

   # Or PHP built-in server
   php -S localhost:8080
   ```
3. Open `http://localhost:8080/index.html` in your browser.

---

## Vercel Deployment & Monorepo Guide

This project is fully configured for deployment on **Vercel**, both as a standalone website and as part of a **monorepo** containing multiple demo projects.

### Option A: Monorepo Deployment via Vercel Root Directory (Recommended)
When your Git repository hosts multiple demo folders side-by-side (e.g. `keto-1.0.0`, `travela-1.0.0`, `doctor`, etc.):
1. In the **Vercel Dashboard**, click **Add New Project** and import the parent monorepo.
2. In the **Configure Project** screen:
   - Expand **Root Directory**.
   - Select or type `keto-1.0.0` (or the folder name where this project resides).
   - Leave the **Framework Preset** as *Other*.
   - Build Command: `npm run build` (or leave default).
   - Output Directory: leave empty (it serves the project root).
3. Click **Deploy**. Vercel will build and host this demo independently with its own domain and automated preview deployments on git pushes.

### Option B: Monorepo Unified Deployment via Parent `vercel.json`
If you wish to deploy the entire monorepo under a single root Vercel domain with subpath routing (e.g., `https://your-demos.vercel.app/aurelia/` or `/keto-1.0.0/`):
In the **root of the parent repository**, create a `vercel.json` with rewrites:
```json
{
  "rewrites": [
    { "source": "/aurelia", "destination": "/keto-1.0.0/index.html" },
    { "source": "/aurelia/:match*", "destination": "/keto-1.0.0/:match*" }
  ]
}
```
Because all asset paths in this demo (`css/...`, `images/...`, `js/...`, `about.html`) are strictly relative, the project seamlessly functions under subpath routing without asset breakage.

### Configuration Files Included
- **`vercel.json`**: Preconfigured with `cleanUrls: true`, `trailingSlash: false`, strict security headers (`nosniff`, `DENY`, `strict-origin-when-cross-origin`, `Permissions-Policy`), and immutable browser caching for static assets (`/images/`, `/fonts/`, `/css/`, `/js/`).
- **`package.json`**: Provides standard npm/pnpm/yarn monorepo workspace compatibility with zero dependencies, defining `build`, `start`, and `test` scripts.
- **`.vercelignore`**: Excludes development scratch scripts, OS artifacts, and log files from production deployment.


