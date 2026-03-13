<script lang="ts">
import { boxWith } from "svelte-toolbelt";
import { FloatingLayer } from "$lib/bits/utilities/floating-layer/index.js";
import { noop } from "$lib/internal/noop.js";
import { LinkPreviewRootState } from "../link-preview.svelte.js";
import type { LinkPreviewRootProps } from "../types.js";

let {
	disabled = false,
	open = $bindable(false),
	onOpenChange = noop,
	onOpenChangeComplete = noop,
	openDelay = 700,
	closeDelay = 300,
	children,
}: LinkPreviewRootProps = $props();

LinkPreviewRootState.create({
	disabled: boxWith(() => disabled),
	open: boxWith(
		() => open,
		(v) => {
			open = v;
			onOpenChange(v);
		}
	),
	openDelay: boxWith(() => openDelay),
	closeDelay: boxWith(() => closeDelay),
	onOpenChangeComplete: boxWith(() => onOpenChangeComplete),
});
</script>

<FloatingLayer.Root>
	{@render children?.()}
</FloatingLayer.Root>
