# ColdLight Design Studio UI — Monorepo

## What This Is

**ColdLight Design Studio UI** — a Tesla 1890s-inspired UI system. Clean, foundational, precise.
The goal: a complete layman UI system where every component is a known, nameable thing with a
clear identity in the design token graph.

Three layers:
1. **Headless primitives** — 44 WAI-ARIA compliant components (Svelte 5, forked from Bits UI)
2. **Styled components** — `@coldlight/ui`, each with a `data-cl-id` styleId that the registry
   and recipe system can target
3. **Token engine** — Style Dictionary v5.3.3 generates all CSS from a DTCG-spec token manifest;
   the manifest is machine-readable and drives the recipe system

The **recipe system** maps component IDs (via `data-cl-id`) to token paths. A recipe is a
composition of design tokens that describes a component's full visual identity. The registry
knows every component, every ID, every recipe — this is the source of truth for the devtools
no-code wizard.

## Project Structure

```
packages/coldlight-ui/     ← ColdLight headless + styled layer (directory rename pending Task #2;
                             currently packages/bits-ui/ — pnpm filter: bits-ui)
docs/                      ← SvelteKit documentation site (port 5000)
tests/                     ← Browser tests (43 test files, Vitest + Playwright)
bundle-analyzer/           ← Bundle size analysis
scripts/
  dev/build/coldlight/
    styledictionary/       ← Style Dictionary pipeline (Task #1)
BREAKING_CHANGES.md        ← Full API contract: frozen/extensible/internal
MIGRATION_ROADMAP.md       ← 44-component table: WAI-ARIA APG refs, phases, token deps
docs/contributing/         ← Contributor reference (biome.md, branch-protection.md)
```

## Package Manager
- **pnpm** (v10.26.1) — Managed via `pnpm-workspace.yaml` with version catalog

## Tooling
- **Biome 2.4.6** — linting + formatting (replaces prettier, eslint, oxlint)
  - Config: `biome.json` at project root; schema: `https://biomejs.dev/schemas/2.4.6/schema.json`
  - 455 lint rules, 97% Prettier-compatible output
  - CSS: `tailwindDirectives: true` for Tailwind v4 directives
  - All `// oxlint-disable` comments replaced — file-level → `biome.json` overrides,
    single-line → `// biome-ignore lint/<group>/<rule>: <reason>`
  - Svelte support: 🟡 experimental via `"html": { "experimentalFullSupportEnabled": true }`;
    NOT yet enabled (docs pipeline still uses prettier-plugin-svelte — planned migration)
  - Programmatic API: `@biomejs/js-api` + `@biomejs/wasm-nodejs` → `biome.formatContent()`
  - Full reference: `docs/contributing/biome.md`

- **Style Dictionary 5.3.3** — CSS token engine
  - DTCG spec: tokens use `$value`, `$type`, `$description`, `$extensions` (NOT old `value`/`type`)
  - Async API: `new StyleDictionary(config)` then `await sd.buildAllPlatforms()`
  - Token naming: `--cl-{category}-{subcategory}-{name}`
  - Output: CSS custom properties + TypeScript declaration file (`css.d.ts`) as machine-readable manifest
  - Pipeline lives at: `scripts/dev/build/coldlight/styledictionary/`
  - Config: `coldlight.config.ts` at repo root (Panda CSS-inspired)

## CI/CD (GitHub Actions)
- **`ci.yml`** — svelte-check + lint + browser tests; `main`, `next`, `coldlight` branches
  - Check → Lint → Test (sequential, Test gated on both passing)
  - Browser tests: Playwright chromium + webkit
- **`biome.yml`** — Biome hard gate (blocks PRs) + JSON report artifact for devtools

## Key Commands
```bash
pnpm install                          # Install all deps
pnpm --filter bits-ui build           # Build ColdLight headless layer (pre-rename)
cd docs && pnpm build:content && pnpm dev:svelte  # Run docs dev server (port 5000)
pnpm --filter tests test:browser      # Run browser tests (43 files, chromium + webkit)
pnpm ci                               # Biome CI check
pnpm format                           # Format all files
pnpm check:fix                        # Format + lint + auto-fix
```

## Workflow
- **Start application**: `pnpm --filter bits-ui build && cd docs && pnpm build:content && pnpm dev:svelte`

## Security
- Playwright 1.58.2, Wrangler 4.72.0, SvelteKit 2.53.3 (patched)
- 23 remaining transitive vulnerabilities: all accepted risk, documented in `BREAKING_CHANGES.md` §7

## ColdLight Conventions
- **Token naming**: `--cl-{category}-{subcategory}-{name}` (e.g. `--cl-color-semantic-background`)
- **Component IDs**: `data-cl-id="cl-<component>"` (e.g. `data-cl-id="cl-button"`)
- **Devtool bridge**: `window.__COLDLIGHT_DEVTOOL_V1__` — versioned, observer-only
  except `pushOverride(tokenPath, value)`
- **DTCG manifest** (`css.d.ts`): machine-readable source of truth for registry + recipe system
- **Registry**: maps every `data-cl-id` to its token recipe
- **Recipe**: a composition of token paths describing a component's full visual identity

## ColdLight Runtime Dependencies
- `@floating-ui/core` + `@floating-ui/dom` — positioning
- `esm-env` — environment flags
- `runed` — Svelte 5 reactivity
- `svelte-toolbelt` — utility primitives
- `tabbable` — focus management

## Important Notes
- The headless package (`packages/bits-ui/`, pnpm filter: `bits-ui`) must be built before docs
- Velite content must be built before the dev server starts
- `update-velite-output.js` is idempotent (regex prevents duplicate `with { type: 'json' }`)
- Vite: `0.0.0.0:5000`, `allowedHosts: true` for Replit proxy
- `@prettier/sync` + `prettier-plugin-svelte` in `docs/mdsx.config.js` format `.svelte` source
  files for documentation code blocks — NOT dead code; migrate to `@biomejs/js-api` when ready
- `BitsConfigProps` extension: add `theme`, `colorScheme`, `componentDefaults` — do NOT remove
  existing `defaultPortalTo`, `defaultLocale`

## Roadmap
- **Task #1**: Style Dictionary v5.3.3 token foundation + DTCG manifest (`css.d.ts`)
- **Task #2**: Package rename → `coldlight-ui`, `@coldlight/ui` styled components + WAI-ARIA audit
- **Task #3**: BitsConfig extension + ColdLightProvider + devtool config layer
