export { default as Segment } from "../date-field/components/date-field-segment.svelte";
export { default as Root } from "./components/date-range-field.svelte";
export { default as Input } from "./components/date-range-field-input.svelte";
export { default as Label } from "./components/date-range-field-label.svelte";

export type {
	DateRangeFieldInputProps as InputProps,
	DateRangeFieldLabelProps as LabelProps,
	DateRangeFieldRootProps as RootProps,
	DateRangeFieldSegmentProps as SegmentProps,
} from "./types.js";
