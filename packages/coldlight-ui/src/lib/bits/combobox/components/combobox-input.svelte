<script lang="ts">
import { boxWith, mergeProps } from "svelte-toolbelt";
import { SelectInputState } from "$lib/bits/select/select.svelte.js";
import { FloatingLayer } from "$lib/bits/utilities/floating-layer/index.js";
import { useId } from "$lib/internal/use-id.js";
import type { ComboboxInputProps } from "../types.js";

let {
	id = useId(),
	ref = $bindable(null),
	child,
	defaultValue,
	clearOnDeselect = false,
	...restProps
}: ComboboxInputProps = $props();

const inputState = SelectInputState.create({
	id: boxWith(() => id),
	ref: boxWith(
		() => ref,
		(v) => (ref = v)
	),
	clearOnDeselect: boxWith(() => clearOnDeselect),
});

if (defaultValue) {
	inputState.root.opts.inputValue.current = defaultValue;
}

const mergedProps = $derived(
	mergeProps(restProps, inputState.props, {
		value: inputState.root.opts.inputValue.current,
	})
);
</script>

<FloatingLayer.Anchor {id} ref={inputState.opts.ref}>
	{#if child}
		{@render child({ props: mergedProps })}
	{:else}
		<input {...mergedProps} />
	{/if}
</FloatingLayer.Anchor>
