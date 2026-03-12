<script lang="ts">
import { Command } from "bits-ui";
import type { Snippet } from "svelte";

let {
	shortcut = "",
	onSelect = () => {},
	value,
	children,
}: {
	shortcut?: string;
	onSelect?: (() => void) | undefined;
	value: string;
	children: Snippet;
} = $props();
</script>

<Command.Item {onSelect} {value}>
	{@render children?.()}
	{#if shortcut}
		<div data-command-vercel-shortcuts="">
			{#each shortcut.split(" ") as key (key)}
				<kbd>{key}</kbd>
			{/each}
		</div>
	{/if}
</Command.Item>
