import { defineMiddleware } from "astro:middleware";
import { initLip, Lipgloss } from "charsm";

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
	// TODO: return content based on user agent
	if (context.request.headers.get("user-agent")?.includes("curl")) {
		return new Response(lip.RenderMD("# Hello"), {
			status: 200,
		});
	}
	return next();
});
