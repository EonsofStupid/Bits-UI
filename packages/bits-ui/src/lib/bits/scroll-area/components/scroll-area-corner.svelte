<script lang="ts">
import { createId } from "$lib/internal/create-id.js";
import { ScrollAreaRootContext } from "../scroll-area.svelte.js";
import type { ScrollAreaCornerProps } from "../types.js";
import ScrollAreaCornerImpl from "./scroll-area-corner-impl.svelte";

const uid = $props.id();

let { ref = $bindable(null), id = createId(uid), ...restProps }: ScrollAreaCornerProps = $props();

const scrollAreaState = ScrollAreaRootContext.get();

const hasBothScrollbarsVisible = $derived(
	Boolean(scrollAreaState.scrollbarXNode && scrollAreaState.scrollbarYNode)
);
const hasCorner = $derived(
	scrollAreaState.opts.type.current !== "scroll" && hasBothScrollbarsVisible
);
</script>

{#if hasCorner}
	<ScrollAreaCornerImpl {...restProps} {id} bind:ref />
{/if}
