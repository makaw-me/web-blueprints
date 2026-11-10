# Tangerina - Preschool Website

A modern, responsive, and accessible website template for **Tangerina Preschool**, built for early childhood education centers, kindergartens, and daycares.

---

## Features
- **Responsive Layout**: Built with Bootstrap 5 and customized CSS.
- **Child-Centered Content**: Authentic preschool curriculum, facility overviews, and admissions forms without filler text or lorem ipsum.
- **Interactive Components**: Smooth carousels (Owl Carousel), animation on scroll (WOW.js), and mobile-first navigation.
- **Accessible Structure**: Keyboard-friendly controls, visible labels on forms, and semantic HTML structure.
- **Search & Discovery**: Includes `sitemap.xml` and `robots.txt`.

---

## Pages Included
- `index.html` — Homepage featuring carousel, facilities overview, about highlights, curriculum classes, faculty, and parent reviews.
- `about.html` — Mission, early childhood philosophy, and campus leadership.
- `classes.html` — Comprehensive early learning classes (Art, Colors & Shapes, Athletics & Dance, Language, Culture & Storytelling, General Knowledge).
- `facility.html` — School bus safety, playground, healthy dining, and classrooms.
- `team.html` — Certified educators and early learning specialists.
- `appointment.html` — Visit and tour booking form for prospective families.
- `call-to-action.html` — Educator recruitment and teacher career opportunities.
- `testimonial.html` — Verified parent reviews and experiences.
- `contact.html` — Direct inquiry form, campus address, and interactive map.
- `404.html` — User-friendly 404 error page.

---

## Local Setup & Development

### Using XAMPP / Apache:
1. Place the project directory in your Apache root folder (e.g., `C:\xampp\htdocs\preschool-website-template`).
2. Start the Apache module in the XAMPP Control Panel.
3. Open your browser and navigate to:
   ```
   http://localhost/preschool-website-template/
   ```

### Using Node.js (Serve):
```bash
npx serve -l 3000 .
```
Open `http://localhost:3000` in your browser.

---

## Vercel Deployment (Monorepo Setup)

This project is configured for deployment to **Vercel**, both as an independent project or as a member of a **monorepo** alongside other demo projects.

### 1. Root Directory Setting
When importing the monorepo repository into Vercel:
1. In the **New Project** screen under **Configure Project**, locate **Root Directory**.
2. Click **Edit** and select this project's folder:
   ```
   preschool-website-template
   ```
3. Leave **Framework Preset** as **Other** (pure static HTML/CSS/JS).

### 2. Monorepo Build Filtering (Ignored Build Step)
To ensure Vercel only rebuilds when changes are pushed to this specific project (avoiding unnecessary rebuilds when other sibling demo projects in the monorepo change):
1. In Vercel Project Settings &rarr; **Git** &rarr; **Ignored Build Step**.
2. Select **Custom** and enter:
   ```bash
   git diff --quiet HEAD^ HEAD -- .
   ```
   *(A return code of `0` tells Vercel that no files in this folder were changed and the deployment will be skipped.)*

### 3. Built-In `vercel.json` Capabilities
The included `vercel.json` configuration provides:
- **Clean URLs**: Routes `/about` seamlessly to `/about.html` while supporting extension-less and `.html` URLs.
- **Security Headers**: Standard HTTP headers including `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, and `Referrer-Policy`.
- **Performance Caching**: Long-term immutable caching (`max-age=31536000, immutable`) for assets in `css/`, `js/`, `img/`, and `lib/`.
- **Custom Error Routing**: Serves `404.html` with real 404 HTTP status for unknown routes.

---

## Attribution
Powered by [MAKAW](https://makaw.me).

