<script lang="ts">
import { boxWith, mergeProps } from "svelte-toolbelt";
import { createId } from "$lib/internal/create-id.js";
import { noop } from "$lib/internal/noop.js";
import { MenuRadioGroupState } from "../menu.svelte.js";
import type { MenuRadioGroupProps } from "../types.js";

const uid = $props.id();

let {
	id = createId(uid),
	children,
	child,
	ref = $bindable(null),
	value = $bindable(""),
	onValueChange = noop,
	...restProps
}: MenuRadioGroupProps = $props();

const radioGroupState = MenuRadioGroupState.create({
	value: boxWith(
		() => value,
		(v) => {
			value = v;
			onValueChange(v);
		}
	),
	ref: boxWith(
		() => ref,
		(v) => (ref = v)
	),
	id: boxWith(() => id),
});

const mergedProps = $derived(mergeProps(restProps, radioGroupState.props));
</script>

{#if child}
	{@render child({ props: mergedProps })}
{:else}
	<div {...mergedProps}>
		{@render children?.()}
	</div>
{/if}
