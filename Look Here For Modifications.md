# Portfolio

Static site, no build step — plain HTML/CSS/JS. Works directly on GitHub Pages.

## Structure

```
portfolio/
├── index.html       Landing/title page
├── about.html        About + skills
├── projects.html     Project list
├── contact.html       Contact info (placeholder)
├── css/style.css     All styling (design tokens at the top)
├── js/nav.js          Shared header/footer — edit ONCE, updates on every page
└── assets/images/     Put project screenshots, headshot, etc. here
```

## Editing the nav

Every page loads `js/nav.js`, which builds the header and footer at load
time. To add, remove, or rename a page in the nav, edit the `NAV_LINKS`
array at the top of `js/nav.js` — you don't need to touch any HTML file.

Also set `SITE_NAME` in that same file to your actual name.

## Editing colors/fonts

All design tokens (colors, fonts, spacing) are CSS variables at the top of
`css/style.css` under `:root`. Change a value there and it updates
everywhere.

## Adding a new page

1. Copy an existing page (e.g. `about.html`) as a starting point.
2. Keep the `<head>` (fonts + stylesheet link) and the two `<script>` tags
   at the bottom (`js/nav.js` must be loaded on every page).
3. Add the new page to `NAV_LINKS` in `js/nav.js`.

## Publishing to GitHub Pages

1. Push this folder to a GitHub repo (e.g. `yourusername.github.io` for a
   user site, or any repo name for a project site).
2. In the repo: Settings → Pages → set source to the branch you pushed
   (usually `main`) and root folder.
3. Wait a minute, then visit the URL GitHub gives you.

## Still placeholder

- Contact info (email, GitHub, LinkedIn links) in `contact.html`
- Project entries in `projects.html`
- Bio, skills, education/experience in `about.html`
- Hero copy in `index.html`
- `SITE_NAME` in `js/nav.js`
