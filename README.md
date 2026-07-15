# RIIS Engineering V1.2.12a — Static Export Hotfix

Fixes Cloudflare Pages / Next.js static export build failure.

## Root cause
Next.js `output: export` requires metadata routes such as `/sitemap.xml`
and `/robots.txt` to be explicitly static.

## Fix
- Added `export const dynamic = "force-static"` to `sitemap.js`
- Added `export const dynamic = "force-static"` to `robots.js`
- Replaced runtime `new Date()` in sitemap with a fixed ISO date

Visual design and WhatsApp behaviour are unchanged.
