# Fastgeotag Frontend

Static single-page app for geotagging photos online. Layout and styling inspired by [fastgeotagger.com](https://www.fastgeotagger.com/).

## Features

- Batch photo upload (JPG, PNG, WebP, AVIF, HEIC)
- Location search with Photon geocoding (free, no API key)
- Interactive Leaflet map (OpenStreetMap / CARTO tiles) with manual coordinate entry
- EXIF GPS detection on upload
- Client-side EXIF GPS embedding (piexifjs) — no backend required for JPG download
- Download geotagged images as JPG (WebP/AVIF via Premium)
- Optional image compression and metadata editing

## Local development

```bash
npm run dev
```

Opens a static server at `http://localhost:3000`.

Alternatively:

```bash
python3 -m http.server 3000
```

## Admin & Pro login (static site)

On **first visit**, you will be prompted to create a **super admin** password (min 8 characters). That admin can:

1. Click **Login → Admin** to open the user management panel
2. Add/remove **Pro users** (username + password, SHA-256 hashed in `localStorage`)
3. Export a username list (no passwords)

Pro users log in via **Login → Pro user** to unlock Business Profiles, WebP/AVIF (when available), and URL extraction UI.

**Security:** This is client-side access control only — suitable for lightweight gating on GitHub Pages, not for paid billing or secrets. See `FEATURES_REPORT.md` for the full roadmap.

## Build

```bash
npm run build
```

Copies `index.html` to `dist/` for deployment. No bundler required.

## Deploy to GitHub Pages

This repo is already set up for GitHub Pages (`amfrshawon.github.io/geotagger-frontend/`).

1. Push your branch to GitHub:

```bash
git add .
git commit -m "Update Fastgeotag UI"
git push origin main
```

2. In GitHub → **Settings → Pages**, set source to **Deploy from branch** → `main` → `/ (root)`.

3. Your site will be live at `https://<username>.github.io/geotagger-frontend/`.

## Deploy with Vercel (optional)

1. Import the GitHub repo at [vercel.com/new](https://vercel.com/new).
2. Framework preset: **Other** (static site).
3. Build command: `npm run build` (optional — or serve root directly).
4. Output directory: `.` or `dist`.
5. Connect GitHub for automatic deploys on push.

## Project structure

```
geotagger-frontend/
├── index.html      # App (HTML + CSS + JS)
├── package.json    # Dev/build scripts
├── scripts/build.js
└── README.md
```

## Notes

- **Premium**: WebP/AVIF export and URL extraction are upgrade CTAs (wire to billing when ready).
- **Maps**: Leaflet + CARTO Voyager tiles + Photon search — no Google API key or billing required.
