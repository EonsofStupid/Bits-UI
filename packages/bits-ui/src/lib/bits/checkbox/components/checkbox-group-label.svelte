<script lang="ts">
import { boxWith, mergeProps } from "svelte-toolbelt";
import { createId } from "$lib/internal/create-id.js";
import { CheckboxGroupLabelState } from "../checkbox.svelte.js";
import type { CheckboxGroupLabelProps } from "../types.js";

const uid = $props.id();

let {
	ref = $bindable(null),
	id = createId(uid),
	child,
	children,
	...restProps
}: CheckboxGroupLabelProps = $props();

const labelState = CheckboxGroupLabelState.create({
	id: boxWith(() => id),
	ref: boxWith(
		() => ref,
		(v) => (ref = v)
	),
});

const mergedProps = $derived(mergeProps(restProps, labelState.props));
</script>

{#if child}
	{@render child({ props: mergedProps })}
{:else}
	<span {...mergedProps}>
		{@render children?.()}
	</span>
{/if}
