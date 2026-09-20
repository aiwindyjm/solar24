# Cloudflare demo release · 2026-09-20

- Live site: https://solar24-demo.solar24.workers.dev
- English: https://solar24-demo.solar24.workers.dev/?lang=en#lichun/seasons
- Chinese: https://solar24-demo.solar24.workers.dev/?lang=zh#lichun/seasons
- Cloudflare Worker: `solar24-demo`, static assets only.
- Deployed version: `4229f26e-b592-4b47-8505-a1667e22fc18`.

## Checks performed

- Frozen-lockfile installation in a separate checkout; V5 typecheck and build passed. Adding Vite as an explicit root dependency fixed a fresh-checkout build failure that was hidden by the original workspace's existing executable links.
- `wrangler deploy --dry-run` passed, then 64 new static assets uploaded successfully. The directory contained 67 files, including response header configuration.
- Live HTTP status 200, correct HTML content type, and `X-Content-Type-Options: nosniff`.
- Chromium verified both explicit language links, language preference override, refresh, language-preserving term navigation and browser back.
- Live reading scroll, local bibliography, 3D camera switch and seasonal action slider worked. One canvas, zero captured page exceptions and zero failed HTTP responses.
- Checked 1280×800 desktop and 390×844 mobile. Mobile had no horizontal page overflow. Screenshots are in ignored `output/playwright/solar24-live-*.png`.
- Main workspace: lint, 74 tests, production build passed. Release checkout: lint, 47 tests, production build, V5 build and two Host E2E tests passed. The release excludes unrelated uncommitted research updates, hence the different test totals.
- Two actual 31-second browser walkthroughs were encoded as separate English and Chinese GIFs, approximately 6 MB each. They are included in the GitHub READMEs, not the deployed website.

Existing Vite bundle-size and Zod annotation warnings remain. The large V5 JS bundle is approximately 346 kB gzipped. No claim is made about access from every country or every network, or about real-device performance benchmarks.

## Local Cloudflare setup

Installed 14 skills from the official `cloudflare/skills` repository. The official `npx skills` command failed during Git cloning; the skill installer's GitHub download method succeeded. Registered `cloudflare`, `cloudflare-docs`, `cloudflare-bindings`, `cloudflare-builds`, and `cloudflare-observability` MCP servers in the local Codex configuration. Wrangler was authenticated through device authorization. New MCP servers load after restarting Codex; servers not yet authenticated request OAuth on first use. No credentials or local MCP configuration are committed.

The owner explicitly requested this public demo and repository presentation. Knowledge review status and the production content gate are unchanged. No external recording, community performance or historical reconstruction is represented by the synthesized sound.
