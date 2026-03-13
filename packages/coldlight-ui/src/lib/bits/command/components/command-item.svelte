<script lang="ts">
import { boxWith, mergeProps } from "svelte-toolbelt";
import { createId } from "$lib/internal/create-id.js";
import { noop } from "$lib/internal/noop.js";
import { CommandItemState } from "../command.svelte.js";
import type { CommandItemProps } from "../types.js";

const uid = $props.id();

let {
	id = createId(uid),
	ref = $bindable(null),
	value = "",
	disabled = false,
	children,
	child,
	onSelect = noop,
	forceMount = false,
	keywords = [],
	...restProps
}: CommandItemProps = $props();

const itemState = CommandItemState.create({
	id: boxWith(() => id),
	ref: boxWith(
		() => ref,
		(v) => (ref = v)
	),
	value: boxWith(() => value),
	disabled: boxWith(() => disabled),
	onSelect: boxWith(() => onSelect),
	forceMount: boxWith(() => forceMount),
	keywords: boxWith(() => keywords),
});

const mergedProps = $derived(mergeProps(restProps, itemState.props));
</script>

{#key itemState.root.key}
	<div style="display: contents;" data-item-wrapper data-value={itemState.trueValue}>
		{#if itemState.shouldRender}
			{#if child}
				{@render child({ props: mergedProps })}
			{:else}
				<div {...mergedProps}>
					{@render children?.()}
				</div>
			{/if}
		{/if}
	</div>
{/key}
