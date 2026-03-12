export { default as Root } from "./components/collapsible.svelte";
export { default as Content } from "./components/collapsible-content.svelte";
export { default as Trigger } from "./components/collapsible-trigger.svelte";

export type {
	CollapsibleContentProps as ContentProps,
	CollapsibleRootProps as RootProps,
	CollapsibleTriggerProps as TriggerProps,
} from "./types.js";
