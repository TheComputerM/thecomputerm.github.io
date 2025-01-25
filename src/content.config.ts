import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { hashnodeLoader } from "./content/blog/loader";

const pages = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/pages" }),
	schema: z.object({
		title: z.string(),
	}),
});

const blog = defineCollection({
	loader: hashnodeLoader(),
});

const projects = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/projects" }),
	schema: z.object({
		name: z.string(),
		repo: z.string(),
		homepage: z.string().optional(),
	}),
});

export const collections = { pages, blog, projects };
