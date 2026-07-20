# RIIS V1.3.1 — Four Services Main Page Fix

This patch corrects the landing page so all four service routes are visible:

1. Offshore
2. Onshore
3. FEA & R&D
4. PMT — PMP-led delivery

## Important installation method

The ZIP opens directly with these folders at its root:

- `app`
- `components`
- `public`

Copy or upload **the contents of the ZIP directly into the repository root** and allow these files to overwrite the matching files.

The key replacement is:

- `app/page.tsx`

## Offshore protection

There is no `app/offshore` folder in this patch. The existing Offshore subpage is therefore not replaced or modified.

## Expected result

The main page shows a 2 × 2 grid:

- Offshore | Onshore
- FEA & R&D | PMT

On mobile, the four cards stack vertically.
