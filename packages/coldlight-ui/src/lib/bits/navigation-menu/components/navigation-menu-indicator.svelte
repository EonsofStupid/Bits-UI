<script lang="ts">
import { boxWith, mergeProps } from "svelte-toolbelt";
import Portal from "$lib/bits/utilities/portal/portal.svelte";
import PresenceLayer from "$lib/bits/utilities/presence-layer/presence-layer.svelte";
import { createId } from "$lib/internal/create-id.js";
import { NavigationMenuIndicatorState } from "../navigation-menu.svelte.js";
import type { NavigationMenuIndicatorProps } from "../types.js";
import NavigationMenuIndicatorImpl from "./navigation-menu-indicator-impl.svelte";

const uid = $props.id();

let {
	id = createId(uid),
	ref = $bindable(null),
	children,
	child,
	forceMount = false,
	...restProps
}: NavigationMenuIndicatorProps = $props();

const indicatorState = NavigationMenuIndicatorState.create();
const mergedProps = $derived(mergeProps(restProps));
</script>

{#if indicatorState.context.indicatorTrackRef.current}
	<Portal to={indicatorState.context.indicatorTrackRef.current}>
		<PresenceLayer open={forceMount || indicatorState.isVisible} ref={boxWith(() => ref)}>
			{#snippet presence()}
				<NavigationMenuIndicatorImpl {...mergedProps} {children} {child} {id} bind:ref />
			{/snippet}
		</PresenceLayer>
	</Portal>
{/if}
