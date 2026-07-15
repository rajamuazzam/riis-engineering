# RIIS Engineering V1.3A1 — Cloudflare Install Hotfix

Root cause shown in Cloudflare log:
`npm clean-install` failed inside npm itself with `Exit handler never called!`
before `npm run build` was executed.

Fix:
- Removed package-lock.json so Cloudflare Pages uses `npm install`
  rather than `npm clean-install`.
- No visual, animation, credential, WhatsApp, SEO, sitemap or content changes.

Local V1.3A production build had already completed successfully.
