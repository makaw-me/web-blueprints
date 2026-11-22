# Udaan

Website for **Udaan**, an Indian non-profit organisation working across rural and urban communities to advance child education, clean drinking water, and primary healthcare.

## Pages

- `index.html` — Home page (hero carousel, about summary, featured causes, core programmes, donation form, leadership team, testimonials)
- `about.html` — Mission overview, core programmes, and leadership team
- `causes.html` — Active fundraising causes with progress indicators (in INR)
- `service.html` — Core programmes in child education, medical treatment, and clean drinking water
- `donate.html` — Online donation form with Section 80G tax-exemption information
- `team.html` — Trustees and programme leads
- `testimonial.html` — Donor, CSR partner, and volunteer testimonials
- `contact.html` — Enquiry form and New Delhi office map
- `faq.html` — Frequently asked questions (80G receipts, states served, volunteering, CSR-1 partnerships)
- `privacy.html` — Privacy Policy (aligned with India's DPDP Act, 2023)
- `terms.html` — Terms of Service
- `404.html` — Custom 404 error page

## Project Structure

```text
_Udaan/
├── css/
│   ├── bootstrap.min.css
│   └── style.css          # Design tokens, accessible contrast overrides, and component styles
├── img/
│   ├── favicon.svg        # Custom Udaan SVG favicon
│   └── ...                # Page photography and programme icons
├── js/
│   └── main.js            # Navigation scroll state, progress waypoints, and carousel setup
├── lib/                   # Third-party frontend libraries (Animate.css, WOW.js, Owl Carousel, Parallax, Waypoints)
├── scss/                  # Bootstrap SCSS source files
├── *.html                 # Static HTML pages
├── .gitignore
└── README.md
```

## Local Setup & Preview

This is a static HTML/CSS/JS site with no build step required.

1. **Using XAMPP (Apache):**
   Place the project folder inside `htdocs/` (e.g. `c:\xampp\htdocs\_Udaan`), start Apache in the XAMPP Control Panel, and open `http://localhost/_Udaan/` in your browser.

2. **Using a quick local server (optional):**
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`.

## Deployment

Upload the root directory contents (`*.html`, `css/`, `img/`, `js/`, `lib/`) to any static web host (Apache, Nginx, Netlify, Cloudflare Pages, or GitHub Pages). Ensure your host serves `404.html` for missing routes and uses HTTPS in production.

---

&copy; 2026 Udaan, All Rights Reserved. Powered by [MAKAW](https://makaw.me).
