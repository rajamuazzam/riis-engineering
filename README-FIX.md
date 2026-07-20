# RIIS v1.3.4 — Root TypeScript File Fix

## Cause

The repository contains a misplaced root-level file:

- `RiisShell.tsx`

Its import starts with `../components/...`, which is invalid from the repository root. Next.js' automatically generated TypeScript configuration checks every `.tsx` file in the repository, including this unused duplicate.

## Fix included

Upload these files directly to the repository root and overwrite existing versions:

- `tsconfig.json`
- `next-env.d.ts`

The configuration type-checks the actual Next.js application folders (`app`, `components`, and imported dependencies) rather than accidental duplicate files at the repository root.

## Optional repository cleanup

The following duplicate files may be deleted from the repository root if present. Do not delete the correctly located versions inside `components/riis/`:

- `/RiisShell.tsx`
- `/Icons.tsx`
- `/Visuals.tsx`
- `/content.ts`
- `/riis.module.css`

## Build verification

Tested locally using:

- Next.js 15.5.20
- React 19.1.1
- Node-compatible npm clean install

The test intentionally retained the same broken root-level `RiisShell.tsx`. Production build completed successfully after applying this `tsconfig.json`.

## Offshore protection

This patch contains no application page or component replacement and does not modify the Offshore subpage.
