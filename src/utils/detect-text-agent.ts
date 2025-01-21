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

/**
 * Checks if the request is made by a text-based agent, like curl or wget.
 */
export function isTextAgent(request: Request): boolean {
	return PLAIN_TEXT_AGENTS.some((agent) =>
		request.headers.get("user-agent")?.includes(agent),
	);
}
