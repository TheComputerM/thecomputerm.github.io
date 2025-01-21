import { sva } from "styled-system/css";

export const tooltip = sva({
	slots: ["content"],
	base: {
		content: {
			backgroundColor: "fg.default",
			color: "bg.default",
			paddingX: "2",
			paddingY: "1",
			zIndex: "100",
			boxShadow: "2px 2px 0 0 var(--shadow-color)",
			boxShadowColor: "fg.canvas",
		},
	},
})();
