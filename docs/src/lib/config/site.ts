import { defineSiteConfig } from "$lib/utils/use-site-config.svelte.js";

export const siteConfig = defineSiteConfig({
        name: "ColdLight UI",
        url: "https://coldlight.design",
        description:
                "Headless component primitives for Svelte — clean, foundational, and precisely crafted by ColdLight Design Studio.",
        ogImage: {
                url: "https://coldlight.design/og.png",
                height: "630",
                width: "1200",
        },
        author: "Jesse Hall",
        license: {
                name: "MIT",
                url: "https://github.com/coldlight-design/coldlight-ui/blob/main/LICENSE",
        },
        links: {
                x: "https://x.com/coldlightdesign",
                github: "https://github.com/coldlight-design/coldlight-ui",
        },
        keywords: [
                "Svelte",
                "SvelteKit",
                "Svelte Components",
                "Headless Svelte",
                "ColdLight",
                "Headless UI",
                "Design System",
                "Component Library",
        ],
});

export type SiteConfig = typeof siteConfig;
