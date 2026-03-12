<script lang="ts">
import { boxWith } from "svelte-toolbelt";
import { DialogRootState } from "$lib/bits/dialog/dialog.svelte.js";
import { noop } from "$lib/internal/noop.js";
import type { AlertDialogRootProps } from "../types.js";

let {
	open = $bindable(false),
	onOpenChange = noop,
	onOpenChangeComplete = noop,
	children,
}: AlertDialogRootProps = $props();

DialogRootState.create({
	variant: boxWith(() => "alert-dialog"),
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

{@render children?.()}
