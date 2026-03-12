<script lang="ts">
import { boxWith } from "svelte-toolbelt";
import Menu from "$lib/bits/menu/components/menu.svelte";
import { createId } from "$lib/internal/create-id.js";
import { noop } from "$lib/internal/noop.js";
import { MenubarMenuState } from "../menubar.svelte.js";
import type { MenubarMenuProps } from "../types.js";

const uid = $props.id();

let { value = createId(uid), onOpenChange = noop, ...restProps }: MenubarMenuProps = $props();

const menuState = MenubarMenuState.create({
	value: boxWith(() => value),
	onOpenChange: boxWith(() => onOpenChange),
});
</script>

<Menu
	open={menuState.open}
	onOpenChange={(open) => {
		if (!open) menuState.root.onMenuClose();
	}}
	dir={menuState.root.opts.dir.current}
	_internal_variant="menubar"
	{...restProps}
/>
