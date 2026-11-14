# Heliotrion — Solar & Renewable Energy Website

**Heliotrion** is a responsive static website for a solar, wind, hydropower, and battery energy storage company. Built with HTML5, Bootstrap 5, custom CSS design tokens, and progressive JavaScript enhancements, it includes 15 pages covering core offerings, project showcases, customer support, careers, FAQs, and legal documentation.

Powered by [MAKAW](https://makaw.me).

---

## Project Structure

```text
_Heliotrion/
├── index.html          # Homepage (hero carousel, stats, about, services, projects, quote, team, testimonials)
├── about.html          # Company overview, stats, and leadership team
├── service.html        # Full suite of 6 renewable energy & maintenance services
├── project.html        # Filterable project portfolio (All, Solar Panels, Wind Turbines, Hydropower Plants)
├── feature.html        # Key differentiators and engineering highlights
├── quote.html          # Free solar & renewable energy quote request form
├── team.html           # Full engineering & operations leadership directory
├── testimonial.html    # Client testimonials carousel
├── contact.html        # Contact form and New York office map
├── faq.html            # Frequently Asked Questions (accordion)
├── support.html        # Customer Support Center, warranty claims, and support ticket form
├── careers.html        # Open positions and job application form
├── terms.html          # Terms of Service
├── privacy.html        # Privacy Policy
├── 404.html            # Custom 404 Not Found page
├── css/
│   ├── bootstrap.min.css
│   └── style.css       # Custom Heliotrion theme, accessibility, and interactive styles
├── js/
│   └── main.js         # Carousel, isotope filters, counters, and form/newsletter feedback
├── img/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   └── ...             # Photography and gallery assets
├── lib/                # Vendor libraries (animate.css, counterup, easing, isotope, lightbox, owlcarousel, waypoints, wow)
├── scss/               # Bootstrap SCSS source files
├── .gitignore
└── README.md
```

---

## Design System & Accessibility

- **Color Palette (`css/style.css`)**:
  - `--primary`: `#116B39` (`--primary-hover`: `#0D572E`) for accessible text and button contrast on light backgrounds
  - `--accent`: `#32C36C` for highlights and interactive states on dark surfaces
  - `--dark`: `#1A2A36`
  - `--light`: `#F6F7F8`
  - `--footer-text`: `#DCE2E8`
- **Accessibility**:
  - `Skip to main content` link as the first focusable element and a single `<main id="main-content">` landmark per page
  - Strictly one `<h1>` per page with logical heading hierarchy
  - Visible `:focus-visible` focus rings on light and dark surfaces, `:focus-within` support for desktop dropdowns and overlays, and `44x44px` minimum touch targets for social/topbar icon links
  - Keyboard-accessible `<button>` portfolio filters with `aria-pressed` state
  - `@media (prefers-reduced-motion: reduce)` support
  - Directly clickable phone (`tel:+12125550194`) and email (`mailto:hello@heliotrion.com`, `mailto:support@heliotrion.com`, `mailto:careers@heliotrion.com`) links
- **Favicon**:
  - Custom Heliotrion geometric **H** and solar ring emblem in `img/favicon.svg`, `img/favicon.ico`, and `img/apple-touch-icon.png`, linked across all 15 pages.

---

## Local Setup & Preview

No build step is required—the site is pure static HTML/CSS/JS.

### Option 1: XAMPP / Apache
1. Place the project folder inside `htdocs` (e.g. `c:\xampp\htdocs\_Heliotrion`).
2. Start **Apache** in the XAMPP Control Panel.
3. Open `http://localhost/_Heliotrion/` in your browser.

### Option 2: Any Static File Server
Serve the project root with any static HTTP server (such as VS Code Live Server or `npx serve .`).

---

## Deployment

Upload the contents of the repository (excluding `.git` and editor files listed in `.gitignore`) to any static web host (Apache, Nginx, Netlify, Vercel, Cloudflare Pages, or GitHub Pages).

> **Note:** Forms (`quote.html`, `contact.html`, `support.html`, `careers.html`, and the footer newsletter) currently provide client-side validation and confirmation feedback via `js/main.js`. Connect a backend endpoint or form handler service before collecting live submissions in production.
