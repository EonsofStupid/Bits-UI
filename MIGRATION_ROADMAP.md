# ColdLight Migration Roadmap

This document tracks the migration of every bits-ui component into the
ColdLight design system. Each component is assigned a migration phase,
linked to its WAI-ARIA APG pattern, and mapped to the ColdLight token
categories it will consume.

## Migration Phases

- **Phase 1** — Core interactive primitives (most-used, simplest token surface)
- **Phase 2** — Composite widgets (multiple sub-components, complex ARIA patterns)
- **Phase 3** — Specialized / date-time / advanced components

---

## Component Migration Table

| # | Component | WAI-ARIA APG Pattern | Test File | Phase | Token Dependencies | GitHub Issue |
|---|---|---|---|---|---|---|
| 1 | Accordion | [Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) | `accordion/accordion.browser.test.ts` | 1 | `color.semantic`, `spacing`, `radius`, `shadow`, `typography` | #TBD-1 |
| 2 | AlertDialog | [Alert Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/) | `alert-dialog/alert-dialog.browser.test.ts` | 2 | `color.semantic`, `spacing`, `radius`, `shadow`, `typography` | #TBD-2 |
| 3 | AspectRatio | N/A (layout utility) | N/A | 1 | None (pure layout) | #TBD-3 |
| 4 | Avatar | N/A (presentation) | `avatar/avatar.browser.test.ts` | 1 | `color.semantic`, `radius`, `spacing`, `typography` | #TBD-4 |
| 5 | Button | [Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/) | N/A (tested inline) | 1 | `color.semantic`, `spacing`, `radius`, `shadow`, `typography` | #TBD-5 |
| 6 | Calendar | [Grid (Date Picker)](https://www.w3.org/WAI/ARIA/apg/patterns/grid/) | `calendar/calendar.browser.test.ts` | 3 | `color.semantic`, `spacing`, `radius`, `typography` | #TBD-6 |
| 7 | Checkbox | [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) | `checkbox/checkbox.browser.test.ts` | 1 | `color.semantic`, `spacing`, `radius` | #TBD-7 |
| 8 | Collapsible | [Disclosure](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/) | `collapsible/collapsible.browser.test.ts` | 1 | `color.semantic`, `spacing`, `radius`, `shadow` | #TBD-8 |
| 9 | Combobox | [Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/) | `combobox/combobox.browser.test.ts` | 2 | `color.semantic`, `spacing`, `radius`, `shadow`, `typography` | #TBD-9 |
| 10 | Command | [Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) | `command/command.browser.test.ts` | 2 | `color.semantic`, `spacing`, `radius`, `shadow`, `typography` | #TBD-10 |
| 11 | ContextMenu | [Menu](https://www.w3.org/WAI/ARIA/apg/patterns/menu/) | `context-menu/context-menu.browser.test.ts` | 2 | `color.semantic`, `spacing`, `radius`, `shadow`, `typography` | #TBD-11 |
| 12 | DateField | [Spinbutton](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/) | `date-field/date-field.browser.test.ts` | 3 | `color.semantic`, `spacing`, `radius`, `typography` | #TBD-12 |
| 13 | DatePicker | [Date Picker Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) | `date-picker/date-picker.browser.test.ts` | 3 | `color.semantic`, `spacing`, `radius`, `shadow`, `typography` | #TBD-13 |
| 14 | DateRangeField | [Spinbutton](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/) | `date-range-field/date-range-field.browser.test.ts` | 3 | `color.semantic`, `spacing`, `radius`, `typography` | #TBD-14 |
| 15 | DateRangePicker | [Date Picker Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) | `date-range-picker/date-range-picker.browser.test.ts` | 3 | `color.semantic`, `spacing`, `radius`, `shadow`, `typography` | #TBD-15 |
| 16 | Dialog | [Dialog (Modal)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) | `dialog/dialog.browser.test.ts` | 1 | `color.semantic`, `spacing`, `radius`, `shadow`, `typography` | #TBD-16 |
| 17 | DropdownMenu | [Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menubutton/) | `dropdown-menu/dropdown-menu.browser.test.ts` | 2 | `color.semantic`, `spacing`, `radius`, `shadow`, `typography` | #TBD-17 |
| 18 | Label | N/A (form utility) | `label/label.browser.test.ts` | 1 | `color.semantic`, `typography` | #TBD-18 |
| 19 | LinkPreview | [Tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/) | `link-preview/link-preview.browser.test.ts` | 2 | `color.semantic`, `spacing`, `radius`, `shadow`, `typography` | #TBD-19 |
| 20 | Menubar | [Menu Bar](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) | `menubar/menubar.browser.test.ts` | 2 | `color.semantic`, `spacing`, `radius`, `shadow`, `typography` | #TBD-20 |
| 21 | Meter | [Meter](https://www.w3.org/WAI/ARIA/apg/patterns/meter/) | `meter/meter.browser.test.ts` | 1 | `color.semantic`, `spacing`, `radius` | #TBD-21 |
| 22 | NavigationMenu | [Navigation](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/) | `navigation-menu/navigation-menu.browser.test.ts` | 2 | `color.semantic`, `spacing`, `radius`, `shadow`, `typography` | #TBD-22 |
| 23 | Pagination | N/A (custom widget) | `pagination/pagination.browser.test.ts` | 1 | `color.semantic`, `spacing`, `radius`, `typography` | #TBD-23 |
| 24 | PinInput | [Spinbutton](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/) | `pin-input/pin-input.browser.test.ts` | 2 | `color.semantic`, `spacing`, `radius`, `typography` | #TBD-24 |
| 25 | Popover | [Dialog (Non-modal)](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/) | `popover/popover.browser.test.ts` | 1 | `color.semantic`, `spacing`, `radius`, `shadow`, `typography` | #TBD-25 |
| 26 | Progress | [Progressbar](https://www.w3.org/WAI/ARIA/apg/patterns/meter/) | `progress/progress.browser.test.ts` | 1 | `color.semantic`, `spacing`, `radius` | #TBD-26 |
| 27 | RadioGroup | [Radio Group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) | `radio-group/radio-group.browser.test.ts` | 1 | `color.semantic`, `spacing`, `radius` | #TBD-27 |
| 28 | RangeCalendar | [Grid (Date Picker)](https://www.w3.org/WAI/ARIA/apg/patterns/grid/) | `range-calendar/range-calendar.browser.test.ts` | 3 | `color.semantic`, `spacing`, `radius`, `typography` | #TBD-28 |
| 29 | RatingGroup | N/A (custom widget) | `rating-group/rating-group.browser.test.ts` | 1 | `color.semantic`, `spacing` | #TBD-29 |
| 30 | ScrollArea | N/A (layout utility) | `scroll-area/scroll-area.browser.test.ts` | 1 | `color.semantic`, `spacing`, `radius` | #TBD-30 |
| 31 | Select | [Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) | `select/select.browser.test.ts` | 2 | `color.semantic`, `spacing`, `radius`, `shadow`, `typography` | #TBD-31 |
| 32 | Separator | [Separator](https://www.w3.org/WAI/ARIA/apg/patterns/separator/) | `separator/separator.browser.test.ts` | 1 | `color.semantic`, `spacing` | #TBD-32 |
| 33 | Slider | [Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/) | `slider/slider.browser.test.ts` | 1 | `color.semantic`, `spacing`, `radius` | #TBD-33 |
| 34 | Switch | [Switch](https://www.w3.org/WAI/ARIA/apg/patterns/switch/) | `switch/switch.browser.test.ts` | 1 | `color.semantic`, `spacing`, `radius` | #TBD-34 |
| 35 | Tabs | [Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) | `tabs/tabs.browser.test.ts` | 1 | `color.semantic`, `spacing`, `radius`, `shadow`, `typography` | #TBD-35 |
| 36 | TimeField | [Spinbutton](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/) | `time-field/time-field.browser.test.ts` | 3 | `color.semantic`, `spacing`, `radius`, `typography` | #TBD-36 |
| 37 | TimeRangeField | [Spinbutton](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/) | `time-range-field/time-range-field.browser.test.ts` | 3 | `color.semantic`, `spacing`, `radius`, `typography` | #TBD-37 |
| 38 | Toggle | [Toggle Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/) | `toggle/toggle.browser.test.ts` | 1 | `color.semantic`, `spacing`, `radius` | #TBD-38 |
| 39 | ToggleGroup | [Toolbar](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/) | `toggle-group/toggle-group.browser.test.ts` | 1 | `color.semantic`, `spacing`, `radius` | #TBD-39 |
| 40 | Toolbar | [Toolbar](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/) | `toolbar/toolbar.browser.test.ts` | 2 | `color.semantic`, `spacing`, `radius`, `shadow`, `typography` | #TBD-40 |
| 41 | Tooltip | [Tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/) | `tooltip/tooltip.browser.test.ts` | 1 | `color.semantic`, `spacing`, `radius`, `shadow`, `typography` | #TBD-41 |
| 42 | BitsConfig | N/A (provider utility) | `utilities/bits-config/bits-config.browser.test.ts` | 1 | N/A (extended to ColdLightProvider) | #TBD-42 |
| 43 | IsUsingKeyboard | N/A (detection utility) | N/A | 1 | N/A (unchanged) | #TBD-43 |
| 44 | Portal | N/A (DOM utility) | `portal/portal.browser.test.ts` | 1 | N/A (unchanged) | #TBD-44 |

---

## Phase Summary

| Phase | Count | Components |
|---|---|---|
| 1 | 25 | Accordion, AspectRatio, Avatar, Button, Checkbox, Collapsible, Dialog, Label, Meter, Pagination, Popover, Progress, RadioGroup, RatingGroup, ScrollArea, Separator, Slider, Switch, Tabs, Toggle, ToggleGroup, Tooltip, BitsConfig, IsUsingKeyboard, Portal |
| 2 | 11 | AlertDialog, Combobox, Command, ContextMenu, DropdownMenu, LinkPreview, Menubar, NavigationMenu, PinInput, Select, Toolbar |
| 3 | 8 | Calendar, DateField, DatePicker, DateRangeField, DateRangePicker, RangeCalendar, TimeField, TimeRangeField |

---

## Token Category Reference

These are the ColdLight design token categories each component will consume
(defined in Task #1 — Style Dictionary Foundation):

| Category | Description | CSS Custom Property Prefix |
|---|---|---|
| `color.primitives` | Raw HSL color ramps (neutral, brand, error, warning, success, info) | `--cl-color-*` |
| `color.semantic` | Semantic aliases (background, foreground, muted, border, accent, destructive) | `--cl-color-*` |
| `spacing` | 0–96 spacing scale | `--cl-spacing-*` |
| `radius` | none, sm, md, lg, full | `--cl-radius-*` |
| `typography` | Font family, size, weight, line-height, letter-spacing composites | `--cl-font-*`, `--cl-text-*` |
| `shadow` | Elevation shadows (sm, md, lg, xl) | `--cl-shadow-*` |

---

## Test Coverage Baseline

- **43 browser test files** covering 41 components + 2 utilities (Portal, BitsConfig)
- **3 components without dedicated test files**: AspectRatio (N/A), Button (tested inline), IsUsingKeyboard (N/A)
- Test runner: Vitest 3.2.4 + @vitest/browser + Playwright
- Browser engines: chromium + webkit (both configured in `tests/vite.config.ts`)
- All tests must pass before any migration work begins (verified in Task #4)
