// @ts-check
import { defineConfig, envField } from "astro/config";
import solidJs from "@astrojs/solid-js";
import Icons from "unplugin-icons/vite";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	output: "server",
	integrations: [solidJs()],

	markdown: {
		shikiConfig: {
			themes: {
				light: "github-light-high-contrast",
				dark: "github-dark-high-contrast",
			},
		},
	},

	vite: {
		plugins: [Icons({ compiler: "solid" })],
	},

	adapter: cloudflare({
		imageService: 'passthrough'
	}),
});
