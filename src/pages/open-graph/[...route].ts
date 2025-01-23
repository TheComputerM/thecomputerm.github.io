import { OGImageRoute } from "astro-og-canvas";

const pages = {
	blog: {
		title: "Blog",
		description: "The latest blog posts from Astro",
	},
};


export const { getStaticPaths, GET } = OGImageRoute({
	param: "route",
	pages: pages,
	getImageOptions(path, page) {
		console.log(path);
		return {
			title: page.title,
			description: page.description,
      fonts: ["https://cdn.jsdelivr.net/fontsource/fonts/ibm-plex-mono@latest/latin-500-normal.ttf"],
      font: {
        title: {
          families: ["IBM Plex Mono"],
        }
      }
		};
	},
});
