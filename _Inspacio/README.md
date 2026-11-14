# Inspacio — Architecture & Interior Design Studio

Website project for **Inspacio**, a bespoke architecture and interior design studio crafting residential and commercial environments.

Powered by [MAKAW](https://makaw.me).

---

## Project Structure

```text
_Inspacio/
├── css/
│   ├── style.css              # Compiled Bootstrap 4 + Inspacio custom architectural styles & accessibility overrides
│   └── style.min.css          # Minified stylesheet
├── img/                       # Studio photography, project renders, team portraits, favicon.ico & favicon.svg
├── js/
│   └── main.js                # Dropdown hover/Escape handling, carousels, Isotope filters, back-to-top & scroll reveals
├── lib/
│   ├── easing/                # jQuery Easing plugin
│   ├── flaticon/              # Architectural icon font & stylesheet
│   ├── isotope/               # Isotope layout & portfolio category filtering
│   ├── lightbox/              # Lightbox2 project gallery modal viewer
│   └── owlcarousel/           # Owl Carousel 2 for services, team & testimonials
├── mail/
│   ├── contact.js             # Client-side validation & AJAX submission handler
│   ├── contact.php            # Server-side PHP mail handler for the contact form
│   └── jqBootstrapValidation.min.js
├── scss/
│   ├── bootstrap/             # Bootstrap 4 SCSS source
│   └── style.scss             # Base theme SCSS source
├── index.html                 # Studio homepage
├── about.html                 # Studio history, philosophy & leadership team
├── service.html               # Interior design, spatial planning & styling services
├── project.html               # Filterable portfolio (All / Completed / Running / Upcoming)
├── blog.html                  # Design journal grid
├── single.html                # Full design journal article, author bio & comments
├── contact.html               # Consultation booking & inquiry form
├── faq.html                   # Frequently asked questions (consultation, fees, timelines, sourcing)
├── support.html               # Client support hub, finish care guides & warranty assistance
├── terms.html                 # Terms of service & architectural agreement conditions
├── privacy.html               # Privacy policy & blueprint confidentiality standards
├── LICENSE.txt                # Project license
├── READ-ME.txt                # Plain-text project summary
├── .gitignore
└── README.md
```

---

## Pages Overview

| Page | Purpose |
| :--- | :--- |
| `index.html` | Homepage with hero carousel, studio overview, services, features, filterable projects, team, testimonials, and latest journal entries. |
| `about.html` | Studio background, architectural philosophy, key studio metrics, and team carousel. |
| `service.html` | Overview of residential, commercial, spatial planning, and material curation services. |
| `project.html` | Interactive Isotope-filtered portfolio gallery with Lightbox2 previews. |
| `blog.html` | Editorial design journal articles with pagination. |
| `single.html` | In-depth article view with blockquote, tags, author bio, related posts, and comment form. |
| `contact.html` | Studio contact details and consultation request form. |
| `faq.html` | Accordion-based answers covering consultations, timelines, fees, and sourcing. |
| `support.html` | Post-completion client support, material maintenance guidance, and warranty contacts. |
| `terms.html` | Legal terms of service governing architectural and design engagements. |
| `privacy.html` | Data handling and client architectural blueprint confidentiality policy. |

---

## Key Technical & Design Highlights

### 1. Visual Identity & Architectural Styling
- **Palette**: Dark charcoal (`#181818`, `#252531`), warm architectural gold (`#DFB163`), and crisp light surfaces (`#FFFFFF`, `#F3F6FF`).
- **Architectural Hover System** (`css/style.css`):
  - Default browser text underlines are suppressed on header, navigation, breadcrumb, and footer links while keeping mandatory underlines on in-text prose links (`main p a`).
  - **Topbar Links**: Expanding $2\text{px}$ gold hairline underline on hover/focus; social icons lift subtly (`translateY(-2px)`).
  - **Desktop Navbar**: Centered $2\text{px}$ gold baseline beam (`::after`) expanding on hover, focus, and active states.
  - **Dropdown Menu**: Dark luxury surface (`#1a1a24`) with a gold hairline border and a sliding horizontal drafting marker (`::before`) on item hover.
  - **Footer Links**: Kinetic right shift (`translateX(6px)`) paired with an advancing gold angle icon (`translateX(3px)`).
  - **Footer Attribution & Breadcrumbs**: Center-out expanding gold hairline underline.

### 2. Accessibility (WCAG 2.2 AAA Targets)
- **Contrast**: Enforced high-contrast text pairs (`#212529` on light backgrounds, `#e4e7ea`/`#ffffff` on dark backgrounds, `#784c00` for gold accents on light surfaces, `#DFB163` on dark surfaces).
- **Keyboard & Screen Readers**: First-focusable `.skip-link`, semantic `<main>`, `<nav>`, and `<footer>` landmarks, single `<h1>` per page, `Escape` key closing for open dropdown menus, and $3\text{px}$ `#DFB163` `:focus-visible` outlines with `3px` offset.
- **Touch Targets & Forced Colors**: $44 \times 44\text{px}$ minimum hit areas (using pseudo-element overlays on circular `.btn-social` buttons to preserve strict 1:1 geometry) and `@media (forced-colors: active)` support.

### 3. Motion, Reveals & Reduced Motion Compliance
- **Scroll Reveals** (`js/main.js` + `css/style.css`): Uses `IntersectionObserver` to progressively reveal section titles, cards, portfolio items, and forms as they enter the viewport, with staggered grid delays.
- **Hero & Back-to-Top**: Keyframe hero entrance (`fadeInDown` / `fadeInUp`) and centered `.back-to-top` button with smooth scroll.
- **Reduced Motion** (`prefers-reduced-motion: reduce`): Disables Owl Carousel autoplay and transitions, disables scroll/hover translations and keyframe animations, and leaves all content immediately visible with instant color feedback.

### 4. Structured Data
- Includes `ProfessionalService` JSON-LD metadata on `index.html` with studio address, contact details, and operating hours.

---

## Setup, Running & Deployment

### Local Development (XAMPP)
1. Place or clone the project directory inside your XAMPP web root (`c:\xampp\htdocs\_Inspacio`).
2. Start **Apache** from the XAMPP Control Panel.
3. Open `http://localhost/_Inspacio/` in your browser.

### Static Preview (Without PHP Contact Handler)
If you only need to preview the HTML/CSS/JS pages without processing `mail/contact.php`:
```bash
# Using Python
python -m http.server 8080

# Or using Node.js
npx serve .
```
Then visit `http://localhost:8080`.

### Contact Form Configuration
- Form submissions are handled by `mail/contact.js` posting to `mail/contact.php`.
- Before deploying to production, configure the recipient email address and mail transport inside `mail/contact.php` on a PHP-enabled server.

### Deployment
- Upload all root HTML files alongside `css/`, `img/`, `js/`, `lib/`, and `mail/` to any standard Apache/Nginx or static web host (PHP is required only if using `mail/contact.php` directly).
- Ensure HTTPS is enabled and security headers (`X-Content-Type-Options`, `Referrer-Policy`, `CSP`) are configured at the web server level.

---

## License & Attribution

- Copyright &copy; 2026 **Inspacio**. All Rights Reserved. See [LICENSE.txt](LICENSE.txt) for details.
- Powered by [MAKAW](https://makaw.me).

