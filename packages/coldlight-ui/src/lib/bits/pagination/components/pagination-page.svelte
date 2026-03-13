<script lang="ts">
import { boxWith, mergeProps } from "svelte-toolbelt";
import { createId } from "$lib/internal/create-id.js";
import { PaginationPageState } from "../pagination.svelte.js";
import type { PaginationPageProps } from "../types.js";

const uid = $props.id();

let {
	id = createId(uid),
	page,
	child,
	children,
	type = "button",
	ref = $bindable(null),
	disabled = false,
	...restProps
}: PaginationPageProps = $props();

const pageState = PaginationPageState.create({
	id: boxWith(() => id),
	page: boxWith(() => page),
	ref: boxWith(
		() => ref,
		(v) => (ref = v)
	),
	disabled: boxWith(() => Boolean(disabled)),
});

const mergedProps = $derived(mergeProps(restProps, pageState.props, { type }));
</script>

{#if child}
	{@render child({ props: mergedProps })}
{:else}
	<button {...mergedProps}>
		{#if children}
			{@render children?.()}
		{:else}
			{page.value}
		{/if}
	</button>
{/if}
