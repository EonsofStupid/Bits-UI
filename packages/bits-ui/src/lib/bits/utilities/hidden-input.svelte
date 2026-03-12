<script lang="ts">
import type { HTMLInputAttributes } from "svelte/elements";
import { mergeProps, srOnlyStylesString } from "svelte-toolbelt";

let { value = $bindable(), ...restProps }: HTMLInputAttributes = $props();

const mergedProps = $derived(
	mergeProps(restProps, {
		"aria-hidden": "true",
		tabindex: -1,
		style: srOnlyStylesString,
	})
);
</script>

{#if mergedProps.type === "checkbox"}
	<input {...mergedProps} {value} />
{:else}
	<input bind:value {...mergedProps} />
{/if}
