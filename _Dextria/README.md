# Dextria - Digital Agency & Creative Web Solutions

Dextria is a modern digital agency website showcasing creative web design, custom app development, SEO optimization, and digital marketing services.

## Overview

- **Brand:** Dextria
- **Tech Stack:** HTML5, CSS3, JavaScript, Bootstrap 5, Owl Carousel, WOW.js, Lightbox
- **Credits:** Powered by [MAKAW](https://makaw.me)

## Site Structure

- `index.html` - Homepage featuring hero carousel, key metrics, services, portfolio, team, and testimonials
- `about.html` - Agency background, leadership, core competencies, and track record
- `service.html` - Overview of digital services (Web Design, App Development, SEO, Digital Marketing)
- `project.html` - Interactive showcase of selected client projects and case studies
- `feature.html` - Key differentiators and agency advantages
- `team.html` - Multidisciplinary leadership and creative team
- `testimonial.html` - Client reviews and success stories
- `contact.html` - Consultation inquiry form and location details
- `404.html` - Custom error page

## Getting Started

### Local Development
Open `index.html` directly in any modern web browser or run the local preview server:
```bash
npm run dev
```

### Vercel Deployment (Monorepo)
This project is configured for standalone deployment as part of a monorepo:
1. In the **Vercel Dashboard**, import the monorepo repository.
2. In the project settings, set the **Root Directory** to `_Dextria` (or the folder name assigned to this demo in the monorepo).
3. **Framework Preset:** Select `Other` (or leave default, as `vercel.json` provides complete configuration).
4. **Build Command:** Leave default or `npm run build`.
5. **Output Directory:** Leave default (`.` / root of `_Dextria`).
6. Deploy. The custom `vercel.json` automatically handles clean URLs, immutable asset caching, security headers, and the custom `404.html` error page.

