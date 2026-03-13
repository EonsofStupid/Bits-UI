export { default as Root } from "./components/pagination.svelte";
export { default as NextButton } from "./components/pagination-next-button.svelte";
export { default as Page } from "./components/pagination-page.svelte";
export { default as PrevButton } from "./components/pagination-prev-button.svelte";

export type {
	PaginationNextButtonProps as NextButtonProps,
	PaginationPageProps as PageProps,
	PaginationPrevButtonProps as PrevButtonProps,
	PaginationRootProps as RootProps,
} from "./types.js";
