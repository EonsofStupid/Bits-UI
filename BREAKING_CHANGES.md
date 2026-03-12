# ColdLight API Contract — Breaking Changes Reference

This document records the full public API surface of `bits-ui@2.16.3` at the
point of ColdLight fork. Every public export, type contract, and behavioral
guarantee is listed here with a classification:

- **FROZEN** — Must not be removed or have its signature changed. Downstream
  consumers depend on this exact contract.
- **EXTENSIBLE** — New fields/variants may be added, but existing fields must
  not be removed or change type.
- **INTERNAL** — Exported for convenience but subject to change in ColdLight.
  Consumers should not rely on these.

---

## 1. Component Namespace Exports (FROZEN)

Every component is exported as a namespace object from `bits-ui`. Each
namespace contains sub-component Svelte files (as named exports) and
corresponding TypeScript prop types (as type exports).

| Component | Sub-exports |
|---|---|
| `Accordion` | `Root`, `Content`, `Header`, `Item`, `Trigger` |
| `AlertDialog` | `Root`, `Action`, `Cancel`, `Content`, `Description`, `Overlay`, `Portal`, `Title`, `Trigger` |
| `AspectRatio` | `Root` |
| `Avatar` | `Root`, `Fallback`, `Image` |
| `Button` | `Root` |
| `Calendar` | `Root`, `Cell`, `Day`, `Grid`, `GridBody`, `GridHead`, `GridRow`, `HeadCell`, `Header`, `Heading`, `MonthSelect`, `NextButton`, `PrevButton`, `YearSelect` |
| `Checkbox` | `Root`, `Group`, `GroupLabel`, `Indicator` |
| `Collapsible` | `Root`, `Content`, `Trigger` |
| `Combobox` | `Root`, `Arrow`, `Content`, `ContentStatic`, `Group`, `GroupHeading`, `Input`, `Item`, `ItemIndicator`, `Portal` |
| `Command` | `Root`, `Dialog`, `Empty`, `Group`, `GroupHeading`, `GroupItems`, `Input`, `Item`, `List`, `Loading`, `Separator`, `Viewport` |
| `ContextMenu` | `Root`, `Arrow`, `CheckboxIndicator`, `CheckboxItem`, `Content`, `ContentStatic`, `Group`, `GroupHeading`, `Item`, `Portal`, `RadioGroup`, `RadioIndicator`, `RadioItem`, `Separator`, `Sub`, `SubContent`, `SubContentStatic`, `SubTrigger`, `Trigger` |
| `DateField` | `Root`, `Input`, `Label`, `Segment` |
| `DatePicker` | `Root`, `Arrow`, `Calendar`, `Cell`, `Content`, `Day`, `Grid`, `GridBody`, `GridHead`, `GridRow`, `HeadCell`, `Header`, `Heading`, `Input`, `Label`, `MonthSelect`, `NextButton`, `PrevButton`, `Segment`, `Trigger`, `YearSelect` |
| `DateRangeField` | `Root`, `Input`, `Label`, `Segment` |
| `DateRangePicker` | `Root`, `Arrow`, `Calendar`, `Cell`, `Content`, `Day`, `Grid`, `GridBody`, `GridHead`, `GridRow`, `HeadCell`, `Header`, `Heading`, `Input`, `Label`, `MonthSelect`, `NextButton`, `PrevButton`, `Segment`, `Trigger`, `YearSelect` |
| `Dialog` | `Root`, `Close`, `Content`, `ContentStatic`, `Description`, `Overlay`, `Portal`, `Title`, `Trigger` |
| `DropdownMenu` | `Root`, `Arrow`, `CheckboxIndicator`, `CheckboxItem`, `Content`, `ContentStatic`, `Group`, `GroupHeading`, `Item`, `Portal`, `RadioGroup`, `RadioIndicator`, `RadioItem`, `Separator`, `Sub`, `SubContent`, `SubContentStatic`, `SubTrigger`, `Trigger` |
| `Label` | `Root` |
| `LinkPreview` | `Root`, `Arrow`, `Content`, `ContentStatic`, `Portal`, `Trigger` |
| `Menubar` | `Root`, `Arrow`, `CheckboxIndicator`, `CheckboxItem`, `Content`, `ContentStatic`, `Group`, `GroupHeading`, `Item`, `Menu`, `Portal`, `RadioGroup`, `RadioIndicator`, `RadioItem`, `Separator`, `Sub`, `SubContent`, `SubContentStatic`, `SubTrigger`, `Trigger` |
| `Meter` | `Root` |
| `NavigationMenu` | `Root`, `Content`, `Indicator`, `Item`, `Link`, `List`, `Trigger`, `Viewport` |
| `Pagination` | `Root`, `NextButton`, `Page`, `PrevButton` |
| `PinInput` | `Root`, `Cell` |
| `Popover` | `Root`, `Arrow`, `Close`, `Content`, `ContentStatic`, `Portal`, `Trigger` |
| `Progress` | `Root` |
| `RadioGroup` | `Root`, `Item`, `ItemIndicator` |
| `RangeCalendar` | `Root`, `Cell`, `Day`, `Grid`, `GridBody`, `GridHead`, `GridRow`, `HeadCell`, `Header`, `Heading`, `MonthSelect`, `NextButton`, `PrevButton`, `YearSelect` |
| `RatingGroup` | `Root`, `Item` |
| `ScrollArea` | `Root`, `Content`, `Corner`, `Scrollbar`, `Thumb`, `Viewport` |
| `Select` | `Root`, `Arrow`, `Content`, `ContentStatic`, `Group`, `GroupHeading`, `Item`, `ItemIndicator`, `Portal`, `ScrollDownButton`, `ScrollUpButton`, `Trigger`, `Value` |
| `Separator` | `Root` |
| `Slider` | `Root`, `Range`, `Thumb`, `Tick` |
| `Switch` | `Root`, `Thumb` |
| `Tabs` | `Root`, `Content`, `List`, `Trigger` |
| `TimeField` | `Root`, `Input`, `Label`, `Segment` |
| `TimeRangeField` | `Root`, `Input`, `Label`, `Segment` |
| `Toggle` | `Root` |
| `ToggleGroup` | `Root`, `Item` |
| `Toolbar` | `Root`, `Button`, `Group`, `GroupItem`, `Link` |
| `Tooltip` | `Root`, `Arrow`, `Content`, `ContentStatic`, `Portal`, `Provider`, `Trigger`, `createTether` |

---

## 2. Utility Exports (FROZEN)

| Export | Kind | Description |
|---|---|---|
| `BitsConfig` | Svelte component | Global config provider (portal target, locale) |
| `getBitsConfig()` | Function | Read current config from context |
| `IsUsingKeyboard` | Svelte component | Tracks keyboard vs pointer input mode |
| `Portal` | Svelte component | Portals children to a target DOM node |
| `computeCommandScore` | Function | Fuzzy match scoring for Command component |
| `mergeProps` | Function (re-export from svelte-toolbelt) | Merge multiple prop objects |
| `useId` | Function | Generate deterministic unique IDs |

---

## 3. Core Type Contracts

### FROZEN — Must not change

| Type | Module | Signature |
|---|---|---|
| `WithChild<Props, SnippetProps, Ref>` | `internal/types.ts` | Primary component composition pattern — `child` snippet + `children` snippet + `style` + `ref` |
| `WithChildren<Props>` | `internal/types.ts` | Simple `{ children?: Snippet }` extension |
| `Without<T, U>` | `internal/types.ts` | `Omit<T, keyof U>` utility |
| `OnChangeFn<T>` | `internal/types.ts` | `(value: T) => void` — all callbacks use this |
| `StyleProperties` | `shared/index.ts` | `CSS.Properties & { [--${string}]: any }` |
| `Selected<Value>` | `shared/index.ts` | `{ value: Value; label?: string }` — select/combobox |
| `FocusProp` | `shared/index.ts` | `string \| HTMLElement \| SVGElement \| null \| ((el?) => FocusTarget)` |
| `Orientation` | `shared/index.ts` | `"horizontal" \| "vertical"` |
| `Direction` | `shared/index.ts` | `"ltr" \| "rtl"` |
| `FloatingContentSnippetProps` | `shared/types.ts` | `{ open: boolean; wrapperProps: Record<string, unknown> }` |
| `StaticContentSnippetProps` | `shared/types.ts` | `Omit<FloatingContentSnippetProps, "wrapperProps">` |

### EXTENSIBLE — Can add fields, cannot remove

| Type | Module | Notes |
|---|---|---|
| `BitsConfigPropsWithoutChildren` | `utilities/config/types.ts` | Currently: `defaultPortalTo`, `defaultLocale`. ColdLight will add `theme`, `colorScheme`, `componentDefaults`. |
| `BitsPrimitive*` attribute types | `shared/attributes.ts` | 19 attribute type aliases. New attribute types may be added. |
| Per-component `*Props` types | `bits/*/types.ts` | Each component's prop interface. New optional props may be added. |

### INTERNAL — Subject to change

| Type | Module | Notes |
|---|---|---|
| `ElementRef` | `internal/types.ts` | `Box<HTMLElement \| null>` — internal box wrapper |
| `WithRefOpts<T>` | `internal/types.ts` | Internal ref management |
| `BitsEvent<T, U>` | `internal/types.ts` | Internal event type wrappers |
| `Arrayable<T>` | `internal/types.ts` | `T[] \| T` utility |
| `Fn`, `AnyFn` | `internal/types.ts` | Generic function types |
| `RefAttachment<T>` | `internal/types.ts` | `ReturnType<typeof attachRef<T>>` |
| `WithChildNoChildrenSnippetProps` | `internal/types.ts` | Variant of WithChild — may merge with WithChild |

---

## 4. Re-exports (FROZEN)

These are re-exported from `shared/index.ts` and form part of the public API:

| Export | Source |
|---|---|
| `REGEXP_ONLY_CHARS` | `pin-input/pin-input.svelte.js` |
| `REGEXP_ONLY_DIGITS` | `pin-input/pin-input.svelte.js` |
| `REGEXP_ONLY_DIGITS_AND_CHARS` | `pin-input/pin-input.svelte.js` |
| `mergeProps` | `svelte-toolbelt` |
| `useId` | `internal/use-id.ts` |
| Date types: `DateMatcher`, `DateRange`, `DateValidator`, etc. | `shared/date/types.ts` |
| `SegmentPart` | `shared/index.ts` |
| `SliderThumbPositioning` | `shared/index.ts` |
| `WithoutChildren<T>`, `WithoutChild<T>`, `WithoutChildrenOrChild<T>`, `WithElementRef<T, U>` | `shared/index.ts` |

---

## 5. Runtime Dependencies (FROZEN unless explicitly migrated)

| Package | Version | Purpose |
|---|---|---|
| `@floating-ui/core` | 1.7.1 | Positioning math |
| `@floating-ui/dom` | 1.7.1 | DOM positioning |
| `esm-env` | 1.2.2 | `DEV`/`BROWSER`/`SSR` flags |
| `runed` | 0.35.1 | Svelte 5 reactive utilities |
| `svelte-toolbelt` | 0.10.6 | Box primitives, `mergeProps`, `attachRef` |
| `tabbable` | 6.2.0 | Focus management |

---

## 6. Breaking Change Rules for ColdLight

1. **Never remove** a FROZEN export — only add new ones alongside.
2. **Never change** the type signature of a FROZEN type — only add optional fields.
3. **Always extend** `BitsConfigPropsWithoutChildren` — never replace it.
4. **Component sub-exports** (Root, Content, Trigger, etc.) may gain new optional props but must not change required props.
5. **Namespace structure** (`Accordion.Root`, `Dialog.Content`, etc.) must be preserved — ColdLight adds a parallel `@coldlight/ui` package, it does not replace the headless layer.
6. **`child`/`children` snippet pattern** is the composition foundation — ColdLight's styled components must support the same pattern for render delegation.

---

## 7. Remaining Security Vulnerabilities (Accepted Risk)

After patching playwright, wrangler, and @sveltejs/kit, **23 vulnerabilities remain** — all transitive:

| Package | Severity | Source Chain | Status |
|---|---|---|---|
| `tar` (×6) | high | `@tailwindcss/oxide` → `tar` | Waiting on Tailwind CSS patch |
| `svelte` (×5) | moderate | Direct dep | All SSR-only; tracked upstream |
| `devalue` (×4) | moderate/low | `svelte` → `devalue` | Fixed in newer Svelte |
| `rollup` (×1) | high | `vite` → `rollup` | Tracked via Vite updates |
| `minimatch` (×3) | high/moderate | Transitive | Legacy glob; no direct exposure |
| `vite` (×1) | moderate | Direct devDep | Windows-only; no production risk |
| `undici` (×1) | moderate | Transitive | Decompression; no public endpoints |
| `mdast-util-to-hast` (×1) | moderate | Docs pipeline only | No user input flows through |
| `js-yaml` (×1) | moderate | `velite` → `js-yaml` | Docs pipeline only |
| `cookie` (×1) | low | `@sveltejs/kit` → `cookie` | Low severity, out-of-spec edge case |

---

## 8. Dependency Audit Exceptions

### `@prettier/sync` (docs/package.json)

**Status**: Retained (not dead code)

`@prettier/sync` is actively imported in `docs/mdsx.config.js` (line 8) and called at line 212 to format code blocks in documentation pages. Removing it would break the docs build pipeline. This dependency is docs-only and does not affect the `bits-ui` runtime package.

When the documentation pipeline is rewritten for ColdLight (Task #2+), this dependency should be re-evaluated and potentially replaced with Biome's formatter API.
