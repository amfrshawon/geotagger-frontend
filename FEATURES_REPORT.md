# Fastgeotag — Feature Analysis vs fastgeotagger.com

Comparison of the reference product ([fastgeotagger.com](https://www.fastgeotagger.com/)) against this static GitHub Pages repo.

| Feature | Reference behavior | Current status | Effort | Priority |
|---------|-------------------|----------------|--------|----------|
| **Batch photo upload** | Drag/drop JPG, PNG, WebP, AVIF, HEIC | **Done** — multi-file dropzone | — | — |
| **Leaflet map + location search** | Photon/Carto map, search, manual coords | **Done** — Leaflet + Photon | — | — |
| **GPS EXIF read on upload** | Detect existing geotags | **Done** — JPEG EXIF parser | — | — |
| **Client-side GPS write (JPG)** | Embed lat/lng in EXIF | **Done** — piexifjs | — | — |
| **Metadata: Keywords** | IPTC/EXIF keywords for SEO | **Done** — modal + XPKeywords/ImageDescription | — | — |
| **Metadata: Description** | EXIF ImageDescription / UserComment | **Done** — modal + EXIF write | — | — |
| **Metadata: Creator / Copyright** | Artist + Copyright fields | **Done** | — | — |
| **Tag Photo / Download Tagged** | Primary geotag + download action | **Done** — bottom bar + action bar | — | — |
| **Edit Metadata** | Per-photo metadata editor | **Done** — modal per row + action bar | — | — |
| **Reset** | Clear uploads / location / session | **Done** — Reset action | — | — |
| **WebP / AVIF export** | Pro download formats | **Partial** — Pro-gated; JPG-only client export today | M | P2 |
| **Extract photos from URL** | Pro: scrape images from URL | **Missing** — disabled accordion | L | P2 |
| **Business Profiles (PRO)** | Saved locations, scatter radius, default metadata | **Partial** — UI placeholder, Pro-gated | L | P1 |
| **Before/After Report (PRO)** | PDF report for clients | **Partial** — placeholder toast/modal | L | P3 |
| **Premium / Remove Ads** | Stripe one-time Pro | **Partial** — login unlocks Pro locally | M | P2 |
| **User login (Pro)** | Supabase auth on reference | **Done** — client-side user list + SHA-256 | — | — |
| **Super admin user management** | N/A on public reference | **Done** — admin panel, localStorage | — | — |
| **Compress photos** | Optional compression on export | **Done** — toggle lowers JPEG quality | — | — |
| **Mobile responsive** | Mobile-first layout | **Done** | — | — |
| **SEO content sections** | How-to / SEO / FAQ accordions | **Done** | — | — |
| **Ads (AdSense)** | Google ads on free tier | **Missing** | S | P4 |
| **Supabase backend** | Auth, storage, profiles on reference | **Missing** — static site only | XL | P3 |
| **HEIC native EXIF** | Full HEIC pipeline | **Partial** — upload accepted, converts to JPG | M | P3 |
| **Scatter radius geotag** | Randomize GPS within radius per profile | **Missing** | M | P2 |
| **Bulk metadata apply** | Apply keywords to all photos at once | **Partial** — per-photo only | S | P2 |

## Legend

- **Effort**: S = hours, M = 1–2 days, L = 3–5 days, XL = backend + infra
- **Priority**: P1 = next sprint, P2 = soon, P3 = later, P4 = optional

## Recommended roadmap

1. **P1 — Business Profiles (localStorage)** — save named locations + default metadata templates; apply on upload.
2. **P2 — WebP export (client-side canvas)** — unlock for Pro users without a backend.
3. **P2 — Bulk metadata** — “Apply to all photos” in metadata modal.
4. **P3 — Before/After PDF** — jsPDF + before/after thumbnails for Pro users.
5. **P3 — Optional Supabase** — replace localStorage auth if multi-device Pro accounts are needed.

## Security note (static auth)

Pro login uses **SHA-256 + salt** in `localStorage`. This is suitable for lightweight access control on a static site, not for secrets or compliance-grade auth. Treat Pro as an honor-system gate; move to a backend for production billing.
