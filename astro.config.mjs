// @ts-check
import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import Icons from "unplugin-icons/vite";

import vercel from "@astrojs/vercel";

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

	adapter: vercel(),
});
