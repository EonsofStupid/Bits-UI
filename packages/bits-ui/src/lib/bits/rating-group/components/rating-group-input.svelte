<script lang="ts">
import HiddenInput from "$lib/bits/utilities/hidden-input.svelte";
import { RatingGroupHiddenInputState } from "../rating-group.svelte.js";

const inputState = RatingGroupHiddenInputState.create();
</script>

{#if inputState.shouldRender}
	<HiddenInput {...inputState.props} />
{/if}
