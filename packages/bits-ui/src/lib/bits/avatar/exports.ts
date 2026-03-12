export { default as Root } from "./components/avatar.svelte";
export { default as Fallback } from "./components/avatar-fallback.svelte";
export { default as Image } from "./components/avatar-image.svelte";

export type {
	AvatarFallbackProps as FallbackProps,
	AvatarImageProps as ImageProps,
	AvatarRootProps as RootProps,
} from "./types.js";
