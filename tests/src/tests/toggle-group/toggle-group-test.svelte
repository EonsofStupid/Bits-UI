<script lang="ts" module>
import type { SingleToggleGroupRootProps, WithoutChildrenOrChild } from "@coldlight/ui";
import { ToggleGroup } from "@coldlight/ui";
export type Item = {
	value: string;
	disabled?: boolean;
};

export type SingleToggleGroupTestProps = WithoutChildrenOrChild<SingleToggleGroupRootProps> & {
	items: Item[];
};
</script>

<script lang="ts">
	let { value = "", items, ...restProps }: SingleToggleGroupTestProps = $props();
</script>

<main>
	<button data-testid="binding" aria-label="binding" onclick={() => (value = "4")}>
		{value}
	</button>
	<ToggleGroup.Root data-testid="root" bind:value {...restProps} type="single">
		{#each items as { value, disabled } (value)}
			<ToggleGroup.Item {value} {disabled} data-testid="item-{value}">
				{value}
			</ToggleGroup.Item>
		{/each}
	</ToggleGroup.Root>
</main>
