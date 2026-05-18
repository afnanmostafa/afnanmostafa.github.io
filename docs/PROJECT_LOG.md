# Project Log

This file records notable site changes so future work has context.

## 2026-05-18

- Refreshed the visual theme toward an Apple-like light design:
  - Light neutral background and translucent white content panels.
  - Apple-blue accent color for links, active navigation, and progress elements.
  - System font stack using `-apple-system`, `SF Pro`, and `Helvetica Neue`.
  - Softer borders, shadows, and glass-style header/footer treatment.
- Improved accessibility and navigation:
  - Added a skip link and semantic `<main>` landmark.
  - Added keyboard support for menu/search controls.
  - Added Escape-to-close behavior for overlays.
  - Added active navigation states.
- Moved About content to `_pages/about.md`.
- Disabled the experimental spider-web homepage:
  - `/` now redirects to `/about/`.
  - Preserved the old intro code in `_includes/web-intro-disabled.html`.
- Improved loader:
  - Replaced black "Fetching Data..." screen with light glass-style loader.
  - Added page-specific loader messages based on `page.title`.
  - Added reduced-motion support.
- Fixed code/goals block contrast on the About page.

## Important Commits

- `de9a72e` - Disabled spider web homepage.
- `74aac1b` - Applied Apple-inspired color theme.
- `c4ca476` - Improved code block contrast.
- `53b1dcf` - Refreshed loading screen.
- `58e484e` - Added page-specific loader text.
- `0968dc3` - Switched loader text mapping to page titles.

