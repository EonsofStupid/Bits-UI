# ColdLight UI

[![npm version](https://flat.badgen.net/npm/v/@coldlight/ui?color=black)](https://npmjs.com/package/@coldlight/ui)
[![license](https://flat.badgen.net/github/license/coldlight-design/coldlight-ui?color=black)](https://github.com/coldlight-design/coldlight-ui/blob/main/LICENSE)

<img style="max-width: 100%" alt="ColdLight UI hero" src="https://github.com/user-attachments/assets/19cac792-6a93-4289-b9c7-647794a7de79" />

**ColdLight UI** — headless component primitives for Svelte.

Clean, foundational, and precisely crafted by [ColdLight Design Studio](https://coldlight.design). Unstyled WAI-ARIA primitives that give you the architecture for your own design system, on your terms.

## Documentation

Visit [coldlight.design/docs](https://coldlight.design/docs) to view the documentation.

## Architecture

Three layers work together:

1. **`@coldlight/ui`** — 44 WAI-ARIA headless primitives (this package)
2. **`@coldlight/styled`** — Styled components layer with `data-cl-id` styleIds
3. **Style Dictionary v5.3.3** — Token engine generating CSS + TypeScript + JSON manifests from a DTCG-spec token graph

## Installation

```bash
npm install @coldlight/ui
```

## Basic Usage

```svelte
<script>
  import { Accordion } from "@coldlight/ui";
</script>

<Accordion.Root>
  <Accordion.Item value="item-1">
    <Accordion.Header>
      <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content>
      Yes. Every primitive follows WAI-ARIA patterns.
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
```

## Credits

- [Melt UI](https://melt-ui.com) — builder API that informed the internal architecture
- [Radix UI](https://radix-ui.com) — headless component API patterns
- [React Spectrum](https://react-spectrum.adobe.com) — accessibility architecture reference

## License

MIT — Copyright © 2026 ColdLight Design Studio
