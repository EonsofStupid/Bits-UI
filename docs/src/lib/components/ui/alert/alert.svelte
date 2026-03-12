<script lang="ts">
import type { BitsPrimitiveDivAttributes, WithChildren } from "bits-ui";
import { cn } from "$lib/utils/styles.js";
import { alertVariants, type Variant } from "./index.js";

let {
	variant = "note",
	class: className,
	children,
	...restProps
}: WithChildren<BitsPrimitiveDivAttributes> & {
	variant?: Variant;
} = $props();
</script>

<div class={cn(alertVariants({ variant }), className)} {...restProps} role="alert">
	{@render children?.()}
</div>
