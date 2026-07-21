Upload tsconfig.json and next-env.d.ts directly to the GitHub repository root and overwrite existing files.
This prevents stale/binary root-level TSX files from being type-checked.
Recommended cleanup after successful deployment: delete root-level Icons.tsx, RiisShell.tsx, Visuals.tsx, and content.ts. Keep files under components/riis/.
