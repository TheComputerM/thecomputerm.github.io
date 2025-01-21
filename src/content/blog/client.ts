import { GraphQLClient, gql } from "graphql-request";
import type { AllPostsData, PostData } from "./schema";

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
                author{
                  name
                  profilePicture
                }
                title
                subtitle
                brief
                slug
                coverImage {
                  url
                }
                tags {
                  name
                  slug
                }
                publishedAt
                readTimeInMinutes
              }
            }
          }
        }
      }
    `,
	);

	return allPosts;
};

export const getPost = async (slug: string) => {
	const client = getClient();

	const data = await client.request<PostData>(
		gql`
      query postDetails($slug: String!) {
        publication(host: "${myHashnodeURL}") {
          id
          post(slug: $slug) {
            id
            author{
              name
              profilePicture
            }
            publishedAt
            title
            subtitle
            readTimeInMinutes
            content{
              html
              markdown
            }
            tags {
              name
              slug
            }
            coverImage {
              url
            }
          }
        }
      }
    `,
		{ slug: slug },
	);

	return data.publication.post;
};
