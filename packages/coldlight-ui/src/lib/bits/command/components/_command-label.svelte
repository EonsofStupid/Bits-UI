<script lang="ts">
import { boxWith, mergeProps } from "svelte-toolbelt";
import { createId } from "$lib/internal/create-id.js";
import type { WithChildren } from "$lib/internal/types.js";
import type { BitsPrimitiveLabelAttributes, WithElementRef } from "$lib/shared/index.js";
import { CommandLabelState } from "../command.svelte.js";

const uid = $props.id();
let {
	id = createId(uid),
	ref = $bindable(null),
	children,
	...restProps
}: WithChildren<WithElementRef<BitsPrimitiveLabelAttributes>> = $props();

const labelState = CommandLabelState.create({
	id: boxWith(() => id),
	ref: boxWith(
		() => ref,
		(v) => (ref = v)
	),
});

const mergedProps = $derived(mergeProps(restProps, labelState.props));
</script>

<label {...mergedProps}>
	{@render children?.()}
</label>
