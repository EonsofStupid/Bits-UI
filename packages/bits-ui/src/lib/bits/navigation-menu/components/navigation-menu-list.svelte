<script lang="ts">
import { boxWith, mergeProps } from "svelte-toolbelt";
import Mounted from "$lib/bits/utilities/mounted.svelte";
import { createId } from "$lib/internal/create-id.js";
import { NavigationMenuListState } from "../navigation-menu.svelte.js";
import type { NavigationMenuListProps } from "../types.js";

const uid = $props.id();

let {
	id = createId(uid),
	children,
	child,
	ref = $bindable(null),
	...restProps
}: NavigationMenuListProps = $props();

const listState = NavigationMenuListState.create({
	id: boxWith(() => id),
	ref: boxWith(
		() => ref,
		(v) => (ref = v)
	),
});

const mergedProps = $derived(mergeProps(restProps, listState.props));
const wrapperProps = $derived(mergeProps(listState.wrapperProps));
</script>

{#if child}
	{@render child({ props: mergedProps, wrapperProps })}
	<Mounted bind:mounted={listState.wrapperMounted} />
{:else}
	<div {...wrapperProps}>
		<ul {...mergedProps}>
			{@render children?.()}
		</ul>
	</div>
	<Mounted bind:mounted={listState.wrapperMounted} />
{/if}
