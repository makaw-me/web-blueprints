# Novavia - Global Visa & Immigration Services

Novavia is a modern, responsive, high-performance static website for a premier global visa, immigration, and overseas education consultancy.

---

## 🚀 Key Features

* **Complete Multi-Page Architecture (9 Pages):**
  * `index.html` — Homepage with interactive hero carousel, service highlights, country pathways, client testimonials, and quick consultation inquiries.
  * `about.html` — Consultancy background, timeline, values, and milestone metrics.
  * `service.html` — Detailed breakdown of student, work, business, and tourist visa categories.
  * `countries.html` — Visa destination guides (USA, Canada, UK, Australia, Brazil, Italy, etc.).
  * `feature.html` — Key competitive advantages, process transparency, and success rates.
  * `training.html` — Language and visa coaching programs (IELTS, TOEFL, PTE, OET).
  * `testimonial.html` — Verified client reviews and success stories.
  * `contact.html` — Consultation booking form, office locations, and direct contact channels.
  * `404.html` — Branded, accessible 404 error page.

* **SEO & Discoverability Optimized:**
  * Unique, keyword-tailored `<title>` and `<meta name="description">` tags on every page.
  * Open Graph and Twitter Card metadata for rich social sharing previews.
  * JSON-LD Schema markup (`Organization`, `WebSite`, and `ProfessionalService`).
  * Valid [`robots.txt`](robots.txt) and [`sitemap.xml`](sitemap.xml) included.
  * Normalized heading structure (single semantic `<h1>` per page).
  * Self-referencing canonical URLs with clean routing enabled.

* **Accessibility Compliant (WCAG 2.2):**
  * Dedicated keyboard "Skip to main content" bypass navigation link.
  * Descriptive `aria-label` tags on all icon-only buttons, social links, carousels, and search triggers.
  * Explicit form labeling across all search and newsletter inputs.
  * Context-rich, descriptive `alt` text on all images.
  * High-contrast text throughout navigation and topbar (WCAG AAA compliant).

* **Performance & Core Web Vitals:**
  * Priority fetching (`fetchpriority="high"`) and asynchronous decoding on the primary LCP hero image.
  * Native lazy loading (`loading="lazy"` and `decoding="async"`) on all below-the-fold media.
  * Clean, zero-framework vanilla client-side execution.

---

## 📁 Project Structure

```text
├── css/                  # Compiled Bootstrap 5 & custom stylesheet (style.css)
├── img/                  # Optimized photography, flags, and brand assets
├── js/                   # Main interactivity scripts (sticky nav, counters, carousels)
├── lib/                  # Vendor plugins (Animate.css, WOW.js, Owl Carousel, Waypoints)
├── 404.html              # Custom 404 error template
├── about.html            # About Us page
├── contact.html          # Contact & Inquiry page
├── countries.html        # Visa destinations page
├── feature.html          # Key features page
├── index.html            # Primary homepage
├── service.html          # Visa services page
├── testimonial.html      # Client reviews page
├── training.html         # Coaching & training page
├── robots.txt            # Search engine crawler directives
├── sitemap.xml           # XML sitemap
├── vercel.json           # Vercel deployment config (clean URLs)
└── .vercelignore         # Files excluded from Vercel deployments
```

---

## 🌐 Deployment to Vercel

The project is pre-configured for instant zero-configuration deployment to Vercel.

### Method 1: Deploy with Vercel CLI
```bash
npx vercel
```

### Method 2: Deploy with Git & GitHub
1. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
2. Import the repository in your [Vercel Dashboard](https://vercel.com/new) and click **Deploy**.

---

## ⚡ Credits & Attribution

* Powered by [MAKAW](https://makaw.me)

