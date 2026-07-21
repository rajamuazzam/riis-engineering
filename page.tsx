# RIIS Engineering V2.2.2 — Clean Full Source

This release is a clean repository source, not an overlay patch.

## Install to GitHub
1. Delete all existing files/folders in the GitHub repository root.
2. Upload the CONTENTS of this folder directly to the repository root.
3. Confirm these items are at root: `app`, `components`, `public`, `package.json`, `package-lock.json`, `next.config.mjs`.
4. Cloudflare Pages settings:
   - Build command: `npm run build`
   - Build output directory: `out`
   - Root directory: blank

## Included changes
- RIIS structural/FEA logo with transparent background in shared header/footer.
- Main-page WhatsApp consultation widget.
- Proposal and new-project enquiries route internally to one WhatsApp endpoint.
- General enquiries route internally to the second WhatsApp endpoint.
- Individual names and phone numbers are not displayed in the user interface.
- Duplicate Next.js route files and legacy root build artefacts removed.
