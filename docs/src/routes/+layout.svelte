<script lang="ts">
import { ModeWatcher } from "mode-watcher";
import { Toaster } from "svelte-sonner";
import Metadata from "$lib/components/metadata.svelte";
import "$lib/styles/app.css";
import { siteConfig } from "$lib/config/site.js";
import { useSiteConfig } from "$lib/utils/use-site-config.svelte.js";

let { children } = $props();

useSiteConfig(() => siteConfig);
</script>

<ModeWatcher />
<Metadata />
<Toaster position="top-right" />

{@render children()}
