export { default as Segment } from "../time-field/components/time-field-segment.svelte";
export { default as Root } from "./components/time-range-field.svelte";
export { default as Input } from "./components/time-range-field-input.svelte";
export { default as Label } from "./components/time-range-field-label.svelte";

export type {
	TimeRangeFieldInputProps as InputProps,
	TimeRangeFieldLabelProps as LabelProps,
	TimeRangeFieldRootProps as RootProps,
	TimeRangeFieldSegmentProps as SegmentProps,
} from "./types.js";
