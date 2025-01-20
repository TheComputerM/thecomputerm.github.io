import { defineConfig } from "@pandacss/dev";
import globalCss from "./monospace.styles";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx,astro}"],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		tokens: {
			fontWeights: {
				normal: { value: "500" },
				medium: { value: "600" },
				bold: { value: "800" },
			},
		},
		extend: {
			semanticTokens: {
				colors: {
					bg: {
						default: {
							value: {
								base: "#fff",
								_dark: "#000",
							},
						},
						canvas: {
							value: {
								base: "#eee",
								_dark: "#111",
							},
						},
					},
					fg: {
						default: {
							value: {
								base: "#000",
								_dark: "#fff",
							},
						},
						canvas: {
							value: {
								base: "#666",
								_dark: "#aaa",
							},
						},
					},
				},
			},
		},
	},
	globalCss,
	globalVars: {
		"--global-font-body": "JetBrains Mono Variable, monospace",
		"--global-font-mono": "JetBrains Mono Variable, monospace",
		"--line-height": "1.20rem",
		"--border-thickness": "2px",
	},

	// The output directory for your css system
	outdir: "styled-system",
	jsxFramework: "solid",
});
