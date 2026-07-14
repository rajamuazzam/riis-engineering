# RIIS Engineering V1.2.6 Source Audit Fix

This release is based on a full source audit of V1.2.5.

## Confirmed findings
1. V1.2.5 still contained the original standalone `<footer>` in `page.js`.
   The earlier automated replacement had not removed it.
2. The hero uses an animated `<canvas>` with radial gradients and a GSAP 3D-transformed mesh.
   These decorative GPU/composited layers are now explicitly hidden during print/full-page PDF capture.
3. The navbar was loading the full 1536×1024 logo artwork with large surrounding whitespace.
   A cropped logo asset is now used in the navbar.

## Fixes
- Standalone footer actually removed from JSX.
- Compact footer actually integrated inside the contact section.
- Animated hero canvas / mesh decorative layers hidden in print capture.
- Contact is content-driven, not viewport-height driven.
- Cropped RIIS logo asset added and used in navbar.
- WhatsApp function, green button, desk numbers and links unchanged.
