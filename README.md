# EmbryoPhenomics Tools catalogue

A dependency-free, responsive catalogue for the EmbryoPhenomics tool ecosystem. It is designed to deploy directly to GitHub Pages.

## Preview locally

You can open `index.html` directly, or run a small local web server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new public repository in the `EmbryoPhenomics` organisation, for example `phenomics-tools`.
2. Copy all files from this folder into the repository root, including `.github/workflows/pages.yml`.
3. Commit and push to the `main` branch.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, set **Source** to **GitHub Actions**.
6. Open the **Actions** tab and allow the `Deploy static site to Pages` workflow to finish.

The site will then be available at:

`https://embryophenomics.github.io/phenomics-tools/`

If the repository is named `EmbryoPhenomics.github.io`, it will instead appear at the organisation root: `https://embryophenomics.github.io/`.

## Edit the catalogue

All catalogue content is in `data.js`. Each tool has this shape:

```js
{
  name: "heartcv",
  tagline: "Measure cardiac activity and heart rate from microscopy video.",
  category: "Measure phenotype",
  kind: "Cardiac phenotyping",
  icon: "pulse",
  accent: "red",
  tags: ["heart rate", "cardiac", "physiology", "video"],
  url: "https://github.com/EmbryoPhenomics/heartcv",
  featured: 4
}
```

- `category` controls the filter buttons.
- `tags` are searched and the first three are shown on the card.
- `featured` controls the default order.
- Available accents: `cyan`, `orange`, `blue`, `lime`, `purple`, `red`, `yellow`.
- Available icons are defined near the top of `app.js`.

The six “What do you want to do?” shortcuts are also edited in `data.js` under `PHENOMICS_INTENTS`.

## Change branding and copy

- Main page text and links: `index.html`
- Colours, type and layout: variables at the top of `styles.css`
- Tool content: `data.js`
- Search/filter behaviour: `app.js`

The site deliberately does not call the GitHub API. This means you control exactly which projects are presented and how open, research and commercially supported tools are described.

## Optional custom domain

Add a file named `CNAME` containing only your domain, for example:

```text
tools.phenomyx.co.uk
```

Then configure the same custom domain under **Settings → Pages** and update your DNS records following GitHub's Pages guidance.
