<script lang="ts">
import { mergeProps } from "svelte-toolbelt";
import FloatingLayerArrow from "$lib/bits/utilities/floating-layer/components/floating-layer-arrow.svelte";
import { MenuArrowState } from "../menu.svelte.js";
import type { MenuArrowProps } from "../types.js";

let { ref = $bindable(null), ...restProps }: MenuArrowProps = $props();

const arrowState = MenuArrowState.create();

const mergedProps = $derived(mergeProps(restProps, arrowState.props));
</script>

<FloatingLayerArrow bind:ref {...mergedProps} />
