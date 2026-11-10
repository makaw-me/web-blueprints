# Wanderly - Travel Agency Website

Wanderly is a modern, responsive travel agency website designed to showcase curated tours, vacation packages, destination guides, and bespoke travel services.

## Features

- **Responsive Layout**: Built with Bootstrap 5 for seamless viewing across smartphones, tablets, and desktops.
- **Curated Travel Destinations**: Highlights popular destinations with seasonal promotions and offers.
- **Comprehensive Services**: Detailed offerings including Worldwide Tours, Hotel Reservations, Expert Guides, Event Planning, Flight Booking, and Eco-Adventures.
- **Interactive Inquiries**: User-friendly contact and consultation form with office details and embedded map.
- **Accessibility & Standards (WCAG 2.2)**: 
  - Skip to main content keyboard bypass links.
  - Semantic `<main>` landmarks and labeled `<nav>` elements (`Main Navigation`, `Breadcrumb`, `Footer Navigation`).
  - High-contrast color tokens meeting WCAG AA and AAA requirements.
  - Visible custom `:focus-visible` focus rings (3px offset).
  - Explicit accessible form labels and `autocomplete` attributes.
  - Touch target sizes &ge; 44x44px.
  - `prefers-reduced-motion` and `forced-colors` support.
  - Meaningful `alt` descriptions on all content images.
- **Modern Social Icons**: Updated to modern branding, including the official X (formerly Twitter) icon.

## Pages

- `index.html` - Homepage featuring hero search, value proposition, services, popular destinations, contact form, and newsletter.
- `about.html` - Company background, values, travel statistics, and benefits.
- `service.html` - Full showcase of 8 specialized travel solutions.
- `destination.html` - Featured travel destinations and vacation specials.
- `contact.html` - Contact details, office location map, and consultation inquiry form.
- `privacy.html` - Comprehensive Privacy Policy detailing data collection, booking security, and traveler rights.
- `terms.html` - Terms of Service covering booking agreements, payments, cancellations, and liability.
- `404.html` - Branded, accessible 404 error page.

## Vercel & Monorepo Deployment

This project is fully prepared for Vercel deployment, both as a standalone project and within a monorepo containing multiple demo projects.

### Option A: Monorepo Deployment (Vercel Project Root Directory)
When linking the parent git repository to Vercel:
1. In the Vercel Dashboard, create a new project from your repository.
2. In **Project Settings &rarr; General &rarr; Root Directory**, set the path to this folder (e.g., `_Wanderly`).
3. Vercel automatically detects [`vercel.json`](./vercel.json) and [`package.json`](./package.json) with zero build configuration required.

### Option B: Monorepo Root Multi-Project Deployment
If deploying the entire parent repository as a single site:
- All asset paths (`css/`, `js/`, `img/`, `lib/`) and internal page links use relative paths, ensuring that this demo operates whether hosted at the domain root (`/`) or at a sub-path (`/_Wanderly/`).

### Production Configuration Included
- **`vercel.json`**: Configures clean URLs without `.html` extensions, trailing slash normalization, HTTP security headers (`nosniff`, `DENY`, `strict-origin`), and immutable asset caching for static directories.
- **`404.html`**: Automatically routed by Vercel on missing routes.
- **`robots.txt` & `sitemap.xml`**: Preconfigured for search engine crawling and discovery.

## Technology Stack

- **HTML5 & CSS3**: Modern semantic structures and responsive styling.
- **Bootstrap 5.0.0**: Grid system and responsive UI components.
- **Font Awesome 6.5.2 & Bootstrap Icons**: Vector icons.
- **Google Fonts**: Heebo and Nunito typography.
- **JavaScript**: jQuery, WOW.js, Easing, and Waypoints for subtle interactions.

## Powered By

Powered by [MAKAW](https://makaw.me).
