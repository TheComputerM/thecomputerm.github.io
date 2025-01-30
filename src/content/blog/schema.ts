import { z } from "astro/zod";

export const PostSchema = z.object({
	id: z.string(),
	title: z.string(),
	subtitle: z.string(),
	brief: z.string(),
	slug: z.string(),
	publishedAt: z.string(),
	readTimeInMinutes: z.number(),
	tags: z.array(
		z.object({
			name: z.string(),
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

export type Post = z.infer<typeof PostSchema>;
export type AllPostsData = z.infer<typeof AllPostsDataSchema>;
