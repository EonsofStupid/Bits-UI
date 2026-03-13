<script lang="ts">
import { boxWith } from "svelte-toolbelt";
import { Presence } from "./presence.svelte.js";
import type { PresenceLayerImplProps } from "./types.js";

let { open, forceMount, presence, ref }: PresenceLayerImplProps = $props();

const presenceState = new Presence({
	open: boxWith(() => open),
	ref,
});
</script>

{#if forceMount || open || presenceState.isPresent}
	{@render presence?.({ present: presenceState.isPresent })}
{/if}
