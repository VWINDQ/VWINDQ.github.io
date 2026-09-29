# POOM / Digital Dossier

A static personal portfolio for Phattaraphon (Poom), an Applied Computer Science student at KMUTT. It uses HTML, CSS, and vanilla JavaScript. There is no build step or backend.

## Run locally

From this directory, run `python3 -m http.server 8000` and open `http://localhost:8000`. You can also open `index.html` directly, although clipboard access may require a local server or HTTPS.

## Customize

- Edit chapter copy, links, and metadata in `index.html`.
- Edit the six project records and their illustrative preview markup in `js/main.js` (`PROJECTS`). Replace `TODO` only with verified facts, links, and screenshots.
- Edit the color system and typography at the top of `css/style.css`.
- Add a résumé to `assets/` and replace the `Résumé / TODO` text with a link.
- Update the canonical and Open Graph URLs in `index.html` if the public URL changes.

The first three project descriptions and the CTF/database concepts come from the supplied brief. Graph Lab, MedLogic, and YOLOv9 @Home also use repository data from the previous portfolio. All project visuals on this page are illustrations, not product screenshots.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` publishes the repository root on every push to `main`. In **Settings → Pages**, set the publishing source to **GitHub Actions**. Relative asset paths support both `username.github.io` and `username.github.io/repository-name/`.

## Interactions

Click a project row to expand its case notes. On desktop, hovering a row shows a floating preview. The Graph Lab case contains a small, separate algorithm demo. `Ctrl+K` or `⌘K` opens the command palette. Theme preference is saved locally. Motion respects `prefers-reduced-motion`.
