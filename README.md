# FastGeoTagger Frontend

Static single-page app for geotagging photos online. Layout and styling inspired by [fastgeotagger.com](https://www.fastgeotagger.com/).

## Features

- Batch photo upload (JPG, PNG, WebP, AVIF, HEIC)
- Location search with Google Places autocomplete
- Interactive map with manual coordinate entry
- EXIF GPS detection on upload
- Download geotagged images (JPG, WebP, AVIF)
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

The tagging API defaults to `https://instantgeotagger.up.railway.app`. On `localhost`, it expects a backend at `http://localhost:8000`.

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
git commit -m "Update FastGeoTagger UI"
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

- **Login / Pro / URL extraction**: UI placeholders only; wire to your auth and billing when ready.
- **Google Maps**: Uses the existing Maps/Places API key in `index.html`. Restrict the key to your domains in Google Cloud Console.
- **Backend**: Geotagging requires the Railway API (or your own backend) for EXIF embedding.
