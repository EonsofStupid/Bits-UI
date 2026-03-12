<script lang="ts">
import { boxWith, mergeProps } from "svelte-toolbelt";
import { SelectComboTriggerState } from "$lib/bits/select/select.svelte.js";
import { useId } from "$lib/internal/use-id.js";
import type { ComboboxTriggerProps } from "../types.js";

let {
	id = useId(),
	ref = $bindable(null),
	child,
	children,
	type = "button",
	...restProps
}: ComboboxTriggerProps = $props();

const triggerState = SelectComboTriggerState.create({
	id: boxWith(() => id),
	ref: boxWith(
		() => ref,
		(v) => (ref = v)
	),
});

const mergedProps = $derived(mergeProps(restProps, triggerState.props, { type }));
</script>

{#if child}
	{@render child({ props: mergedProps })}
{:else}
	<button {...mergedProps}>
		{@render children?.()}
	</button>
{/if}
