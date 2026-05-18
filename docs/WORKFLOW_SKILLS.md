# Workflow Skills

Practical notes for future edits.

## Local Edit and Publish Flow

Use the live clone for commits and pushes:

```powershell
cd C:\Users\amostafa\Box\Downloads_chrome\afnanmostafa.github.io-live
git status
git add <files>
git commit -m "Short descriptive message"
git push origin master
```

If changes are made in the downloaded source folder, copy them into the live clone before committing.

## Common Files

- `_config.yml` - Site title, social links, plugins, Sass settings.
- `index.md` - Root page; currently redirects to `/about/`.
- `_pages/about.md` - Main About profile page.
- `_includes/header.html` - Navigation and search overlay.
- `_includes/loader.html` - Loading screen text/markup.
- `_includes/main.scss` - Main style import file plus custom visual overrides.
- `_sass/3-modules/_loader.scss` - Loader styling.
- `_layouts/default.html` - Base layout and main landmark.
- `_layouts/page.html` - Standard content page layout.
- `js/common.js` - Menu/search behavior, scroll effects, image reveal, loader hide behavior.

## Loader Text

Page-specific loader phrases are controlled in `_includes/loader.html`.

The mapping uses `page.title`, not URL, for better reliability:

- About -> `Opening profile`
- Research -> `Mapping research`
- Skills -> `Organizing skills`
- Publications -> `Gathering publications`
- CV -> `Preparing CV`
- Tutorials / Codes/Scripts -> `Loading code notes`

## Styling Guidance

- Prefer Apple-like neutrals:
  - Background: `#f5f5f7`, `#fbfbfd`
  - Text: `#1d1d1f`, `#6e6e73`
  - Accent: `#0071e3`, `#2997ff`
- Use light glass panels with subtle blur/shadow.
- Keep animations subtle and honor `prefers-reduced-motion`.
- Avoid making the site feel too dark, neon, or busy.

## Verification

Useful deployment audit command:

```powershell
$pages = @('/about/','/academia/','/research/','/skills/','/publications/','/experience/','/accolades/','/write-ups/','/cv/','/tutorials/','/contact/')
foreach ($p in $pages) {
  $html = (Invoke-WebRequest -Uri ('https://afnanmostafa.github.io' + $p + '?audit=' + (Get-Date).Ticks) -UseBasicParsing).Content
  $text = [regex]::Match($html, '<span class="loader-text">([^<]+)</span>').Groups[1].Value
  "{0} | {1}" -f $p, $text
}
```

