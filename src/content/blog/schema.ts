import { z } from "astro/zod";

export const PostSchema = z.object({
	id: z.string(),
	author: z.object({
		name: z.string(),
		profilePicture: z.string(),
	}),
	publishedAt: z.string(),
	title: z.string(),
	subtitle: z.string(),
	brief: z.string(),
	slug: z.string(),
	readTimeInMinutes: z.number(),
	content: z.object({
		html: z.string(),
    markdown: z.string(),
	}),
	tags: z.array(
		z.object({
			name: z.string(),
			slug: z.string(),
		}),
	),
	coverImage: z.object({
		url: z.string(),
	}),
});

export const AllPostsDataSchema = z.object({
	id: z.string(),
	publication: z.object({
		title: z.string(),
		posts: z.object({
			pageInfo: z.object({
				hasNextPage: z.boolean(),
				endCursor: z.string(),
			}),
			edges: z.array(
				z.object({
					node: PostSchema,
				}),
			),
		}),
	}),
});

export const PostDataSchema = z.object({
	id: z.string(),
	publication: z.object({
		title: z.string(),
		post: PostSchema,
	}),
});

export type Post = z.infer<typeof PostSchema>;
export type AllPostsData = z.infer<typeof AllPostsDataSchema>;
export type PostData = z.infer<typeof PostDataSchema>;
