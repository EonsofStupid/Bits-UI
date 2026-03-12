# Bits UI - Monorepo

## Overview
This is a pnpm monorepo for [Bits UI](https://bits-ui.com) — headless, accessible Svelte component primitives.

## Project Structure
- `packages/bits-ui/` — The main bits-ui library (must be built before docs)
- `docs/` — SvelteKit documentation site (the frontend, runs on port 5000)
- `tests/` — Browser and component tests (Playwright + Vitest)
- `bundle-analyzer/` — Bundle size analysis tooling

## Package Manager
- **pnpm** (v10.26.1, latest stable) — Managed via `pnpm-workspace.yaml`
- Workspace catalog defines shared dependency versions

## Tooling
- **Biome 2.4.6** — single tool for linting + formatting (replaces prettier, eslint, oxlint)
  - Config: `biome.json` at project root
  - CSS: `tailwindDirectives: true` enables `@theme`, `@custom-variant`, `@apply`, `@plugin` parsing
  - Formatter mirrors original prettier settings: tabs, width 4, 100 char lines, double quotes
  - `pnpm format` → format write | `pnpm lint` → lint | `pnpm check:fix` → format + lint + fix

## Key Commands
```bash
# Install all dependencies
pnpm install

# Build the bits-ui library (required before running docs)
pnpm --filter bits-ui build

# Run the docs dev server (after building bits-ui)
cd docs && pnpm build:content && pnpm dev:svelte

# Build everything
pnpm build
```

## Workflow
- **Start application**: Builds bits-ui, builds velite content, then runs the SvelteKit docs dev server on port 5000

## Important Notes
- `bits-ui` must be built (`pnpm --filter bits-ui build`) before the docs can resolve it
- Velite content must be built (`pnpm build:content` inside `docs/`) before the dev server starts
- The `update-velite-output.js` script is idempotent (uses regex to avoid duplicate `with { type: 'json' }` imports)
- Vite config (`docs/vite.config.ts`) is set to host `0.0.0.0`, port `5000`, with `allowedHosts: true` for Replit proxy compatibility
- The docs use `@sveltejs/adapter-cloudflare` — designed for Cloudflare Pages deployment

## Tech Stack
- Svelte 5, SvelteKit 2
- Vite 7, TypeScript 5
- Tailwind CSS v4
- Velite (content/MDX processing)
- Phosphor icons, mode-watcher, svelte-sonner
