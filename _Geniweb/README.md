# Geniweb Solutions

A multi-page responsive web studio website for **Geniweb Solutions**, built with semantic HTML5, Bootstrap 3, custom CSS design tokens, and a PHP contact handler.

## Pages & Structure

| File | Purpose |
| :--- | :--- |
| `index.html` | Home page with hero slider, about overview, stats, services carousel, features, and testimonials |
| `about-us.html` | Studio overview, mission, and client testimonials |
| `services.html` | Core service capabilities and detailed service carousel |
| `portfolio.html` | Filterable project showcase (`Design`, `Mockup`, `Logos`, `HTML`) |
| `features.html` | Platform features overview and highlight cards |
| `testimonials.html` | Client testimonials carousel and partner logos |
| `pricing.html` | Standard, Business, and Premium service/hosting plans |
| `contact.html` | Accessible project inquiry form and studio contact details |
| `contact.php` | Server-side form validation and email dispatch handler |
| `faq.html` | Frequently Asked Questions accordion |
| `terms-of-service.html` | Terms of Service |
| `privacy-policy.html` | Privacy Policy |

### Key Assets
- `images/logos/logo.svg` & `images/logos/logo-2.svg` — Vector brand marks for light header and dark footer backgrounds.
- `style.css` — Base layout, typography, and component styles.
- `css/custom.css` — Design tokens (`:root`), WCAG accessibility overrides, contrast refinements, reduced-motion/forced-colors support, and interactive footer link animations.
- `js/all.js`, `js/custom.js`, `js/portfolio.js`, `js/hoverdir.js`, `js/modernizer.js` — Carousel, lightbox, isotope filtering, and scroll behavior.

## Design System & Colors

Defined in `css/custom.css` (`:root`) and aligned with `style.css` and brand SVGs:

- **Primary Accent**: `#fd6802` (`--gw-primary`) / Hover Dark: `#c24b00` (`--gw-primary-dark`)
- **Secondary Gold Accent**: `#fcbf02` (`--gw-secondary`)
- **Dark Surfaces**: `#1f1f1f` (`--gw-dark`), `#393939` (`--gw-dark-elevated`), `#181818` (`--gw-dark-input`)
- **Light Surfaces**: `#ffffff` (`--gw-light`), `#f2f3f5` (`--gw-light-muted`)
- **Text Tokens**: `#1f1f1f` (headings), `#4a4a4a` (body on light), `#cccccc` / `#d4d4d4` (body/links on dark)

## Accessibility & Interactivity

- **Skip Navigation & Landmarks**: First-focusable `Skip to main content` link (`#main-content`) and `<main>` landmark on every page.
- **Heading Hierarchy**: Exactly one `<h1>` per page with sequential `<h2>`–`<h3>` structure.
- **Keyboard & Focus**: High-contrast `:focus-visible` rings on all interactive elements, labeled `<nav>` regions, `aria-current="page"` on active navigation items, and no zoom locking (`initial-scale=1.0`).
- **Forms & Media**: Explicit `<label>` elements, `autocomplete` attributes, descriptive `alt` text on content images, and `aria-hidden="true"` on decorative icons.
- **Footer Interactivity**: Left gradient accent bar, subtle row highlight, and spring-animated arrow reveal on `Pages` links, plus center-expanding underlines on legal links.
- **Motion & High Contrast**: Full `@media (prefers-reduced-motion: reduce)` and `@media (forced-colors: active)` support.

## Local Setup & Running

### Option 1: XAMPP (Apache + PHP)
1. Place the project folder in `c:\xampp\htdocs\_Geniweb`.
2. Start **Apache** from the XAMPP Control Panel.
3. Open `http://localhost/_Geniweb/` in your browser.

### Option 2: PHP Built-in Server
```bash
php -S localhost:8080
```
Then open `http://localhost:8080/` in your browser.

## Deployment Notes
- Configure the recipient email address in `contact.php` (`$address = "hello@geniweb.io";`) and ensure your hosting environment supports PHP `mail()` or an SMTP relay.
- Serve over HTTPS in production and configure standard security headers (`Content-Security-Policy`, `X-Content-Type-Options`, `Referrer-Policy`).

---

All Rights Reserved. &copy; 2026 Geniweb. Designed by [MAKAW](https://makaw.me).
