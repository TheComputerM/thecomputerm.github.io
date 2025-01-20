import { defineGlobalStyles } from "@pandacss/dev";

// inspired from https://owickstrom.github.io/the-monospace-web/ and https://www.sacred.computer/
export default defineGlobalStyles({
	":root": {
		fontWeight: "normal",
		fontSize: "14px",
    sm: {
      fontSize: "16px",
    }
	},
	html: {
		backgroundColor: "bg.default",
		color: "fg.default",
	},
});
