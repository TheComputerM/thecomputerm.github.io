import { defineConfig } from "@pandacss/dev";
import monospaceStyles from "monospace.styles";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx,astro}"],

	// Files to exclude
	exclude: [],

	presets: ["@pandacss/preset-panda"],

	// Useful for theme customization
	theme: {
		extend: {
			tokens: {
				borderWidths: {
					base: { value: "2px", description: "Base border width for theme" },
				},
				lineHeights: {
					base: { value: "1.2rem", description: "Base line height for theme" },
				},
				fontWeights: {
					normal: { value: "500" },
					medium: { value: "600" },
					bold: { value: "800" },
				},
			},
			semanticTokens: {
				colors: {
					bg: {
						default: {
							value: {
								base: "#fff",
								_osDark: "#000",
							},
						},
						canvas: {
							value: {
								base: "#eee",
								_osDark: "#111",
							},
						},
					},
					fg: {
						default: {
							value: {
								base: "#000",
								_osDark: "#fff",
							},
						},
						canvas: {
							value: {
								base: "#666",
								_osDark: "#aaa",
							},
						},
					},
				},
			},
		},
	},
	globalCss: monospaceStyles,
	globalVars: {
		"--global-font-body": "JetBrains Mono Variable, monospace",
		"--global-font-mono": "JetBrains Mono Variable, monospace",
	},
	hash: {
		cssVar: false,
		className: false,
	},

	// The output directory for your css system
	outdir: "styled-system",
	jsxFramework: "solid",
});
