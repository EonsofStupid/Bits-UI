<script lang="ts">
import { BodyScrollLock } from "$lib/internal/body-scroll-lock.svelte.js";
import type { ScrollLockProps } from "./index.js";

let { preventScroll = true, restoreScrollDelay = null }: ScrollLockProps = $props();

if (preventScroll) {
	new BodyScrollLock(preventScroll, () => restoreScrollDelay);
}
</script>
