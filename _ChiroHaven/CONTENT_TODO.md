# Content & Production Launch Checklist (CONTENT_TODO.md)

This static demo was built using sample clinical data and theme placeholder assets. Before deploying this website to a live public production domain, the following items must be updated with the client's verified credentials and operational data.

---

## 1. Practice Identity & Contact Information
- [ ] **Legal Business Name:** Replace `ChiroHaven Spine & Physical Therapy LLC` with the official registered legal entity name across all templates and `BaseLayout.astro`.
- [ ] **Practice Address:** Replace `450 Boylston Street, 4th Floor, Boston, MA 02116` with the actual clinic physical address, suite number, and neighborhood.
- [ ] **Telephone & Fax:** Replace `(617) 623-2338` in `Header.astro`, `Footer.astro`, `contact/index.astro`, and Schema.org JSON-LD with real clinic phone and fax numbers.
- [ ] **Clinical Email:** Replace `info@chirohaven.com` with the designated clinic triage address (e.g. `appointments@yourdomain.com`).
- [ ] **Google Business Profile & Map Link:** Update the Google Maps URL in `Footer.astro` and `contact/index.astro` to the clinic's verified Google Maps Place ID.

---

## 2. Clinical Providers & Staff
- [ ] **Doctor of Chiropractic Profile:**
  - Replace `Dr. Benjamin Williams, DC` with the real lead chiropractor's name, headshot, Massachusetts board license number, and undergraduate/doctorate alma mater.
  - Update specific technique certifications (e.g., Cox Technic, Webster, Graston, Activator).
- [ ] **Physical Therapy Staff:**
  - Replace `Sarah Miller, PT, DPT, OCS` with the actual physical therapist credentials, specialties, and professional associations.
- [ ] **Pilates / Soft Tissue Staff:**
  - Replace `Dr. Elena Vance, DC, CPI` with real instructor credentials and reformer rehabilitation certifications.

---

## 3. Clinical Fees & Insurance Policy
- [ ] **Fee Schedule:** Verify the self-pay evaluation fees in `pricing/index.astro` ($165 initial chiro, $175 initial PT, $135 reformer, $85 follow-up).
- [ ] **Package Pricing:** Confirm whether the clinic offers prepaid care packages (Spine Restoration Plan, Integrated Kinetic Rehab, Postural Reset) and adjust prices.
- [ ] **Insurance Networks:** If the clinic is in-network with Blue Cross Blue Shield of Massachusetts, Medicare, Harvard Pilgrim, or Tufts Health Plan, update the insurance guide on `/pricing/` and `/faq/`.

---

## 4. Photography & Visual Assets
- [ ] **Hero Photography:** Replace `hero-rehabilitation.webp` with professional, art-directed photography of the actual Boston clinic treatment space and staff.
- [ ] **Service Action Shots:** Replace placeholder treatment images (`service-chiropractic.webp`, `service-physiotherapy.webp`, `service-clinical-pilates.webp`, `service-soft-tissue.webp`) with actual clinician treatment demonstrations.
- [ ] **Facility & Studio Photos:** Replace `clinical-reformer.webp` and `clinic-facility-1.webp` through `3` with high-resolution photos of your actual facility, reception, and private adjustment rooms.

---

## 5. Intake & Practice Management Software Integration
- [ ] **Appointment Intake Form:** Wire the appointment form in `src/pages/contact/index.astro` to the clinic's EHR / practice management booking portal (e.g. Jane App, WebPT, Cliniko, or Formspree).
- [ ] **HIPAA Compliance Agreement:** Ensure digital intake forms have a Business Associate Agreement (BAA) signed with the form processing provider.

---

## 6. Social Media & External Profiles
- [ ] **Social Profiles:** Connect real clinic profiles (Facebook, Instagram, LinkedIn, Google Business Profile) in header and footer. Currently no `#` dummy links are output.

---

## 7. Production Mode Activation
- [ ] Set `SITE_MODE=production` in your hosting deployment environment (Netlify, Cloudflare Pages, Vercel, or Apache).
- [ ] Verify that `sitemap.xml` generates with `https://your-production-domain.com/` and that `robots.txt` switches from `Disallow: /` to `Allow: /`.

---

## 8. Clinical Store & Merchant Processing
- [ ] **Merchant Gateway:** Wire the checkout form in `src/pages/checkout/index.astro` to your HIPAA-compliant merchant provider (Stripe, Square for Healthcare, or Authorize.Net).
- [ ] **Inventory & SKUs:** Update real inventory counts, prices, and manufacturer SKUs for the 6 clinical supports in `src/pages/shop/index.astro` and `src/pages/shop/ergonomic-lumbar-cushion.astro`.
- [ ] **State Tax Rate:** Confirm medical product sales tax exemption rules with your Massachusetts CPA (most prescribed medical rehabilitation supports are sales-tax exempt in MA).
- [ ] **Video Tour Asset:** Replace the demonstration video in `src/pages/index.astro` (`clinic-video-dialog`) with your clinic's produced 60-second video MP4 file and WebVTT caption file.

---

## 9. Patient Reviews & Clinical Testimonials
- [ ] **Verified Patient Testimonials:** Replace the three sample recovery outcome reviews on `src/pages/index.astro` (Mark D., Rebecca H., Julian K.) with verified patient reviews and quotes from your Google Business Profile, Doctible, or written patient consent forms.
- [ ] **Google Business Reviews Embed:** Link directly to your verified Google Place Reviews page for third-party validation.
- [ ] **Aggregate Rating Schema:** If and only when verified, public, visible reviews are collected, enable Schema.org `aggregateRating` markup adhering to Google's Search Central review snippet guidelines.

