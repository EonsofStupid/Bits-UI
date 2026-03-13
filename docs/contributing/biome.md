# Biome — ColdLight Reference

> Version in use: **2.4.6** | Schema: `https://biomejs.dev/schemas/2.4.6/schema.json`
> Source of truth for all formatting, linting, and CI tooling in this monorepo.

---

## What Biome Is

Biome is a single Rust-based toolchain that replaces Prettier + ESLint (and formerly oxlint).
It ships a formatter, linter, import organizer, and language server in one binary with zero npm plugin dependencies.

- **10–100× faster** than ESLint/Prettier
- **97% Prettier-compatible** output
- **455 lint rules** as of 2.4
- Single config file: `biome.json` at the workspace root

---

## Language Support Matrix (Biome 2.4)

| Language | Parsing | Formatting | Linting |
|----------|---------|-----------|---------|
| JavaScript | ✅ | ✅ | ✅ |
| TypeScript | ✅ | ✅ | ✅ |
| JSX / TSX | ✅ | ✅ | ✅ |
| JSON / JSONC | ✅ | ✅ | ✅ |
| CSS | ✅ | ✅ | ✅ |
| GraphQL | ✅ | ✅ | ✅ |
| HTML | ✅ | ✅ | ✅ |
| **Svelte** | 🟡 experimental | 🟡 experimental | 🟡 experimental |
| Vue | 🟡 experimental | 🟡 experimental | 🟡 experimental |
| Astro | 🟡 experimental | 🟡 experimental | 🟡 experimental |
| SCSS | ⌛ in progress | ⌛ in progress | 🚫 |
| YAML | ⌛ in progress | ⌛ in progress | 🚫 |
| Markdown | ⌛ in progress | ⌛ in progress | 🚫 |

### Svelte support (v2.4)

Experimental full support is enabled via one flag. Once enabled:

- `<script>` blocks: fully formatted and linted (JS/TS)
- `<style>` blocks: fully formatted and linted (CSS), including `:global`, `:slotted`, `:local`
- HTML template: formatted and parsed
- Svelte control-flow (`{#if}`, `{#each}`, `{@const}`, etc.): experimental, improving each release
- Rules improved for Svelte in 2.4: `noUnusedVariables`, `useConst`, `useImportType`, `noUnusedImports`
  (fewer false positives — no workaround overrides needed anymore)

To enable:

```json
{
  "html": {
    "experimentalFullSupportEnabled": true
  }
}
```

> Note: This flag is **not yet enabled** in our `biome.json` because the docs pipeline still uses
> `prettier-plugin-svelte` for code block formatting. When that migrates to `@biomejs/js-api`
> (see planned task), this flag should be turned on.

---

## Our `biome.json` Configuration

```json
{
  "$schema": "https://biomejs.dev/schemas/2.4.6/schema.json",
  "vcs": {
    "enabled": true,
    "clientKind": "git",
    "useIgnoreFile": true,
    "defaultBranch": "main"
  },
  "files": {
    "ignoreUnknown": false,
    "includes": [
      "**",
      "!**/node_modules",
      "!**/build",
      "!**/.svelte-kit",
      "!**/dist",
      "!**/.velite",
      "!pnpm-lock.yaml",
      "!pnpm-workspace.yaml"
    ]
  },
  "formatter": {
    "indentStyle": "tab",
    "indentWidth": 4,
    "lineWidth": 100,
    "lineEnding": "lf"
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "double",
      "jsxQuoteStyle": "double",
      "trailingCommas": "es5",
      "semicolons": "always",
      "arrowParentheses": "always",
      "bracketSpacing": true,
      "bracketSameLine": false
    }
  },
  "css": {
    "parser": { "tailwindDirectives": true },
    "formatter": { "indentStyle": "tab", "indentWidth": 4, "lineWidth": 100, "quoteStyle": "double" }
  }
}
```

### Key linter rules (global)

| Rule | Severity | Notes |
|------|----------|-------|
| `noExplicitAny` | error | Off in type-utility files via override |
| `noUnusedVariables` | error | `ignoreRestSiblings: true` |
| `noUnusedImports` | error | Off in `.svelte` files (Svelte compile handles this) |
| `noUnusedFunctionParameters` | warn | |
| `noDoubleEquals` | error | Strict equality everywhere |
| `noDebugger` | error | |
| `noConsole` | off globally | Overridden to error inside `packages/coldlight-ui/src/lib/**` (pre-rename: `packages/bits-ui/`) |
| `useExhaustiveDependencies` | warn | Svelte reactivity |
| `useOptionalChain` | warn | |
| `noGlobalIsNan` | warn | |

### Overrides

| Scope | What changes |
|-------|-------------|
| `packages/coldlight-ui/src/lib/**/*` (pre-rename: `packages/bits-ui/`) | `noConsole` → error |
| Type utility files (`types.ts`, `shared/index.ts`, `css.d.ts`, `app.d.ts`, test file) | `noExplicitAny` off, `noBannedTypes` off, `noUnusedImports` off |
| `**/*.svelte` | `noUnusedVariables` off, `noUnusedImports` off |
| `**/*.md` | Formatter: 2-space indent, 79 line width |

---

## CLI Scripts

Defined in the root `package.json`:

```bash
pnpm format        # biome format --write .
pnpm lint          # biome check --formatter-enabled=false .
pnpm check:all     # biome check .           (format + lint, no write)
pnpm check:fix     # biome check --write .   (format + lint + auto-fix)
pnpm ci            # biome ci .              (CI mode — no writes, exits non-zero on any error)
```

### When to use which

- **`pnpm format`** — clean up whitespace / style before committing
- **`pnpm lint`** — see lint errors without touching formatting
- **`pnpm check:fix`** — fix everything fixable in one shot
- **`pnpm ci`** — what the CI pipeline runs; blocks on any error or format diff

---

## CI Integration

### `biome.yml` (`.github/workflows/biome.yml`)

Triggers on push + PR to `main`, `next`, `coldlight`.

```
Step 1: biome ci --reporter=github .
  → GitHub-annotated diagnostics (inline PR comments)
  → Exits non-zero on any error → blocks merge

Step 2: biome ci --reporter=json . > biome-report.json 2>&1 || true
  → JSON report for devtool UI consumption
  → always() — does not affect pass/fail

Step 3: Upload biome-report.json as artifact (retention: 7 days)
Step 4: Write JSON summary to GITHUB_STEP_SUMMARY
```

> `continue-on-error` is intentionally absent. The check is a hard gate.

### `ci.yml` (`.github/workflows/ci.yml`)

Three jobs, all gated to `main`, `next`, `coldlight`:

```
Check  →  svelte-check across monorepo
Lint   →  pnpm lint (Biome)
Test   →  (needs: Check + Lint) Playwright browser tests (chromium + webkit)
```

All three must pass for a PR to merge. See `docs/contributing/branch-protection.md` for the full rule set.

---

## Inline Suppression Comments

When a rule must be suppressed for a specific line:

```ts
// biome-ignore lint/suspicious/noExplicitAny: <required reason>
const value: any = ...;
```

When suppressing a block:

```ts
// biome-ignore lint/complexity/noBannedTypes: generic default requires {}
type Foo<T = {}> = ...
```

**Never use file-level suppression comments.** Add a `biome.json` override for the file/path instead.
File-level `// biome-ignore` only suppresses the **next line**, not the whole file — a common mistake.

### Rule naming convention

```
lint/<group>/<ruleName>

Groups: accessibility, complexity, correctness, nursery, performance,
        security, style, suspicious
```

---

## `@biomejs/js-api` — Programmatic Node.js API

The JS API is available for tooling that needs to format or lint code **as a string** at runtime
(e.g., docs pipelines, build scripts, devtools).

> **Status**: Alpha — API may change. Requires peer dep `@biomejs/wasm-nodejs`.

### Installation

```bash
pnpm add -D @biomejs/js-api @biomejs/wasm-nodejs
```

### Distributions

```ts
import { Biome } from "@biomejs/js-api/nodejs";    // Node.js (fs-based WASM load)
import { Biome } from "@biomejs/js-api/bundler";   // Bundler (native WASM import)
import { Biome } from "@biomejs/js-api/web";       // Browser (fetch-based WASM load)
```

### Core API

```ts
import { Biome } from "@biomejs/js-api/nodejs";

const biome = new Biome();

// 1. Open a project — picks up biome.json automatically
const { projectKey } = biome.openProject("path/to/project/dir");

// 2. Optionally inject config programmatically (overrides biome.json for this instance)
biome.applyConfiguration(projectKey, {
  $schema: "https://biomejs.dev/schemas/2.4.6/schema.json",
  formatter: { enabled: true, indentStyle: "space", lineWidth: 80 },
  javascript: { formatter: { quoteStyle: "single" } },
  linter: { enabled: false },
});

// 3. Format a string — filePath drives language detection
const formatted = biome.formatContent(projectKey, sourceCode, {
  filePath: "component.svelte",   // .svelte triggers Svelte formatting
});
console.log(formatted.content);

// 4. Lint a string
const linted = biome.lintContent(projectKey, sourceCode, {
  filePath: "example.ts",
});

// 5. Print diagnostics as HTML
const html = biome.printDiagnostics(linted.diagnostics, {
  filePath: "example.ts",
  fileSource: sourceCode,
});
```

### Replacing `@prettier/sync` in `docs/mdsx.config.js`

This is a planned migration (see `BREAKING_CHANGES.md` §8). The shape of the change:

```js
// BEFORE — docs/mdsx.config.js
import prettier from "@prettier/sync";
import { codeBlockPrettierConfig } from "./other/code-block-prettier.js";

function getComponentSourceFileContent(src) {
  const code = readFileSync(filePath, "utf-8");
  return prettier.format(transformComponentSourceContent(code), codeBlockPrettierConfig);
}

// AFTER — docs/mdsx.config.js
import { Biome } from "@biomejs/js-api/nodejs";

const biome = new Biome();
const { projectKey } = biome.openProject(process.cwd());

function getComponentSourceFileContent(src) {
  const code = readFileSync(filePath, "utf-8");
  const result = biome.formatContent(projectKey, transformComponentSourceContent(code), {
    filePath: "component.svelte",
  });
  return result.content;
}
```

Prerequisites before this migration:
1. Enable `html.experimentalFullSupportEnabled: true` in `biome.json`
2. Add `@biomejs/js-api` and `@biomejs/wasm-nodejs` to `docs/package.json`
3. Remove `@prettier/sync` and `prettier-plugin-svelte` from `docs/package.json`
4. Delete `docs/other/code-block-prettier.js`

---

## Embedded Language Support in JavaScript (v2.4)

Biome 2.4 can format and lint CSS and GraphQL **inside JavaScript template literals**.

```json
{
  "javascript": {
    "experimentalEmbeddedSnippetsEnabled": true
  }
}
```

Once enabled:

```ts
// CSS-in-JS (styled-components, Emotion, etc.) — formatted + linted
const Button = styled.div`
  display: flex;
  color: red;
`;

// GraphQL — formatted + linted
const query = gql`
  query PeopleCount {
    allPeople { totalCount }
  }
`;
```

---

## Editor Integration

### VS Code

Install the [Biome extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome).
Add to `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "biomejs.biome",
  "editor.formatOnSave": true,
  "[svelte]": {
    "editor.defaultFormatter": "biomejs.biome"
  }
}
```

### Inline config (Biome 2.4 — editor only, does not affect CLI)

```json
{
  "biome.lsp": {
    "inlineConfig": {
      "linter": {
        "rules": {
          "suspicious": { "noConsole": "off" }
        }
      }
    }
  }
}
```

---

## Migrating from oxlint

All `// oxlint-disable` comments have been replaced. The mapping used:

| oxlint | Biome equivalent |
|--------|-----------------|
| `// oxlint-disable no-explicit-any` | `biome.json` override: `"noExplicitAny": "off"` |
| `// oxlint-disable ban-ts-comment` | Removed — no equivalent rule in Biome |
| `// oxlint-disable no-unused-vars` | `biome.json` override: `"noUnusedVariables": "off"` |

File-level oxlint disables become path-scoped `overrides` in `biome.json`. Single-line disables
become `// biome-ignore lint/<group>/<rule>: <reason>` on the preceding line.

---

## Resources

- Biome docs: https://biomejs.dev/
- Language support matrix: https://biomejs.dev/internals/language-support/
- Linter rules (455): https://biomejs.dev/linter/rules/
- Configuration reference: https://biomejs.dev/reference/configuration/
- `@biomejs/js-api` on npm: https://www.npmjs.com/package/@biomejs/js-api
- Svelte support tracking issue: https://github.com/biomejs/biome/issues/1719
- v2.4 release notes: https://biomejs.dev/blog/biome-v2-4/
- 2026 roadmap: https://biomejs.dev/blog/roadmap-2026/
