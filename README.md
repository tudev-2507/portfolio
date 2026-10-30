# Dev — Video Editor & Creative Developer Portfolio

A bilingual (English / Japanese) static portfolio for Vũ Đình Tư (Dev). The **video editing** profile appears first; selected development projects are retained in a separate section. The 19789/BET project has been removed entirely from the published site.

## Run locally

Serve the project through a local web server (do not just double-click `index.html` if you want normal browser behavior):

```bash
cd portfolio_video_editor_final
python -m http.server 8000
```

Open http://localhost:8000. The site is plain HTML/CSS/JavaScript with no build step.

## Deploy

Upload these files to GitHub (the same repository as your existing portfolio). Existing `.github/workflows/pages.yml` deploys the repository root to GitHub Pages on `main`.

## English / Japanese selection

- On first visit the page asks GeoJS (https://get.geojs.io/v1/ip/geo.json) for the **visitor's country**; it uses only the returned `country_code`, and does not retain the IP address.
- Japan (`JP`) → Japanese. Every other country → English.
- If the service is unavailable, the default is English.
- EN / JP buttons at the top allow manual choice. Manual choice is saved in `localStorage` and always wins over GeoJS.
- GeoIP can misclassify VPN/proxy visitors and requires external HTTPS access. Since requests go to a third-party IP-location service, disclose this in your site's privacy notice if applicable.

## Editing portfolio

- Hero photo is `assets/images/profile.jpg`, provided by the portfolio owner.
- Video editing history: self-taught art and photography foundation; short-video editing for a Korean company; US-audience YouTube production.
- Skills: Adobe Premiere Pro, CapCut, AI-assisted creative workflows, short-form, long-form, subtitles, BGM/SFX, asset selection, story structure, retention-oriented editing.
- Public channel links can be changed inside `index.html` under `#works`.
- One client quotation is included from previously shared correspondence. It is anonymous. The two latest chat screenshots weren't delivered as downloadable media files, so they are **not embedded or transcribed**; only upload originals if permission and privacy requirements are satisfied. To add verbatim testimonials, update the `feedbackQuote` strings in `javascript/site.js` and the fallback text in `index.html`.
- The old EmailJS form was removed (it had no configured public key); contact now links to the existing Facebook and LinkedIn pages rather than presenting a form that appears to send but does not.

## Main files

- `index.html` — site structure, external links, metadata
- `styles/main.css` — responsive design
- `javascript/site.js` — bilingual strings, geolocation selection and mobile nav
- `.github/workflows/pages.yml` — GitHub Pages deployment

No tracking analytics, geolocation keys, account credentials or backend dependencies are embedded.
