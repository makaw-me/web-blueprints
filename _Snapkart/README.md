# Snapkart — Indian E-Commerce Storefront

**Snapkart** is a responsive multi-page e-commerce web application tailored for the Indian retail market, featuring INR (`₹`) pricing, Indian checkout and payment flows (UPI, Cards, Cash on Delivery), and accessible, keyboard-friendly UI components.

## Pages & Structure

| File | Purpose |
| :--- | :--- |
| `index.html` | Storefront home with hero carousel, promotional banners, categories, featured & recent products, and partner strip |
| `shop.html` | Product catalog with INR price-range filters, colour/size filters, sorting, and pagination |
| `detail.html` | Product detail view with image carousel, size/colour selectors, quantity controls, specs, and customer reviews |
| `cart.html` | Shopping cart with line items, quantity controls, coupon input, and INR order summary |
| `checkout.html` | Billing/shipping forms (Indian PIN code & state fields), order summary, and UPI / Card / COD payment options |
| `contact.html` | Contact form (`mail/contact.php`), Bengaluru office details, clickable email/phone, and embedded map |
| `faqs.html` | Frequently Asked Questions accordion covering payments, shipping, 14-day returns, and GST |
| `help.html` | Help & Customer Support hub with order tracking info, return policy, and customer care hours |
| `terms.html` | Terms of Service aligned with Indian e-commerce regulations |
| `privacy.html` | Privacy Policy covering data collection, payment security, cookies, and Grievance Officer contact |

## Tech Stack

- **Markup & Styling:** HTML5, Bootstrap 4, SCSS (`scss/style.scss`), custom CSS (`css/style.css`)
- **JavaScript & Libraries:** jQuery 3.4, Bootstrap Bundle, Owl Carousel (`lib/owlcarousel/`), Easing (`lib/easing/`), Animate.css (`lib/animate/`), and `js/main.js`
- **Backend Form Handler:** PHP (`mail/contact.php`) with `mail/jqBootstrapValidation.min.js` and `mail/contact.js`
- **Assets:** Brand SVG favicon (`img/favicon.svg`), product/category photography (`img/`)

## Design System

- **Palette:** Primary `#FFD333`, Dark `#3D464D`, Secondary `#F5F5F5`, Light `#FFFFFF`
- **Typography:** `Roboto` (400, 500, 700)
- **Geometry:** Sharp `0px` corners (`$enable-rounded: false`)
- **Accessibility:**
  - Skip-to-main-content link (`.skip-link`) and semantic `<header>`, `<nav>`, `<main>`, and `<footer>` landmarks
  - High-contrast `:focus-visible` outlines (`#3D464D` on light/primary surfaces, `#FFD333` on dark surfaces)
  - Keyboard-accessible product action overlays (`.product-item:focus-within`)
  - Accessible form labels, `aria-label`s on icon-only controls, and `@media (prefers-reduced-motion: reduce)` support
  - Direct `mailto:` and `tel:` links for customer support (`support@snapkart.in` / `+91 80 4123 5678`)

## Local Setup (XAMPP)

1. Place the project folder inside your XAMPP `htdocs` directory (e.g., `c:\xampp\htdocs\_Mercovant`).
2. Start **Apache** from the XAMPP Control Panel.
3. Open `http://localhost/_Mercovant/` in your browser.
4. *(Optional)* To test `mail/contact.php` locally, configure SMTP/sendmail in `php.ini` and `sendmail.ini`.

## Credits

- **Brand:** Snapkart
- **Designed by:** [MAKAW](https://makaw.me)
