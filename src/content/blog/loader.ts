import type { Loader, LoaderContext } from "astro/loaders";
import { getAllPosts } from "./client";
import { PostSchema } from "./schema";

export function hashnodeLoader(): Loader {
	return {
		name: "hashnode",
		load: async (context: LoaderContext) => {
			context.logger.info("Loading from Hashnode");
			const result = await getAllPosts();
			for (const post of result.publication.posts.edges) {
				context.store.set({ id: post.node.slug, data: post.node });
			}
			context.logger.info("Finished loading from Hashnode");
		},
		schema: () => PostSchema,
	};
}
