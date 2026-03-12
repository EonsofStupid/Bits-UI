<script lang="ts">
import HiddenInput from "$lib/bits/utilities/hidden-input.svelte";
import { DateFieldHiddenInputState } from "../date-field.svelte.js";

const hiddenInputState = DateFieldHiddenInputState.create();
</script>

{#if hiddenInputState.shouldRender}
	<HiddenInput {...hiddenInputState.props} />
{/if}
