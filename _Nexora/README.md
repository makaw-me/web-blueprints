# Nexora - Strategic Corporate & Financial Advisory Website

A modern, accessible, and high-performance website template for **Nexora Advisory Group**, engineered for management consultancies, corporate advisory practices, restructuring firms, and M&A financial advisors.

---

## Features

- **Responsive Architecture**: Built on Bootstrap 5 with clean, modular CSS and zero unused bloat.
- **Corporate Content**: Complete, authentic corporate advisory copy covering Strategic Planning, Corporate Restructuring, Capital Allocation, M&A Valuation, and Board Governance.
- **Enhanced Interactivity**: 
  - Dynamic dropdown navigation with full keyboard navigation and Escape key handling.
  - Interactive, responsive footer links with smooth hover translation, color shifts, and tactile elevation on social media buttons.
  - Interactive email and telephone quick-connect links in the footer.
  - Progressively enhanced carousels (Owl Carousel & Bootstrap Carousel).
- **Accessibility (WCAG 2.2 Compliant)**:
  - Accessible contrast ratios meeting WCAG AAA specifications (>7.2:1 for body and highlights on white backgrounds).
  - Prominent skip link (`Skip to main content`) as the first interactive element.
  - Strictly one `<h1>` per page with a logical heading sequence.
  - Accessible name attributes, custom `:focus-visible` offset rings, and labelled landmark elements.
  - Complete support for `@media (prefers-reduced-motion: reduce)` and `@media (forced-colors: active)`.
  - All form controls linked to explicit `<label>` elements with standard `autocomplete` attributes.
- **Search & Discovery**: Complete `sitemap.xml` and `robots.txt` configuration.
- **Deployability**: Vercel-ready with preconfigured security headers, clean URLs, and monorepo compatibility.

---

## Pages Included

- `index.html` — Homepage featuring executive hero carousel, corporate overview, core advisory services, leadership highlights, consultation request form, and client testimonials.
- `about.html` — Executive mission, values, firm history, and leadership team overview.
- `service.html` — Detailed practice areas and consultation request section.
- `feature.html` — Why Nexora: strategic execution principles, data-backed modeling, and confidentiality standards.
- `quote.html` — Consultation request form for enterprise mandates.
- `team.html` — Leadership team bios for Managing Partners and practice leaders.
- `testimonial.html` — Verified executive feedback and strategic client outcomes.
- `blog.html` — Insights grid featuring 8 categorized analysis briefs and advisory search sidebar.
- `detail.html` — In-depth article analysis on corporate restructuring in volatile markets with discussion thread and reply form.
- `contact.html` — Corporate headquarters address, office map, and direct inquiry form.
- `404.html` — Branded 404 error page.

---

## Local Setup & Development

### Using XAMPP / Apache:
1. Place the project folder into your Apache document root:
   ```
   C:\xampp\htdocs\nexora
   ```
2. Start the Apache service from the XAMPP Control Panel.
3. Open your browser and navigate to:
   ```
   http://localhost/nexora/
   ```

### Using Node.js:
Run a local development static server:
```bash
npm run dev
# or
npx serve -l 3000 .
```
Navigate to `http://localhost:3000`.

---

## Vercel Deployment (Monorepo Setup)

This project is fully configured for deployment on **Vercel**, both as a standalone website or as a project within a **monorepo** alongside other demo websites.

### 1. Setting the Root Directory
When connecting the monorepo Git repository to Vercel:
1. In the Vercel dashboard, click **Add New Project** and select your monorepo repository.
2. In the **Configure Project** step, find **Root Directory**.
3. Click **Edit** and set it to:
   ```
   nexora
   ```
4. Set **Framework Preset** to **Other** (pure static HTML/CSS/JS).

### 2. Monorepo Git Build Filtering (Ignored Build Step)
To ensure Vercel only rebuilds this deployment when changes are pushed specifically to `nexora` (ignoring commits made to sibling demo projects in the monorepo):
1. Navigate to **Project Settings** &rarr; **Git** &rarr; **Ignored Build Step**.
2. Select **Custom** and enter:
   ```bash
   git diff --quiet HEAD^ HEAD -- .
   ```
   *(When changes do not affect this folder, the command exits with code `0`, signaling Vercel to skip the build and save deployment quota).*

### 3. Built-In `vercel.json` Capabilities
The included `vercel.json` automatically provides:
- **Clean URLs**: Enables extensionless paths (e.g. `/about`, `/service`, `/contact`).
- **Security Headers**: Standard `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy`, and `Permissions-Policy`.
- **Static Asset Caching**: Long-term immutable caching (`Cache-Control: public, max-age=31536000, immutable`) for assets in `/css`, `/js`, `/img`, and `/lib`.

---

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details. Powered by [MAKAW](https://makaw.me).

