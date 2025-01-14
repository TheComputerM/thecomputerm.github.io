import { defineMiddleware } from "astro:middleware";

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

export const onRequest = defineMiddleware((context, next) => {
	// TODO: return content based on user agent
	return next();
});
