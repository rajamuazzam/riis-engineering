# RIIS v1.3.3 — Cloudflare manifest fix

This patch fixes only the root npm manifest files.

Upload BOTH files directly to the repository root and replace the existing versions:

- `package.json`
- `package-lock.json`

Do not place them inside another folder.

The lock file uses the public npm registry and does not contain OpenAI internal registry URLs.

After committing, retry the Cloudflare deployment.
