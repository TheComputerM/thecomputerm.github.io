// @ts-check
import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import Icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
	output: "static",
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
});
