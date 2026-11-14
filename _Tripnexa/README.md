# Tripnexa — Curated Travel & Tour Experiences

A responsive, accessible static website for **Tripnexa**, a modern travel agency offering custom itineraries, curated package tours, travel insurance, and 24/7 traveler support.

---

## Pages & Site Map

| Page | File | Purpose |
| :--- | :--- | :--- |
| Home | `index.html` | Hero, travel overview, core services, destination slider, testimonials, FAQs preview, recent blog posts, and CTA banner |
| About Us | `about.html` | Company story, travel philosophy, team of experts, and open remote positions (`#careers`) |
| Services | `services.html` | Featured services, travel solutions grid, and signature travel experiences |
| Blog | `blog.html` | Travel journal grid with destination guides, packing tips, and pagination |
| Article | `single.html` | Full blog post layout with categories, author bio, nested comments, and comment form |
| Contact | `contact.html` | Office address, business hours, phone/email, and trip inquiry form |
| FAQs | `faqs.html` | Categorized accordion covering booking, planning, payments, changes, and travel protection |
| Customer Support | `support.html` | 24/7 traveler assistance channels and support request form |
| Terms of Service | `terms.html` | Booking terms, deposit schedules, cancellations, travel documents, and liability |
| Privacy Policy | `privacy.html` | Data collection, usage, partner sharing, cookies, and traveler privacy rights |

---

## Design System & Color Tokens

Defined in `css/style.css` (`:root`) and `scss/style.scss`:

- **Primary (Terracotta)**: `--tx-primary: #c94d18` (hover: `#ad3e10`, highlight accent: `#f17945`)
- **Secondary (Deep Indigo)**: `--tx-secondary: #343661`
- **Body Text**: `--tx-text: #3d4147` / `--tx-text-muted: #4f5459`
- **Footer Surface & Text**: `--tx-surface-footer: #efefef` / `--tx-footer-text: #2f3241`
- **Typography**:
  - Headings & Brand Wordmark: `Brygada 1918` (serif)
  - Body & UI Copy: `Inter` (sans-serif)

---

## Accessibility & UX Features

- **Semantic Landmarks**: Skip-to-main-content link, `<nav aria-label="Primary navigation">`, `<main id="main-content">`, and `<footer class="site-footer">`.
- **Keyboard Navigation**: High-contrast `3px` `:focus-visible` outlines, keyboard-operable dropdowns (`:focus-within`), native `<button>` controls for sliders and mobile menus, `Escape` key support, and `44x44px` minimum touch targets.
- **Reduced Motion & No-JS Support**: Honors `prefers-reduced-motion: reduce` (disabling AOS/Rellax/autoplay) and includes a `<noscript>` fallback to hide the preloader.
- **Interactive Footer & Unified Arrows**: Animated arrow-and-underline hover states on footer links, elevated social buttons, and a unified `.more-arrow` (`icon-keyboard_arrow_right`) pattern across all action links.
- **Accessible Forms**: Explicit labels, `autocomplete` hints, and `aria-live="polite"` submission feedback.

---

## Project Structure

```text
_Tripnexa/
├── css/            # Compiled Bootstrap 5 + Tripnexa stylesheets & vendor CSS
├── fonts/          # Icomoon and Flaticon icon font packages
├── images/         # Photography, team portraits, and SVG service icons
├── js/             # Navbar, slider, lightbox, AOS, Rellax, and form feedback scripts
├── scss/           # Sass source files (Bootstrap 5 + custom components)
├── *.html          # 10 site pages
├── .gitignore
└── README.md
```

---

## Local Setup & Development

1. **Static Preview (XAMPP or any local server)**:
   - Place the folder in `htdocs/_Tripnexa` (or serve the root directory with any static HTTP server such as `npx serve .` or `python -m http.server`).
   - Open `http://localhost/_Tripnexa/index.html` in your browser.
2. **Editing Styles**:
   - Compiled styles live in `css/style.css` (with `:root` design tokens and enhancements at the bottom of the file).
   - Sass source files live in `scss/` (`prepros-6.config` is included for Prepros workflows).

---

## Credits

- **Brand**: Tripnexa
- **Design**: [MAKAW](https://makaw.me)
