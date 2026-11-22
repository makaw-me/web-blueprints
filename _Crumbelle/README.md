# Crumbelle — Artisan Bakery & Custom Cakes

Static marketing website for **Crumbelle**, an independent London patisserie specialising in bespoke wedding cakes, birthday celebration cakes, and seasonal pastry tasting boxes.

## Project Structure

```text
_Crumbelle/
├── index.html          # Homepage (hero, story, stats, menu tabs, services, chefs, tasting box, testimonials)
├── about.html          # Bakery story, ingredient standards, and craft metrics
├── menu.html           # Full cake menu & GBP pricing (Birthday, Wedding, Custom)
├── service.html        # Birthday, wedding consultation, and custom order services
├── team.html           # Master pastry chefs
├── testimonial.html    # Client reviews carousel
├── contact.html        # Kensington bakery contact cards & enquiry form
├── faq.html            # Ordering, delivery, dietary, and cake care FAQs
├── support.html        # Customer support, order changes, and venue delivery help
├── terms.html          # Terms & Conditions
├── privacy.html        # Privacy Policy (UK GDPR)
├── css/
│   ├── bootstrap.min.css
│   └── style.css       # Custom theme tokens, accessibility focus/contrast rules, footer & layout styles
├── js/
│   └── main.js         # Sticky navbar, video modal, counter-up, testimonial carousel, back-to-top
├── img/
│   ├── favicon.svg     # Crumbelle SVG favicon
│   └── *.jpg           # Photography assets
├── lib/                # Third-party frontend libraries (jQuery Easing, Waypoints, CounterUp, Owl Carousel)
└── scss/               # Bootstrap 5 SCSS sources
```

## Setup & Local Preview

This is a static HTML/CSS/JS site with no build step required.

### Option 1: XAMPP (Apache)
1. Place the project folder inside `C:\xampp\htdocs\_Crumbelle`.
2. Start **Apache** in the XAMPP Control Panel.
3. Open `http://localhost/_Crumbelle/` in your browser.

### Option 2: Any Local Static Server
From the project root, run any static file server, for example:
```bash
python -m http.server 8080
```
Then visit `http://localhost:8080`.

## Styling & Customization

- **Design Tokens**: Core palette variables (`--primary`, `--secondary`, `--dark`, `--dark-ink`, contrast-adjusted text tokens) and component styles live in `css/style.css`.
- **Bootstrap SCSS**: Source files are in `scss/bootstrap.scss` if you wish to recompile `css/bootstrap.min.css`.

## Deployment

Upload the repository root contents (excluding `scss/` if not needed in production) to any static host (Apache, Nginx, Netlify, Cloudflare Pages, or GitHub Pages). Ensure HTTPS is enabled and standard security headers (`X-Content-Type-Options`, `Referrer-Policy`, `CSP`) are configured on your web server.

---

&copy; 2026 Crumbelle. Powered by [MAKAW](https://makaw.me).
