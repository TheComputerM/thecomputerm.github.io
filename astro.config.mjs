// @ts-check
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
	integrations: [react()],

	vite: {
		plugins: [tailwindcss(), Icons({ compiler: "jsx", jsx: "react" })],
	},
});
