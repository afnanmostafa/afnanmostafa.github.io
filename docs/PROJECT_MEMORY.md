# Project Memory

Use this as the shared memory for future work on this site.

## Repository

- Live GitHub repository: `afnanmostafa/afnanmostafa.github.io`
- Default branch: `master`
- Live site: `https://afnanmostafa.github.io`
- Local edited source used during this session:
  - `C:\Users\amostafa\Box\Downloads_chrome\afnanmostafa.github.io-master\afnanmostafa.github.io-master`
- Local live Git clone:
  - `C:\Users\amostafa\Box\Downloads_chrome\afnanmostafa.github.io-live`

## Project Type

- Jekyll/GitHub Pages personal academic portfolio.
- Content lives mainly in Markdown files.
- Styles are SCSS partials compiled inline through `_includes/head.html`.
- JavaScript behavior is mostly in `js/common.js`.

## Current Site Structure

- `/about/` is the main profile page.
- `/` redirects to `/about/`.
- Navigation links are managed in `_includes/header.html`.
- The disabled spider-web intro is preserved in `_includes/web-intro-disabled.html`.
- Loader markup is in `_includes/loader.html`.
- Loader styling is in `_sass/3-modules/_loader.scss`.
- Global visual overrides are mostly in `_includes/main.scss`.

## Design Direction

- Current preferred theme: Apple-like light design.
- Use restrained colors, soft shadows, translucent white panels, clean type, and blue accents.
- Avoid returning to a heavy dark theme unless explicitly requested.
- Keep cards and page panels subtle.
- Avoid visual clutter on the homepage; the user disliked the spider-web intro.

## Known Issues / Notes

- Some old inline page content still uses hard-coded colors such as `#7FCEC2` and `#CBC447`.
  These may clash slightly with the Apple-like theme and can be cleaned up later.
- The About page originally contained mojibake characters like `Iâ€™m`; some were corrected in `_pages/about.md`.
- GitHub Pages may take a minute to rebuild after pushes.
- Browser cache may show old loader or theme briefly; hard refresh with `Ctrl + F5`.
- Git may warn about dubious ownership in the Box folder. Fix with:

```powershell
git config --global --add safe.directory C:/Users/amostafa/Box/Downloads_chrome/afnanmostafa.github.io-live
```

