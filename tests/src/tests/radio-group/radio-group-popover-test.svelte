<script lang="ts" module>
import type { RadioGroup } from "@coldlight/ui";
export type Item = {
	value: string;
	disabled: boolean;
};

export type RadioGroupTestProps = Omit<RadioGroup.RootProps, "child" | "children" | "asChild"> & {
	items: Item[];
};
</script>

<script lang="ts">
	import { Popover } from "@coldlight/ui";

	let { items, value = "", ...restProps }: RadioGroupTestProps = $props();
</script>

<main>
	<Popover.Root>
		<Popover.Trigger data-testid="trigger">open</Popover.Trigger>
		<Popover.Content data-testid="content">
			<RadioGroup.Root data-testid="root" bind:value {...restProps}>
				{#each items as { value, disabled } (value)}
					<RadioGroup.Item id={value} {value} {disabled} data-testid="{value}-item">
						{#snippet children({ checked })}
							<span data-testid="{value}-indicator"> {checked} </span>
							{value}
						{/snippet}
					</RadioGroup.Item>
					<label for={value} data-testid="{value}-label">
						Label for {value}
					</label>
				{/each}
			</RadioGroup.Root>
		</Popover.Content>
	</Popover.Root>
	<div data-testid="value">
		{value}
	</div>
</main>
