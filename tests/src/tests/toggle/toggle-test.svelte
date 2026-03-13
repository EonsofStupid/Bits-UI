<script lang="ts">
import type { Toggle, WithoutChildrenOrChild } from "@coldlight/ui";

let { pressed = false, ...restProps }: WithoutChildrenOrChild<Toggle.RootProps> = $props();
</script>

<main>
	<button data-testid="binding" onclick={() => (pressed = !pressed)}>{pressed}</button>
	<Toggle.Root bind:pressed aria-label="toggle" data-testid="root" {...restProps}>a</Toggle.Root>
</main>
