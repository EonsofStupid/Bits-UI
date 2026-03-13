<script lang="ts">
import { boxWith } from "svelte-toolbelt";
import FloatingLayer from "$lib/bits/utilities/floating-layer/components/floating-layer.svelte";
import { noop } from "$lib/internal/noop.js";
import { MenuSubmenuState } from "../menu.svelte.js";
import type { MenuSubProps } from "../types.js";

let {
	open = $bindable(false),
	onOpenChange = noop,
	onOpenChangeComplete = noop,
	children,
}: MenuSubProps = $props();

MenuSubmenuState.create({
	open: boxWith(
		() => open,
		(v) => {
			open = v;
			onOpenChange?.(v);
		}
	),
	onOpenChangeComplete: boxWith(() => onOpenChangeComplete),
});
</script>

<FloatingLayer>
	{@render children?.()}
</FloatingLayer>
