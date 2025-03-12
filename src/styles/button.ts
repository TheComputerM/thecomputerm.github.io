import { cva } from "styled-system/css";

export const buttonStyles = cva({
	base: {
		alignItems: "center",
		appearance: "none",
		cursor: "pointer",
		display: "inline-flex",
		fontWeight: "semibold",
		isolation: "isolate",
		minWidth: "0",
		justifyContent: "center",
		outline: "none",
		position: "relative",
		transitionDuration: "normal",
		transitionProperty: "background, border-color, color, box-shadow",
		transitionTimingFunction: "default",
		userSelect: "none",
		verticalAlign: "middle",
		whiteSpace: "nowrap",
		_hidden: {
			display: "none",
		},
		"& :where(svg)": {
			fontSize: "1.1em",
			width: "1.1em",
			height: "1.1em",
		},
	},
	variants: {
		variant: {
			solid: {
				backgroundColor: "fg.default",
				color: "bg.default",
				_hover: {
					backgroundColor: "fg.canvas",
				},
			},
			outline: {
				borderWidth: "base",
				borderColor: "fg.default",
				_hover: {
					borderColor: "fg.canvas",
				},
				_selected: {
					backgroundColor: "fg.default",
					color: "bg.canvas",
				},
			},
		},
		size: {
			sm: {
				h: "8",
				minW: "8",
				textStyle: "sm",
				px: "3",
				gap: "2",
			},
			md: {
				h: "9",
				minW: "9",
				px: "3.5",
				gap: "2",
			},
			lg: {
				h: "10",
				minW: "10",
				textStyle: "lg",
				px: "4",
				gap: "2",
			},
		},
		icon: {
			true: {
				px: 0,
			},
		},
	},
	defaultVariants: {
		variant: "solid",
		size: "md",
		icon: false,
	},
});
