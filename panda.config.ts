import { defineConfig } from "@pandacss/dev";

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
					normal: { value: "2px" },
				},
				lineHeights: {
					normal: { value: "1.2rem" },
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
	globalCss: {
		":root": {
			fontWeight: "normal",
			fontSize: "14px",
			sm: {
				fontSize: "16px",
			},
		},
		html: {
			backgroundColor: "bg.default",
			color: "fg.default",
		},
		h1: {
			fontSize: "1.5rem",
			sm: {
				fontSize: "2rem",
			}
		}
	},
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
