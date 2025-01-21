import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/pages" }),
	schema: z.object({
		title: z.string(),
	}),
});

export const collections = { pages };
