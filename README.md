# Web Blueprints

A curated collection of production-grade, accessible, and high-performance website blueprints engineered for specialized industry verticals. Built with semantic HTML, modern CSS architecture, clean typography, and zero unnecessary client runtime overhead.

---

## Blueprint Directory

| Project | Industry / Vertical | Primary Stack | Key Highlights |
| :--- | :--- | :--- | :--- |
| [`_Aurelia`](./_Aurelia) | **Luxury Hospitality** | HTML5, CSS3, JS | Boutique hotel & suites showcase, room galleries, amenities, and booking workflow. |
| [`_ChiroHaven`](./_ChiroHaven) | **Healthcare & Physical Therapy** | Astro, Static HTML, CSS | WCAG 2.2 AAA contrast target, JSON-LD clinical schemas, interactive posture and symptom explorer, lightweight client store. |
| [`_Dextria`](./_Dextria) | **Digital Agency** | HTML5, CSS3, JS | Service matrices, case studies, project portfolio filters, and client contact funnels. |
| [`_Nexora`](./_Nexora) | **Corporate Advisory & Finance** | HTML5, CSS3, JS | M&A advisory, restructuring practice areas, partner credentials, and insight articles. |
| [`_Novavia`](./_Novavia) | **Immigration & Education** | HTML5, CSS3, JS | Visa category matrices, country requirements, eligibility checks, and consultation booking. |
| [`_Occasia`](./_Occasia) | **Events & Brand Activations** | HTML5, CSS3, JS | Turnkey event management, scenic fabrication portfolio, equipment specs, and RFQ forms. |
| [`_Plumbright`](./_Plumbright) | **Trade Services & Plumbing** | HTML5, CSS3, JS | Emergency callouts, commercial & residential service breakdown, clear pricing tables, and service area coverage. |
| [`_Tangerina`](./_Tangerina) | **Early Childhood Education** | HTML5, CSS3, JS | Preschool curriculum, age group programs, admission checklists, and campus facility tours. |
| [`_Voyagio`](./_Voyagio) | **Tours & Travel Packages** | HTML5, CSS3, JS | Multi-day package tours, itineraries, departure dates, pricing tiers, and booking inquiries. |
| [`_Wanderly`](./_Wanderly) | **Bespoke Travel Agency** | HTML5, CSS3, JS | Curated destination guides, custom itinerary planning, and travel experience showcases. |

---

## Architectural Standards

Every blueprint in this repository is built against rigorous engineering standards:

1. **Semantic HTML First**: Strict document outline, logical heading hierarchies (`h1` through `h4`), descriptive link copy, and proper Landmarks (`main`, `nav`, `aside`, `footer`).
2. **Accessibility (a11y)**:
   - High contrast compliance (targeting WCAG 2.2 requirements).
   - Full keyboard operability with custom `:focus-visible` indicators.
   - Screen-reader compatible forms with explicit `<label>` bindings and `aria-*` state flags.
   - Respect for `prefers-reduced-motion` and OS color preferences.
3. **Structured Data & SEO**:
   - Unique document `<title>` and `<meta name="description">` tags on every page template.
   - Open Graph and Twitter Card tags with dedicated 1200x630 share graphics.
   - Schema.org JSON-LD microdata (`MedicalBusiness`, `LocalBusiness`, `Organization`, `Service`, `BreadcrumbList`).
4. **Performance & Lightweight Assets**:
   - Modern image formats (`.webp`, `.avif`) with explicit `width`, `height`, and lazy loading.
   - Minimal client JavaScript footprint, using native browser capabilities wherever possible.

---

## Getting Started

### Prerequisites
- Node.js (v18.0.0 or later recommended)
- A local web server (e.g. `npx serve`, Python `http.server`, or Live Server)

### Running Static Blueprints (Aurelia, Dextria, Nexora, Novavia, Occasia, Plumbright, Tangerina, Voyagio, Wanderly)
The static blueprints can be previewed using any standard local web server:

```bash
# Example: serve the Aurelia project
npx serve _Aurelia -p 3000

# Or using Python 3
cd _Aurelia
python -m http.server 3000
```

### Running the Astro Blueprint (ChiroHaven)
`_ChiroHaven` is built with [Astro](https://astro.build) for static-site generation:

```bash
# Navigate to the project directory
cd _ChiroHaven

# Install dependencies
npm install

# Start local development server
npm run dev

# Build production static distribution
npm run build

# Preview the production build locally
npm run preview
```

---

## Deployment

Each folder is self-contained and ready for deployment to modern static hosting services:

- **Vercel**: Deploy the entire monorepo or set a single directory (e.g., `_ChiroHaven` or `_Nexora`) as the root directory in project settings.
- **Netlify**: Set the base directory to the desired project folder and publish `dist` (for Astro) or the project root (for static HTML).
- **GitHub Pages / Cloudflare Pages**: Connect the repository and point the static directory to any template of choice.

---

## License

This repository is maintained by [MAKAW](https://github.com/makaw-me). Blueprints and source files are provided for demo, template, and client showcase use.
