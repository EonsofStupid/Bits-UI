<script lang="ts">
import HiddenInput from "$lib/bits/utilities/hidden-input.svelte";
import { CheckboxInputState } from "../checkbox.svelte.js";

const inputState = CheckboxInputState.create();
</script>

{#if inputState.shouldRender}
	<HiddenInput {...inputState.props} />
{/if}
