<script lang="ts">
import type { HTMLButtonAttributes } from "svelte/elements";
import { cn } from "$lib/utils/styles.js";
import { buttonVariants, type Size, type Variant } from "./index.js";

let {
	class: className,
	variant = "default",
	size = "default",
	children,
	...restProps
}: HTMLButtonAttributes & { variant?: Variant; size?: Size } = $props();
</script>

<button class={cn(buttonVariants({ variant, size }), className)} {...restProps}>
	{@render children?.()}
</button>
