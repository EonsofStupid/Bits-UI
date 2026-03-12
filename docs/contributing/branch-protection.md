# Branch Protection Settings

Protected branches: `main`, `next`, `coldlight`

## Required Status Checks

All PRs targeting protected branches must pass every check below before merge.

| Check Name       | Workflow   | Description                                          |
| ---------------- | ---------- | ---------------------------------------------------- |
| Run svelte-check | `ci.yml`   | Runs `svelte-check` across the monorepo              |
| Lint             | `ci.yml`   | Runs `pnpm lint` (Biome lint pass)                   |
| Browser Tests    | `ci.yml`   | Runs Playwright browser tests (chromium + webkit)    |
| Biome Check      | `biome.yml`| Runs `biome ci` with GitHub reporter; blocks on error|

## Branch Rules

- **Require pull request reviews**: At least 1 approval required.
- **Require status checks to pass before merging**: All 4 checks above must pass.
- **Require branches to be up to date before merging**: Enabled.
- **Include administrators**: Enabled (admins are not exempt from checks).
- **Restrict who can push to matching branches**: Only maintainers.
- **Allow force pushes**: Disabled.
- **Allow deletions**: Disabled.

## CI Trigger Configuration

Both `ci.yml` and `biome.yml` trigger on:

- **push** to `main`, `next`, `coldlight`
- **pull_request** targeting `main`, `next`, `coldlight`

Paths ignored (do not trigger CI): `.changeset/**`, `README.md`, `.vscode/**`, `CHANGELOG.md`

## Test Matrix

The Browser Tests job installs Playwright with `chromium` and `webkit` to match the test configuration in `tests/vite.config.ts`, which runs every `*.browser.test.ts` file against both browser engines.
