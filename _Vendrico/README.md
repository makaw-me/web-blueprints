# Vendrico

Static marketing and operations website for **Vendrico** — a modern commerce, inventory, and fulfillment platform.

## Pages & Site Map

| Page | File | Description |
| :--- | :--- | :--- |
| Home | [`index.html`](index.html) | Main landing page with hero, core services, company story, key metrics, team gallery, leadership quote, testimonials, and newsletter signup. |
| Platform Overview | [`content.html`](content.html) | Detailed overview of Vendrico's inventory synchronization, automated carrier routing, and reporting capabilities. |
| FAQs | [`faqs.html`](faqs.html) | Frequently asked questions using a Bootstrap 5 accordion. |
| Support Center | [`support.html`](support.html) | Support contact channels and an accessible client-side support request form. |
| Careers | [`careers.html`](careers.html) | Team culture overview and open positions. |
| Register | [`register.html`](register.html) | Split-screen workspace account registration page with accessible confirmation feedback. |
| Terms of Service | [`terms.html`](terms.html) | Terms governing use of the Vendrico platform. |
| Privacy Policy | [`privacy.html`](privacy.html) | Data collection, usage, security, and retention policy. |
| 404 Error | [`404.html`](404.html) | Custom 404 fallback page with a link back to the frontpage. |

## Project Structure

```text
_Vendrico/
├── .github/workflows/
│   └── deploy-now.yaml      # IONOS Deploy Now GitHub Actions workflow
├── css/
│   ├── theme.css            # Base Bootstrap 5 theme stylesheet
│   ├── theme.min.css        # Minified base theme stylesheet
│   └── custom.css           # Accessibility, contrast, navbar scroll, button & footer overrides
├── fonts/                   # Self-hosted Inter WOFF/WOFF2 font files
├── img/
│   ├── favicon.svg          # Vector Vendrico layers favicon
│   ├── favicon-16x16.png    # 16x16 PNG favicon
│   ├── favicon-32x32.png    # 32x32 PNG favicon
│   ├── apple-touch-icon.png # 180x180 Apple touch icon
│   ├── android-chrome-*.png # 192x192 and 512x512 Android Chrome icons
│   └── webp/                # Optimized WebP photography
├── js/
│   ├── aos.js               # Animate On Scroll library
│   └── bootstrap.bundle.min.js
├── favicon.ico              # Root ICO favicon
├── index.html               # Landing page (and subpage *.html files)
├── .gitignore
└── README.md
```

## Design System & Accessibility

- **Palette & Typography:** Monochrome editorial palette (`#151515` primary ink, `#495057` accessible secondary text, `#ffffff` and `#f8f9fa` surfaces, `#212529` dark CTA band) paired with self-hosted **Inter** fonts (`300`, `500`, `700`).
- **Accessibility:**
  - `Skip to main content` link targeting `<main id="main-content">` on every page.
  - High-contrast `:focus-visible` outlines (`3px` solid `#151515` on light surfaces, `#ffffff` on dark surfaces).
  - Accessible muted/secondary text contrast (`#495057` on light backgrounds, `rgba(255, 255, 255, 0.8)` on dark backgrounds).
  - Keyboard-navigable horizontal gallery region (`tabindex="0"`, `role="region"`).
  - `prefers-reduced-motion: reduce` support for both CSS transitions and `AOS.init`.
- **Navigation & Footer:**
  - Fixed header on `index.html` transitions to a solid `#ffffff` background with a subtle bottom border as soon as scrolling begins (`window.scrollY > 10`), with balanced desktop link spacing.
  - Footer navigation links include `44px` minimum touch targets, subtle underline reveal, and `aria-current="page"` indicators, alongside clickable `tel:` and `mailto:` contact links.

## Local Development

No build step is required. Serve the project root with any static HTTP server or XAMPP:

- **XAMPP:** Place in `htdocs/_Vendrico` and open `http://localhost/_Vendrico/`.
- **Local static server (example):**
  ```bash
  npx serve .
  ```

## Deployment

Pushes to the repository can be deployed automatically via [`.github/workflows/deploy-now.yaml`](.github/workflows/deploy-now.yaml) using IONOS Deploy Now (`IONOS_API_KEY` and `IONOS_PROJECT_ID` repository secrets).

---

&copy; 2026 Vendrico, Inc. All rights reserved. Powered by [MAKAW](https://makaw.me).
