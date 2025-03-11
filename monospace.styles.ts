import { defineGlobalStyles } from "@pandacss/dev";

// adapted from https://github.com/owickstrom/the-monospace-web/blob/main/src/index.css
export default defineGlobalStyles({
	"*": {
		scrollbarColor: "token(colors.fg.default) transparent",
		scrollbarWidth: "thin",
	},
	":root": {
		fontOpticalSizing: "auto",
		fontStyle: "normal",
		fontVariantNumeric: "tabular-nums lining-nums",
		fontWeight: "normal",
		fontSize: "14px",
		sm: {
			fontSize: "16px",
		},
	},
	body: {
		lineHeight: "token(lineHeights.base)",
	},
	html: {
		backgroundColor: "bg.default",
		color: "fg.default",
	},
	h1: {
		textTransform: "uppercase",
		marginBottom: "calc(2 * token(lineHeights.base))",
		fontSize: "1.5rem",
		lineHeight: "calc(1.5 * token(lineHeights.base))",
		sm: {
			fontSize: "2rem",
			lineHeight: "calc(2 * token(lineHeights.base))",
		},
	},
	h2: {
		fontSize: "1rem",
		textTransform: "uppercase",
	},
	hr: {
		position: "relative",
		display: "block",
		height: "token(lineHeights.base)",
		margin: "calc(token(lineHeights.base) * 1.5) 0",
		border: "none",
		color: "token(colors.fg.default)",
		"&:after": {
			display: "block",
			content: '""',
			position: "absolute",
			top: "calc(token(lineHeights.base) / 2 - token(borderWidths.base))",
			left: 0,
			width: "100%",
			borderTop:
				"calc(token(borderWidths.base) * 3) double token(colors.fg.default)",
			height: 0,
		},
	},
  a: {
    backgroundColor: "bg.canvas",
    textDecoration: "underline",
    textDecorationThickness: "token(borderWidths.base)",
    _hover: {
      color: "bg.canvas",
      backgroundColor: "fg.default",
    },
    '&:link,&:visited': {
      color: "fg.default",
    },
    '&::after,&::before': {
      display: 'inline'
    },
  },
  strong: {
    fontWeight: "bold",
  },
  em: {
    fontStyle: "italic"
  }
});
