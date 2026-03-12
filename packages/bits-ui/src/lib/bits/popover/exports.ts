export { default as Portal } from "$lib/bits/utilities/portal/portal.svelte";
export { default as Root } from "./components/popover.svelte";
export { default as Arrow } from "./components/popover-arrow.svelte";
export { default as Close } from "./components/popover-close.svelte";
export { default as Content } from "./components/popover-content.svelte";
export { default as ContentStatic } from "./components/popover-content-static.svelte";
export { default as Overlay } from "./components/popover-overlay.svelte";
export { default as Trigger } from "./components/popover-trigger.svelte";

export type {
	PopoverArrowProps as ArrowProps,
	PopoverCloseProps as CloseProps,
	PopoverContentProps as ContentProps,
	PopoverContentStaticProps as ContentStaticProps,
	PopoverOverlayProps as OverlayProps,
	PopoverPortalProps as PortalProps,
	PopoverRootProps as RootProps,
	PopoverTriggerProps as TriggerProps,
} from "./types.js";
