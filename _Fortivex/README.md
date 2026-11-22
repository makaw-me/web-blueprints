# Fortivex — Smart CCTV & Security Systems

Static marketing and client-information website for **Fortivex**, featuring commercial CCTV, biometric access control, fire detection, smart home security, support resources, and legal documentation.

Powered by [MAKAW](https://makaw.me).

## Project Structure

- **Core Pages:** `index.html`, `about.html`, `service.html`, `project.html`, `contact.html`
- **Additional Pages:** `feature.html`, `quote.html`, `team.html`, `testimonial.html`, `faq.html`, `support.html`, `terms.html`, `privacy.html`, `404.html`
- **Styles & Scripts:** `css/style.css`, `css/bootstrap.min.css`, `js/main.js`, `scss/`
- **Assets & Libraries:** `img/` (including `img/favicon.svg` and `img/icon/`), `lib/` (Animate.css, CounterUp, Easing, Isotope, Lightbox, Owl Carousel, Waypoints)

## Local Setup & Preview

Because this is a static HTML/CSS/JS site, no build step is required.

1. **Via XAMPP (Apache):**
   - Place the project folder in `htdocs/_Fortivex`.
   - Start Apache in the XAMPP Control Panel.
   - Open `http://localhost/_Fortivex/` in your browser.
2. **Via any static server (optional):**
   - Run `npx serve .` or `python -m http.server 8080` from the project root and open `http://localhost:8080`.

## Design & Accessibility Highlights

- **Color Tokens (`css/style.css`):**
  - `--primary: #65B530` (dark-surface accents & focus indicators)
  - `--primary-accessible: #3B7316` / `--primary-hover: #2F5D11` (light-surface text, buttons, icons, and active navigation states for WCAG AA contrast)
  - `--dark: #161616`, `--light: #F5F5F5`
- **Accessibility:** Skip-to-main-content link, single `<h1>` per page with `<main>` landmarks, keyboard-accessible portfolio filters and dropdowns, `:focus-visible` outlines, clickable `tel:` / `mailto:` links, and `prefers-reduced-motion` support.

## Deployment

Upload the root directory contents (all `.html` files, `css/`, `js/`, `img/`, and `lib/`) to any static host (Netlify, Vercel, GitHub Pages, or an Apache/Nginx web root). Configure your web server to serve `404.html` for missing routes.
