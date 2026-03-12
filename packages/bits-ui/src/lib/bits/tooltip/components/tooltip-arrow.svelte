<script lang="ts">
import FloatingLayerArrow from "$lib/bits/utilities/floating-layer/components/floating-layer-arrow.svelte";
import type { TooltipArrowProps } from "../types.js";

let { ref = $bindable(null), ...restProps }: TooltipArrowProps = $props();
</script>

<FloatingLayerArrow bind:ref {...restProps} />
