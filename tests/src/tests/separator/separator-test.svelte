<script lang="ts">
import type { Separator } from "@coldlight/ui";

let { ...restProps }: Separator.RootProps = $props();
</script>

<main>
	<Separator.Root data-testid="root" {...restProps} />
</main>
