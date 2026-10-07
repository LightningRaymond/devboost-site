# DevBoost site

This repository publishes the DevBoost feature guide as a static GitHub Pages site. It documents the 1.0.7 extension with screenshots captured from the packaged extension and a local sample page.

## Publishing

GitHub Pages serves the `main` branch from the repository root. Updating `index.html`, `app.js`, `styles.css`, or `media/` and pushing to `main` triggers a new deployment. There is no build step or runtime dependency.

The feature copy and navigation live in `app.js`. When the extension changes, update the matching feature entry, refresh its screenshot, and test the site on desktop and mobile before pushing.

The video tour opens on YouTube rather than embedding a third-party player into the site. `updates.html` is the hosted changelog opened by the extension after a version update; refresh its text and screenshots before each store release.
