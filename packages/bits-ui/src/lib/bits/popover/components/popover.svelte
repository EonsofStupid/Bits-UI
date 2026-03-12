<script lang="ts">
import { boxWith } from "svelte-toolbelt";
import FloatingLayer from "$lib/bits/utilities/floating-layer/components/floating-layer.svelte";
import { noop } from "$lib/internal/noop.js";
import { PopoverRootState } from "../popover.svelte.js";
import type { PopoverRootProps } from "../types.js";

let {
	open = $bindable(false),
	onOpenChange = noop,
	onOpenChangeComplete = noop,
	children,
}: PopoverRootProps = $props();

PopoverRootState.create({
	open: boxWith(
		() => open,
		(v) => {
			open = v;
			onOpenChange(v);
		}
	),
	onOpenChangeComplete: boxWith(() => onOpenChangeComplete),
});
</script>

<FloatingLayer>
	{@render children?.()}
</FloatingLayer>
