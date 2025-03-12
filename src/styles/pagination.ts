import { css, cx } from "styled-system/css";
import { buttonStyles } from "./button";

export const paginationStyles = {
	root: css({
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: "4",
	}),
	trigger: buttonStyles({ icon: true }),
	item: buttonStyles({ variant: "outline", icon: true }),
};
