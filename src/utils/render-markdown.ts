import chalk from "chalk";
import { marked } from "marked";
import { markedTerminal } from "marked-terminal";

marked.use(
	// @ts-ignore
	markedTerminal({
		href: chalk.red,
		reflowText: true,
	}),
);

export const renderMD = (input: string) => {
	return marked(input) as string;
};
