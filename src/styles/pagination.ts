import { css } from "styled-system/css";
import { token } from "styled-system/tokens";
import { buttonStyles } from "./button";

export const paginationStyles = {
	root: css({
		display: "flex",
		justifyContent: "center",
		alignItems: "stretch",
		gap: "6",
	}),
	trigger: buttonStyles({ icon: true }),
	item: css({
		cursor: "pointer",
		fontVariantNumeric: "tabular-nums",
		backgroundColor: "bg.canvas",
		px: "2",
		fontSize: "lg",
		"&[data-selected]": {
			textDecoration: "underline",
			textDecorationThickness: token.var("borderWidths.normal"),
			backgroundColor: "fg.default",
			color: "bg.canvas",
		},
	}),
};
