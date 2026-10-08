# CRE8 public documentation site

A branded, static documentation site with English/Simplified Chinese editions, full-text local search, role-based starting points, a responsive sidebar, and light/dark logos. No hosted documentation subscription, chat API, wallet integration, or payment backend is required.

## Content and disclosure scope

Only the pages explicitly listed in `docs/gitbook-en/SUMMARY.md` and `docs/gitbook-zh-CN/SUMMARY.md` enter the build. Internal research, contracts, deployments, ABI files and platform-token material are excluded. Existing draft prices, legal draft status and prototype availability are retained. Public content is rechecked against mainline `2a4db378d2c60047e3ac34668d036c04111563cc` for draft.4.

## Local use

```sh
cd docs-site
npm ci
npm run dev
npm run build
npm run preview
```

The disposable `.generated/` folder is rebuilt from the allowlist; do not edit it. The build verifies all public pages, local links, draft credit prices, CJK bold formatting, and absence of internal addresses/source paths. Stable VitePress 1.6.4 is pinned rather than the 2.0 alpha.

## Publication

The existing public repository `joooe453-creator/cre8-docs` hosts a public-only source mirror and `.github/workflows/docs-site.yml`. Updates merged into **that repository's main branch** build and publish automatically to GitHub Pages at `https://docs.cre8.finance`. The private product PR does not by itself push into the public repository: mirror only the public allowlist and `docs-site` source when publishing a new product-doc snapshot. No cross-repository write credential is added.

GitBook is retained as the previous edition during migration; no paid subscription or trial cancellation is initiated. The `docs` DNS CNAME points to `joooe453-creator.github.io` once the new site is deployed. Root and app domains are independent.

Known old `/docs/` and `/zh-cn/shu-hui-yu-tui-chu/` links redirect to the new documents. Other unknown URLs show the searchable documentation 404 page. Articles have directory indexes for direct requests on GitHub Pages, and the site includes sitemap.xml, robots.txt and llms.txt.
