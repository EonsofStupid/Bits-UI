<script lang="ts">
import { boxWith, mergeProps } from "svelte-toolbelt";
import { createId } from "$lib/internal/create-id.js";
import { ToolbarLinkState } from "../toolbar.svelte.js";
import type { ToolbarLinkProps } from "../types.js";

const uid = $props.id();

let {
	children,
	href,
	child,
	ref = $bindable(null),
	id = createId(uid),
	...restProps
}: ToolbarLinkProps = $props();

const linkState = ToolbarLinkState.create({
	id: boxWith(() => id),
	ref: boxWith(
		() => ref,
		(v) => (ref = v)
	),
});

const mergedProps = $derived(mergeProps(restProps, linkState.props));
</script>

{#if child}
	{@render child({ props: mergedProps })}
{:else}
	<a {href} {...mergedProps}>
		{@render children?.()}
	</a>
{/if}
