# Kryptera

Static web platform for **Kryptera** — digital asset custody, instant global transfers, spot exchange, non-custodial escrow, and the KRYP utility token.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Main landing page (hero, about, metrics, features, services, roadmap, token countdown, FAQs) |
| `about.html` | Company overview and custody principles |
| `service.html` | Platform services (Multi-Currency Wallet, Instant Transfers, Bitcoin Vault, Spot Exchange, Crypto Escrow, Token Sale) |
| `roadmap.html` | Product milestones (`Q1 2026` – `Q2 2027`) |
| `feature.html` | Security, fee transparency, and support highlights |
| `token.html` | KRYP utility token sale and live countdown |
| `faq.html` | Frequently Asked Questions |
| `support.html` | Support & Help Center |
| `terms.html` | Terms of Service |
| `privacy.html` | Privacy Policy |
| `contact.html` | Contact details (`tel:` / `mailto:`) and inquiry form |
| `404.html` | Custom 404 error page |

## Project Structure

```text
├── css/
│   ├── bootstrap.min.css
│   └── style.css          # Custom theme, WCAG AAA contrast tokens, focus & reduced-motion rules
├── img/
│   ├── favicon.svg        # Vector brand favicon
│   ├── favicon.ico        # Legacy ICO favicon
│   ├── icon-1.png .. 10   # Brand & feature icons (#005A70)
│   └── ...                # Hero, about, and payment illustrations
├── js/
│   └── main.js            # Sticky navbar, carousels, counters, countdown, form handlers
├── lib/                   # Vendor libraries (animate, counterup, easing, owlcarousel, waypoints, wow)
├── scss/                  # Bootstrap SCSS sources
├── .gitignore
└── README.md
```

## Design & Accessibility

- **Color & Contrast**: Primary interactive ink `--primary-ink: #005A70` and secondary text `--secondary: #4A5568` meet WCAG 2.2 AAA contrast ratios on `#FFFFFF` and `#F2F8FE` surfaces.
- **Keyboard & Landmarks**: Includes a skip-to-main-content link, `<main>` and `<footer>` landmarks, sequential `h1` → `h2` → `h3` headings, `44px` minimum touch targets on square/footer controls, and `:focus-visible` outlines.
- **Motion & Modes**: Respects `prefers-reduced-motion` and `forced-colors`.

## Running Locally

Serve the project root with any static HTTP server:

- **XAMPP / Apache**: Place the folder in `htdocs` and open `http://localhost/_Kryptera/`
- **Node**: `npx serve .`
- **PHP**: `php -S localhost:8080`
