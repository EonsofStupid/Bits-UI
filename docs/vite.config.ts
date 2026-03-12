import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import devtoolsJson from "vite-plugin-devtools-json";
// import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), devtoolsJson()],
	assetsInclude: ["**/*.md"],
	server: {
		host: "0.0.0.0",
		port: 5000,
		allowedHosts: true,
		fs: {
			strict: false,
		},
	},
	optimizeDeps: {
		exclude: ["bits-ui"],
	},
	resolve: { noExternal: true },
});
