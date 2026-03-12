<script lang="ts">
import { mergeProps } from "svelte-toolbelt";
import { dateFieldAttrs } from "$lib/bits/date-field/date-field.svelte.js";
import PopoverTrigger from "$lib/bits/popover/components/popover-trigger.svelte";
import {
	handleSegmentNavigation,
	isSegmentNavigationKey,
} from "$lib/internal/date-time/field/segments.js";
import type { DatePickerTriggerProps } from "../types.js";

let { ref = $bindable(null), onkeydown, ...restProps }: DatePickerTriggerProps = $props();

function onKeydown(e: KeyboardEvent) {
	if (isSegmentNavigationKey(e.key)) {
		const currNode = e.currentTarget as HTMLElement;
		const dateFieldInputNode = currNode.closest(
			dateFieldAttrs.selector("input")
		) as HTMLElement;
		if (!dateFieldInputNode) return;
		handleSegmentNavigation(e, dateFieldInputNode);
	}
}

const mergedProps = $derived(mergeProps({ onkeydown }, { onkeydown: onKeydown }));
</script>

<PopoverTrigger {...restProps} bind:ref data-segment="trigger" {...mergedProps} />
