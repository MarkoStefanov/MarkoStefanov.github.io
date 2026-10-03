# markostefanov.github.io

Personal portfolio for Marko Stefanov, live at [markostefanov.com](https://markostefanov.com).

A plain static site (HTML, CSS and a little JavaScript) served by GitHub Pages; there is no build step.

## Structure

| Path | Purpose |
| --- | --- |
| `index.html`, `aboutme.html`, `projects.html`, `contact.html` | Main pages |
| `project_files/*.html` | One write-up per project |
| `404.html` | Served by GitHub Pages for unknown URLs (uses root-absolute paths) |
| `style.css` | All styles; colours and fonts are CSS variables at the top, with a dark-mode override |
| `main.js` | Shared behaviour: mobile menu, sticky-header state, dateline date, footer year |
| `data/` | Images and `cv.pdf` |

The header and footer markup is repeated in each page, so nav changes need to be made in every HTML file.

## Local preview

Pages use relative paths, so you can open them directly, or run a local server from the repo root:

```bash
python -m http.server 8000
```
