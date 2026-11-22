# Morsella

A static multi-page restaurant website for **Morsella** (428 Mercer Street, New York, NY 10013), built with Bootstrap 5, custom CSS, and progressive-enhancement jQuery/JavaScript.

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Home page: hero, service highlights, story & stats, tabbed menu preview, reservation form, chef team, and guest testimonials |
| `about.html` | Culinary story, experience counters, and leadership team |
| `service.html` | Eight dining and hospitality services (Master Chefs, Seasonal Ingredients, Online Ordering, Guest Support, Private Dining, Event Catering, Sommelier Pairings, Dietary Care) |
| `menu.html` | Full tabbed menu for **Breakfast**, **Lunch**, and **Dinner** |
| `booking.html` | Online table reservation request form with date/time picker and kitchen showcase video modal |
| `team.html` | Full culinary and hospitality leadership directory |
| `testimonial.html` | Guest reviews carousel |
| `contact.html` | Direct `mailto:` channels, SoHo location map, and contact form |
| `faq.html` | Frequently Asked Questions accordion |
| `help.html` | Guest Support & Help Center (reservations, dietary needs, accessibility, lost & found) |
| `terms.html` | Terms of Service |
| `privacy.html` | Privacy Policy & Cookie Notice (`#cookies`) |

## Project Structure

```text
_Morsella/
├── index.html, about.html, service.html, menu.html, booking.html,
│   team.html, testimonial.html, contact.html, faq.html, help.html,
│   terms.html, privacy.html
├── css/
│   ├── bootstrap.min.css      # Compiled Bootstrap 5 stylesheet
│   └── style.css              # Morsella design tokens, components, a11y & footer styles
├── js/
│   └── main.js                # Sticky navbar, WOW/counter/carousel init, video modal, form feedback
├── img/
│   ├── favicon.svg            # Bespoke Morsella SVG favicon
│   ├── favicon.ico            # 32x32 ICO fallback favicon
│   └── *.jpg / hero.png       # Photography & hero imagery
├── lib/                       # Third-party frontend libraries (Animate, CounterUp, Easing, OwlCarousel, TempusDominus, Waypoints, WOW)
├── scss/                      # Bootstrap 5 SCSS source files
├── .gitignore
└── README.md
```

## Design System & Accessibility

- **Palette**:
  - Primary Accent: `#FEA116` (`--primary`) on dark surfaces (`#0F172B`)
  - Primary Ink on Light Surfaces: `#7A4200` (`--primary-ink`, `8.07:1` contrast on `#FFFFFF`)
  - Dark Surface / Primary Button Ink: `#0F172B` (`--dark`, `8.74:1` contrast on `#FEA116`)
  - Light Surface Text: `#F1F8FF` (`--light`)
- **Typography**: `Nunito` (headings/buttons), `Heebo` (body), `Pacifico` (section eyebrows).
- **Accessibility**:
  - Skip-to-main-content link, `<main>` and `<footer>` landmarks, single `<h1>` per page, and sequential heading hierarchy (`h1` → `h2` → `h3`).
  - `:focus-visible` outlines, `44px × 44px` social/back-to-top touch targets, and `@media (prefers-reduced-motion: reduce)` support.
  - Descriptive `alt` attributes on images, explicit `<label>`s on all form controls, and clickable `tel:` / `mailto:` links in the footer and contact page.

## Local Setup & Deployment

No build step is required.

1. **XAMPP**: Place the folder in `htdocs/_Morsella` and open `http://localhost/_Morsella/`.
2. **Static Server**: Run `npx serve .` or `python -m http.server 8000` from the project root.
3. **Production**: Upload the root HTML files along with `css/`, `js/`, `img/`, and `lib/` to any static web host or CDN over HTTPS.

## Credits

- Designed by [MAKAW](https://makaw.me)
