<script lang="ts">
import HiddenInput from "$lib/bits/utilities/hidden-input.svelte";
import { TimeFieldHiddenInputState } from "../time-field.svelte.js";

const hiddenInputState = TimeFieldHiddenInputState.create();
</script>

{#if hiddenInputState.shouldRender}
	<HiddenInput {...hiddenInputState.props} />
{/if}
