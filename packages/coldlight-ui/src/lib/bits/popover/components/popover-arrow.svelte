<script lang="ts">
import FloatingLayerArrow from "$lib/bits/utilities/floating-layer/components/floating-layer-arrow.svelte";
import type { PopoverArrowProps } from "../types.js";

let { ref = $bindable(null), ...restProps }: PopoverArrowProps = $props();
</script>

<FloatingLayerArrow bind:ref {...restProps} data-popover-arrow="" />
