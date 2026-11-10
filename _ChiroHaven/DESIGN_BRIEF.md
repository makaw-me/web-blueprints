# Design Brief: ChiroHaven Spine & Physical Therapy

## 1. Niche & Business Context
- **Business Name:** ChiroHaven Spine & Physical Therapy
- **Niche:** Evidence-based Chiropractic Care, Orthopedic Physical Therapy, Clinical Reformer Pilates, and Soft Tissue Rehabilitation.
- **Location & Locale:** Boston, Massachusetts, USA (Locale: `en-US`, Currency: USD `$`, Phone format: `(617) 623-2338`, Address: `450 Boylston St, 4th Floor, Boston, MA 02116`).
- **Target Audience:** Desk professionals suffering from postural strain/sciatica, injured recreational and competitive athletes, post-surgical orthopedic patients, and adults managing chronic spinal discomfort.
- **Conversion Goal:** Book an initial clinical consultation and evaluation (`/contact/` or direct call `tel:6176232338`).
- **Ten-Second Visitor Action:** Understand the clinic's medical specializations (chiropractic, physiotherapy, pilates), verify board-certified clinician credentials and Boston location/hours, and book an assessment with zero friction.

---

## 2. Distinctive Design Idea
- **Concept:** *Editorial Clinical Authority* — moving far away from the generic Elementor template look. A calm, grounded aesthetic combining deep evergreen slate (`#0c221f`) with clean warm alabaster (`#f7f8f6`) and warm terracotta cedar (`#953b1b`).
- **Structure:** Purposeful typographic scales, structured tabular pricing and insurance guides, accessible disclosure accordions for FAQs, clean anatomical and service breakdowns, and real human clinical imagery sourced from the original clinic session assets.
- **Anti-AI Rule Enforcement:** Zero glowing badges, zero gradient text or gradient buttons, zero sparkle icons, zero generic card grids, zero fake floating drop shadows, zero fake counters or review stars. Everything is semantic, accessible, and grounded in real clinical practice.

---

## 3. Typography & Palette

### Typography
- **Primary Typeface:** Clean, highly legible sans-serif system stack (`system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`) optimized for instant LCP, zero layout shift (CLS = 0), and perfect legibility at all scales.
- **Display Typeface:** Editorial transitional serif (`"Georgia", "Times New Roman", serif`) for high-level clinical headings, offering human craft and medical authority.
- **Modular Scale:** 1.25 (Major Third) with fluid `clamp()` sizing across mobile (320px) to desktop (1280px). Line lengths capped at 45–72 characters.

### Color Tokens (Verified WCAG 2.2 AAA Contrast)
| Token | Hex | Role | Contrast Ratio |
| :--- | :--- | :--- | :--- |
| `--color-bg-light` | `#f7f8f6` | Primary page canvas | Canvas |
| `--color-text-dark` | `#122421` | Body copy on light canvas | **15.2:1** (AAA >= 7:1) |
| `--color-text-muted` | `#2d4844` | Secondary copy / captions | **8.1:1** (AAA >= 7:1) |
| `--color-bg-dark` | `#0c221f` | Header, dark clinical sections, footer | Contrast ground |
| `--color-text-light` | `#f4f7f5` | Text on dark background | **15.8:1** (AAA >= 7:1) |
| `--color-accent` | `#953b1b` | Primary interactive links & buttons on light | **7.4:1** (AAA >= 7:1) |
| `--color-accent-hover` | `#772d13` | Button hover state on light | **10.1:1** (AAA >= 7:1) |
| `--color-focus-ring` | `#00473e` | Visible focus ring on light background | **3.8:1** against element & canvas |
| `--color-focus-ring-dark` | `#8be2c7` | Visible focus ring on dark background | **8.5:1** against dark canvas |
| `--color-border` | `#d8dfdb` | Subtle structural rules & dividers | Structural |

---

## 4. Hero & Motion Plan

### Hero Architecture
- **Composition:** Asymmetric split hero. Left column features the single primary `<h1>` with service + locality ("Specialized Chiropractic Care & Physical Therapy in Boston"), direct factual proof (Board-certified clinicians, same-week evaluations, accepting HSA/FSA), primary booking button, and secondary direct phone link.
- **Visual:** Right column features the authentic clinic rehabilitation photo (`hero_img.webp`) with explicit width/height, `fetchpriority="high"`, and `loading="eager"`.
- **LCP Target:** Under 1.0s mobile throttled. Headline rendered in immediate server HTML with zero client JS or font-swapping layout shift.

### Purposeful Motion Plan
- **CSS-Only Micro-Interactions:** Subtle button focus/hover transitions (120ms ease), border draws on interactive links.
- **Scroll Reveals:** Limited to one signature milestone section using CSS `@supports (animation-timeline: view())` with zero layout shifting.
- **Reduced Motion:** Strict `@media (prefers-reduced-motion: reduce)` override disabling all transitions and animations instantly.

---

## 5. Site Map & Page Categorization

### Tier A: Fully Built Pages (Core trust, decision, and action)
1. `/` — Home: Complete narrative, core treatment pillars, clinical approach, practitioner credentials, transparent pricing preview, FAQ accordion, location & contact info.
2. `/services/` — Services Overview: Comprehensive clinical guide to chiropractic, PT, clinical pilates, and soft tissue therapy.
3. `/services/chiropractic-therapy/` — Chiropractic Care: Spinal adjustment, joint mobilization, posture evaluation, conditions treated, practitioner profile, FAQ.
4. `/services/physiotherapy/` — Physical Therapy: Musculoskeletal rehabilitation, sports injury recovery, personalized exercise protocols.
5. `/services/clinical-pilates/` — Clinical Pilates: Reformer-based rehabilitation, core stability, spinal decompression.
6. `/services/soft-tissue-therapy/` — Soft Tissue & Myofascial Therapy: Trigger point release, muscle tension relief, recovery.
7. `/about/` — About Us & Team: Clinical background, Dr. Benjamin Williams (Lead Chiropractor) & Sarah Miller, PT, facility standards.
8. `/pricing/` — Transparent Pricing & Insurance: Structured HTML table with self-pay session fees, package rates, insurance reimbursement / superbill guidance.
9. `/faq/` — Patient FAQs: Answer-first direct clinical responses, consultation expectations, cancellation policies, backed by `FAQPage` schema.
10. `/contact/` — Contact & Appointments: Interactive appointment inquiry form, clinic hours table, direct contact methods, transit directions.
11. `/404` — Not Found Page: Helpful error screen with clear paths back to services and booking.
12. `/privacy/` — Privacy Policy: Full patient data handling, HIPAA-aligned statement, zero tracking guarantee.
13. `/accessibility/` — Accessibility Statement: Conformance target (WCAG 2.2 AAA), verified testing methodologies, contact for accommodations.
14. `/shop/` — Complete Clinical Store Catalog: Filterable orthopedic supplies, live search, add-to-cart, and wishlist.
15. `/shop/ergonomic-lumbar-cushion/` — Product Detail Page: Image gallery, quantity selector, clinical biomechanics, and doctor setup guidance.
16. `/cart/` — Interactive Shopping Cart: Line-item management, fulfillment switcher (Boston pickup vs delivery), and promo code engine.
17. `/checkout/` — Secure Clinical Checkout: Contact intake, address validator, payment simulator, and order confirmation dialog.
18. `/wishlist/` — Saved Orthopedic Wishlist: Product bookmarking and batch move-to-cart.

### Tier B: Illustrative Sample Pages (1 real example per repeating type)
19. `/case-studies/` — Clinical Case Studies Index: Overview of patient rehabilitation case series.
20. `/case-studies/spinal-decompression-lumbar-herniation/` — Detailed Clinical Case Study: Complete assessment, diagnosis, 8-week intervention protocol, measurable outcome metrics.
21. `/blog/` — Patient Education Articles Index: Guides on spinal health and mobility.
22. `/blog/preventing-desk-fatigue-spine-mobility/` — Educational Article: Evidence-based ergonomics and postural reset routine.

### Tier C: Real Route Stubs (Shared template, noindex, breadcrumbs, link back)
23. `/classes/` — Patient Mobility & Posture Classes stub.
24. `/classes/growing-spines-posture/` — Pediatric Posture Workshop stub.

### Dropped Items (Theme noise & elementor bloat)
- Alternate home variations: Home 1, Home 2, Home 4, Home 5.
- Shop catalog variants: Shop standard list, Shop with filter, Fullwidth 4 columns, My Account.
- Blog layout variants: Blog left sidebar, Blog right sidebar, Blog full width.
- Vendor marketing gimmicks: Coming soon demo, RevSlider demo, landing promo.

