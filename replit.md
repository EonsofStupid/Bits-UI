# ColdLight Design Studio UI — Monorepo

## Overview
Fork of [Bits UI](https://bits-ui.com) being extended into ColdLight — a full layman UI system with headless primitives, styled components, Style Dictionary token engine, and devtools. Currently the bits-ui headless layer is fully functional with 44 components.

## Project Structure
- `packages/bits-ui/` — Headless component library (44 components, must be built before docs)
- `docs/` — SvelteKit documentation site (frontend, port 5000)
- `tests/` — Browser tests (43 test files, Vitest + Playwright)
- `bundle-analyzer/` — Bundle size analysis tooling
- `BREAKING_CHANGES.md` — Full API contract: frozen/extensible/internal classification
- `MIGRATION_ROADMAP.md` — 44-component migration table with WAI-ARIA APG references and phases

## Package Manager
- **pnpm** (v10.26.1) — Managed via `pnpm-workspace.yaml` with version catalog

## Tooling
- **Biome 2.4.6** — single tool for linting + formatting (replaces prettier, eslint, oxlint)
  - Config: `biome.json` at project root; schema: `https://biomejs.dev/schemas/2.4.6/schema.json`
  - **455 lint rules**, 97% Prettier-compatible output
  - CSS: `tailwindDirectives: true` for Tailwind v4 directives
  - All `// oxlint-disable` comments migrated — file-level disables become `biome.json` overrides,
    single-line disables become `// biome-ignore lint/<group>/<rule>: <reason>`
  - `pnpm format` → format | `pnpm lint` → lint | `pnpm check:fix` → format + lint + fix | `pnpm ci` → CI check
  - **Svelte support**: 🟡 experimental as of v2.3+; enable with `"html": { "experimentalFullSupportEnabled": true }`
    in biome.json. Fully formats `<script>` (TS), `<style>` (CSS), HTML template. NOT yet enabled here
    because docs pipeline still uses prettier-plugin-svelte (planned migration to `@biomejs/js-api`).
  - **Programmatic API**: `@biomejs/js-api` + `@biomejs/wasm-nodejs` — `biome.formatContent(projectKey, code, { filePath })`
    can format `.svelte` strings at runtime (planned replacement for `@prettier/sync` in docs pipeline)
  - Full reference: `docs/contributing/biome.md`
- **Style Dictionary 5.3.3** — installed at root, ready for ColdLight token pipeline (Task #1)

## CI/CD (GitHub Actions)
- **`ci.yml`** — svelte-check + lint + browser tests; watches `main`, `next`, `coldlight` branches
- **`biome.yml`** — Biome enforcement (blocks PRs on errors) + JSON artifact for devtools; watches `main`, `next`, `coldlight`

## Key Commands
```bash
pnpm install                         # Install all deps
pnpm --filter bits-ui build          # Build headless library
cd docs && pnpm build:content && pnpm dev:svelte  # Run docs dev server
pnpm --filter tests test:browser     # Run browser test suite (43 files)
pnpm ci                              # Biome CI check
```

## Workflow
- **Start application**: `cd docs && pnpm build:content && pnpm dev:svelte` (port 5000)

## Security
- Playwright 1.58.2, Wrangler 4.72.0, SvelteKit 2.53.3 (patched)
- 23 remaining transitive vulnerabilities documented in `BREAKING_CHANGES.md` §7

## Dependencies (bits-ui runtime)
- `@floating-ui/core` + `@floating-ui/dom` — positioning
- `esm-env` — environment flags
- `runed` — Svelte 5 reactivity
- `svelte-toolbelt` — utility primitives
- `tabbable` — focus management

## Important Notes
- `bits-ui` must be built before docs can resolve it
- Velite content must be built before the dev server starts
- `update-velite-output.js` is idempotent (regex prevents duplicate `with { type: 'json' }`)
- Vite: `0.0.0.0:5000`, `allowedHosts: true` for Replit proxy
- `@prettier/sync` + `prettier-plugin-svelte` are used in `docs/mdsx.config.js` to format `.svelte`
  source files for display in documentation code blocks. NOT dead code. Planned replacement:
  `@biomejs/js-api` + `@biomejs/wasm-nodejs` once `html.experimentalFullSupportEnabled` is ready.
  See `docs/contributing/biome.md` for the full migration plan.

## ColdLight Roadmap
- **Task #1**: Style Dictionary v5.3.3 token foundation + DTCG manifest
- **Task #2**: Core takeover + `@coldlight/ui` styled components + WAI-ARIA APG audit
- **Task #3**: BitsConfig extension + ColdLightProvider + devtool config layer
