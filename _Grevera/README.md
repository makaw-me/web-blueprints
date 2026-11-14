# Grevera — Real Estate & Property Marketplace

Grevera is a responsive static real estate web application built with HTML5, CSS3, Bootstrap 5, and JavaScript. It showcases residential and commercial property listings, property categories, certified advisors, client testimonials, and full support/legal documentation.

---

## Pages

| File | Description |
| :--- | :--- |
| `index.html` | Home page with hero carousel, property search bar, category grid, about overview, tabbed property listings (`Featured`, `For Sale`, `For Rent`), agent call-to-action, team profiles, and client testimonials. |
| `about.html` | Company overview, value propositions, certified agent CTA, and advisory team. |
| `property-list.html` | Full property listings with `Featured`, `For Sale`, and `For Rent` filter tabs. |
| `property-type.html` | Residential and commercial property categories (`Apartment`, `Villa`, `Home`, `Office`, `Building`, `Townhouse`, `Shop`, `Garage`). |
| `property-agent.html` | Licensed real estate advisors and direct contact CTA. |
| `testimonial.html` | Client reviews and testimonials carousel. |
| `contact.html` | Office contact cards (`tel:` / `mailto:`), embedded map, and inquiry form. |
| `faqs.html` | Accordion-based Frequently Asked Questions for buyers, renters, and property owners. |
| `help.html` | Help Center guides for buying, renting/leasing, listing properties, and advisory support. |
| `terms-of-service.html` | Terms of Service governing platform and advisory usage. |
| `privacy-policy.html` | Privacy Policy including the `#cookies` section for cookie and storage disclosures. |
| `404.html` | Custom 404 Page Not Found view with navigation back to Home. |

---

## Key Features & Standards

- **Accessibility (WCAG 2.2 / AAA Contrast)**:
  - High-contrast emerald primary palette (`#005F48`) paired with `#FFFFFF` and `#EFFDF5`, plus high-contrast dark footer text (`rgba(255, 255, 255, 0.88)` on `#0E2E50`).
  - `Skip to main content` link as the first focusable element on every page, semantic `<main>` and `<footer>` landmarks, labeled `<nav>` regions, single `<h1>` per page, and logical `h1` → `h2` → `h3` hierarchy.
  - 3px `:focus-visible` focus rings across light and dark surfaces, visually hidden `<label>` elements on search/newsletter inputs, `autocomplete` and `required` attributes on the contact form, `44px` minimum touch targets on interactive controls, and `@media (prefers-reduced-motion: reduce)` support.
  - Interactive `tel:+12125550194` and `mailto:hello@grevera.com` links across footer, contact cards, and FAQs.
- **Interactive Footer Design (`css/style.css`)**:
  - Quick Links with smooth slide-and-pill hover states and mint left-border accent (`#A8F5DF`).
  - Footer menu links with center-outward animated underlines.
  - Elevated fill-sweep social buttons and animated copyright links.
- **SEO, Open Graph & Favicons**:
  - Page-specific `<title>`, `<meta name="description">`, `<meta name="keywords">`, Open Graph (`og:title`, `og:description`, `og:image` `1200×630` at `img/og-image.jpg`), and Twitter Card (`summary_large_image`) tags on all 12 pages.
  - Grevera favicon suite: `img/favicon.svg`, `img/favicon.ico` (32×32), and `img/apple-touch-icon.png` (180×180).

---

## Project Structure

```text
_Grevera/
├── css/
│   ├── bootstrap.min.css
│   └── style.css
├── img/
│   ├── apple-touch-icon.png
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── og-image.jpg
│   ├── carousel-1.jpg, carousel-2.jpg
│   ├── property-1.jpg ... property-6.jpg
│   ├── team-1.jpg ... team-4.jpg
│   ├── testimonial-1.jpg ... testimonial-4.jpg
│   └── icon-*.png
├── js/
│   └── main.js
├── lib/
│   ├── animate/
│   ├── easing/
│   ├── owlcarousel/
│   ├── waypoints/
│   └── wow/
├── scss/
├── .gitignore
├── README.md
└── *.html (12 pages)
```

---

## Local Setup & Deployment

1. **Local Preview (XAMPP / Static Server)**:
   - Place the project folder in your web server root (e.g., `C:\xampp\htdocs\_Grevera`) and open `http://localhost/_Grevera/` in your browser, or serve it with any static HTTP server.
2. **Production Deployment**:
   - Upload all files to any static host (Apache, Nginx, Netlify, Vercel, GitHub Pages).
   - Update `og:image` and `twitter:image` relative paths (`img/og-image.jpg`) to your full production `https://` URLs so social crawlers resolve them.
   - Connect the contact form (`contact.html`) and newsletter signup to your backend endpoint or form service.

---

© Grevera, All Rights Reserved. Powered by [MAKAW](https://makaw.me).

