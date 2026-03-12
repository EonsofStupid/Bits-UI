<script lang="ts">
import type { HTMLInputAttributes } from "svelte/elements";
import { boxWith } from "svelte-toolbelt";
import HiddenInput from "$lib/bits/utilities/hidden-input.svelte";
import { SelectHiddenInputState } from "../select.svelte.js";

let { value = $bindable(), autocomplete }: { value?: string } & Omit<HTMLInputAttributes, "value"> =
	$props();

const hiddenInputState = SelectHiddenInputState.create({
	value: boxWith(() => value),
});
</script>

{#if hiddenInputState.shouldRender}
	<HiddenInput {...hiddenInputState.props} bind:value {autocomplete} />
{/if}
