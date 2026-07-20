# RIIS V1.3 — Conversion Pages Patch

This patch adds or replaces only these routes:

- `/` — new four-capability main landing page
- `/onshore` — conversion-focused Onshore page
- `/fea` — FEA & R&D page
- `/pmt` — PMP-led Project Management Team page

## Offshore is intentionally excluded

There is **no `app/offshore` folder in this package**. Copying this patch into the current RIIS Next.js repository will not overwrite the existing Offshore subpage.

## Installation

1. Back up the current repository.
2. Copy the contents of this patch into the repository root.
3. Allow `app/page.tsx` to replace the current main landing page.
4. Keep the existing `app/offshore` directory exactly as it is.
5. Run:

```bash
npm install
npm run dev
```

6. Check these routes:

```text
/
/offshore   existing page — should remain unchanged
/onshore
/fea
/pmt
```

## Contact details

Edit the central contact configuration once:

```text
components/riis/content.ts
```

The current WhatsApp link uses `+60 11-5255 5858`. The email link is set to `hello@riis.engineering` and can be changed in the same file.

## Design approach

- Isolated CSS module to minimise impact on the existing Offshore page.
- No changes to `app/layout.tsx`, `app/globals.css`, `package.json`, or the Offshore route.
- No external UI or animation dependencies.
- Responsive desktop, tablet and mobile layouts.
