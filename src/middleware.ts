import { getEntry } from "astro:content";
import { defineMiddleware } from "astro:middleware";
import { Lipgloss, initLip } from "charsm";

const isLipgloss = await initLip();
if (!isLipgloss) {
	throw new Error("Failed to initialize lipgloss");
}
const lip = new Lipgloss();

const PLAIN_TEXT_AGENTS = [
	"curl",
	"httpie",
	"lwp-request",
	"wget",
	"python-requests",
	"python-httpx",
	"openbsd ftp",
	"powershell",
	"fetch",
	"aiohttp",
	"http_get",
	"xh",
	"nushell",
];

export const onRequest = defineMiddleware(async (context, next) => {
	const response = await next();
	if (
		PLAIN_TEXT_AGENTS.some((agent) =>
			context.request.headers.get("user-agent")?.includes(agent),
		)
	) {
		// TODO: return content based on url
		const entry = await getEntry("pages", "index");
		if (entry) {
			return new Response(lip.RenderMD(entry.body), {
				status: 200,
				headers: response.headers,
			});
		}
	}
	return response;
});
