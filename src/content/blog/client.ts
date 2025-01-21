import { GraphQLClient, gql } from "graphql-request";
import type { AllPostsData } from "./schema";

export const getClient = () => {
	return new GraphQLClient("https://gql.hashnode.com");
};

const myHashnodeURL = "thecomputerm.hashnode.dev";

export const getAllPosts = async () => {
	const client = getClient();

	const allPosts = await client.request<AllPostsData>(
		gql`
      query allPosts {
        publication(host: "${myHashnodeURL}") {
          id
          title
          posts(first: 20) {
            pageInfo{
              hasNextPage
              endCursor
            }
            edges {
              node {
                id
                title
                subtitle
                slug
                publishedAt
                readTimeInMinutes
                coverImage {
                  url
                }
                tags {
                  name
                }
              }
            }
          }
        }
      }
    `,
	);

	return allPosts;
};

export const getPostHTML = async (slug: string) => {
	const client = getClient();

	const data = await client.request<{
		publication: {
			post: {
				content: {
					html: string;
				};
			};
		};
	}>(
		gql`
      query postDetails($slug: String!) {
        publication(host: "${myHashnodeURL}") {
          post(slug: $slug) {
            content{
              html
            }
          }
        }
      }
    `,
		{ slug: slug },
	);

	return data.publication.post.content.html;
};
