<script lang="ts">
import type { Meter } from "@coldlight/ui";

let { value = 0, ...restProps }: Meter.RootProps = $props();
</script>

<main>
	<Meter.Root aria-label="battery remaining" data-testid="root" {value} {...restProps} />
	<button data-testid="binding" onclick={() => (value = 50)}>{value}</button>
</main>
