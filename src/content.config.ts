import { defineCollection, z } from "astro:content";
import { file, type LoaderContext } from "astro/loaders";
import hashnodeLoader from "astro-loader-hashnode";

const projects = defineCollection({
	loader: {
		name: "projects-loader",
		async load(context: LoaderContext) {
			await file("src/content/projects.json").load(context);
			for (const id of context.store.keys()) {
				// biome-ignore lint/suspicious/noExplicitAny: need to modify object
				const project = context.store.get(id) as any;
				project.rendered = await context.renderMarkdown(project.data.body);
				context.store.set(project);
			}
		},
	},
	schema: z.object({
		id: z.string(),
		body: z.string(),
		source: z.discriminatedUnion("type", [
			z.object({ type: z.literal("github"), repo: z.string() }),
			z.object({
				type: z.literal("raw"),
				links: z.array(z.string().url()),
				tags: z.array(z.string()),
			}),
		]),
	}),
});

const blog = defineCollection({
	loader: hashnodeLoader({
		publicationHost: "thecomputerm.hashnode.dev",
	}),
});

export const collections = { projects, blog };
