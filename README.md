# Vũ Đình Tư (Dev) — Portfolio

This revision **extends the original dark-purple/space-themed portfolio**; it does not replace the original design. It keeps the old background, CSS, navigation animations, developer projects, fonts, assets, and GitHub Pages workflow.

## Changes

- Video editing experience and software moved above developer projects.
- Portrait provided by the owner.
- Two YouTube channel previews in iframe players with links to their original channels. YouTube may restrict embedded playback.
- Two **unaltered** Telegram feedback screenshots, clickable for full size.
- EN/JP translation. It checks the visitor country via `ipwho.is` (Japan → Japanese; elsewhere → English). If blocked, defaults to English. Manual language choice takes priority, stored in the visitor browser.
- Removed the 19789 (BET) project from the displayed portfolio.
- Retained the developer projects, original layout and animations.
- Replaced the inactive EmailJS form with contact links that work.

## Important

The browser-based IP lookup connects to third-party service `ipwho.is`. IP detection depends on the service being reachable and is best effort. The site uses `localStorage` for EN/JP manual selection. The YouTube embeds also contact YouTube.

## Deployment

Use the enclosed *patch* together with the original files from your Git history. Run the PowerShell commands supplied in the response. The original fonts and media remain in the previous Git commit; this patch does not redistribute them.

GitHub Pages workflow remains at `.github/workflows/pages.yml` in your original repository.
