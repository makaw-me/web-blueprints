# Plumbright

Professional Residential and Commercial Plumbing Services website for Plumbright.

## Overview
Plumbright provides comprehensive plumbing solutions across residential and commercial properties, including emergency leak repairs, drain cleaning, sewer inspection and lining, toilet repairs, and water heater installation and maintenance.

## Project Structure
- `index.html` - Homepage featuring hero carousel, core services, about section, statistics, service carousel, booking, team, testimonials, and footer.
- `about.html` - Company background, history since 1990, certified technicians, and experience metrics.
- `service.html` - Complete breakdown of plumbing capabilities, emergency dispatch, and booking options.
- `booking.html` - Service appointment reservation and request form.
- `team.html` - Profiles of certified technicians, master plumbers, and diagnostic leads.
- `testimonial.html` - Customer reviews and verified client feedback.
- `contact.html` - Contact details, 24/7 emergency dispatch line, contact form, and office location map.
- `404.html` - Custom error page with quick navigation back to the homepage.
- `css/` - Customized styles and Bootstrap 5 stylesheet.
- `js/` - JavaScript logic, carousel initialization, and interactive behaviors.
- `img/` - Optimized imagery for services, team members, and testimonials.
- `lib/` - Third-party libraries (Owl Carousel, Tempus Dominus, WOW.js, Waypoints, CounterUp).

## Credits
- Powered by [MAKAW](https://makaw.me)

## Accessibility & Standards Compliance
- **WCAG 2.2 AAA Contrast**: Custom-tuned palette (`--primary: #144C8C`, `--secondary: #D6370B`, `.text-secondary: #9D2503`) delivering minimum 7:1 contrast on all body text and UI components.
- **Keyboard Navigation**: Skip-to-content links on every page, visible 3px custom focus-visible indicators with offsets, and non-trapping tab order.
- **Touch Targets**: All buttons, links, social icons, and controls adhere to 44x44px minimum touch targets.
- **Semantic Structure**: Exactly one `<h1>` per page, `<main id="main-content">` landmark, labelled `<nav>` navigation and breadcrumbs, and explicit form `<label>` associations.
- **Performance & SEO**: Explicit `width` and `height` dimensions on all images with `loading="lazy" decoding="async"` and high-priority LCP hero handling. Unique 50-60 character `<title>`s, 140-160 character meta descriptions, self-referencing canonicals, and Schema.org JSON-LD structured data on all pages.
- **Apache Hardening**: `.htaccess` with security headers (`nosniff`, `SAMEORIGIN`, `strict-origin-when-cross-origin`), Gzip/Deflate compression, and browser caching rules.

## Vercel & Monorepo Deployment

This project is fully prepared for Vercel deployment, both as a standalone deployment and as part of a multi-project monorepo alongside other demo projects.

### Configuration Files
- `vercel.json` - Security headers (`nosniff`, `SAMEORIGIN`, `strict-origin-when-cross-origin`, `Permissions-Policy`), static asset immutable caching headers, and custom 404 fallback routing (`/404.html`).
- `.vercelignore` - Excludes local testing scripts, scratch directories, logs, and Git metadata from build output.
- `package.json` - Provides npm/pnpm/Turborepo workspace identity (`demo-plumbright`) and build/test commands.

### Monorepo Deployment Options

#### Option A: Dedicated Vercel Project per Demo (Recommended)
1. In the Vercel Dashboard, import the parent monorepo repository.
2. Under **Project Settings > General > Root Directory**, click **Edit** and set it to:
   ```text
   _Plumbright
   ```
   *(or the folder name where this demo resides inside your monorepo)*.
3. Framework Preset: Leave as **Other** (Static HTML).
4. Deploy. Vercel will automatically read `vercel.json` and serve the site from this project directory.

#### Option B: Multi-Project Routing from Monorepo Root `vercel.json`
If you are deploying the entire monorepo as a single Vercel project with subpath routing for each demo, add rewrites to the root `vercel.json` in the parent repository:
```json
{
  "rewrites": [
    {
      "source": "/plumbright",
      "destination": "/_Plumbright/index.html"
    },
    {
      "source": "/plumbright/:path*",
      "destination": "/_Plumbright/:path*"
    }
  ]
}
```
All asset links, scripts, and stylesheets throughout this project use relative paths and will resolve properly regardless of whether they are hosted at the domain root or under a subpath.



