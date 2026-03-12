<script lang="ts">
import { boxWith } from "svelte-toolbelt";
import type { BitsConfigProps } from "$lib/bits/utilities/config/types.js";
import { useBitsConfig } from "../bits-config.js";

let { children, defaultPortalTo, defaultLocale }: BitsConfigProps = $props();

useBitsConfig({
	defaultPortalTo: boxWith(() => defaultPortalTo),
	defaultLocale: boxWith(() => defaultLocale),
});
</script>

{@render children?.()}
