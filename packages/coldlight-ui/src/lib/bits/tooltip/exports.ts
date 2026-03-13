export { default as Portal } from "$lib/bits/utilities/portal/portal.svelte";
export type { PortalProps } from "$lib/bits/utilities/portal/types.js";
export { default as Root } from "./components/tooltip.svelte";
export { default as Arrow } from "./components/tooltip-arrow.svelte";
export { default as Content } from "./components/tooltip-content.svelte";
export { default as ContentStatic } from "./components/tooltip-content-static.svelte";
export { default as Provider } from "./components/tooltip-provider.svelte";
export { default as Trigger } from "./components/tooltip-trigger.svelte";
export { createTooltipTether as createTether } from "./tooltip.svelte.js";
export type {
	TooltipArrowProps as ArrowProps,
	TooltipContentProps as ContentProps,
	TooltipContentStaticProps as ContentStaticProps,
	TooltipProviderPropsWithoutHTML as ProviderProps,
	TooltipRootPropsWithoutHTML as RootProps,
	TooltipRootSnippetProps as RootSnippetProps,
	TooltipTether as Tether,
	TooltipTriggerProps as TriggerProps,
} from "./types.js";
