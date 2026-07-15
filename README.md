# RIIS Engineering V1.2.12b — Literal XML Sitemap Hotfix

Based on V1.2.12a.

## Root cause
The Next.js sitemap metadata route built successfully under `output: export`,
but the live sitemap was not being presented to Google as a clean literal XML
sitemap. Search Console reported `Couldn't fetch` / `Unknown`.

## Fix
- Removed `app/sitemap.js`
- Added literal `public/sitemap.xml`
- Removed `app/robots.js`
- Added literal `public/robots.txt`
- Sitemap canonical URL remains https://www.riis.engineering/

No visual, content, navbar, logo, or WhatsApp changes.
