import { createThemeContract, createTheme } from "@vanilla-extract/css";

export const palette = createThemeContract({
  background: null,
  foreground: null,
  selection: null,
  black: null,
  blue: null,
  cyan: null,
  green: null,
  purple: null,
  red: null,
  yellow: null,
  white: null,
});

export const dark = createTheme(palette, {
  background: "#1E1E1E",
  foreground: "#ABB2BF",
  selection: "#ABB2BF88",
  black: "#282C34",
  blue: "#61AFEF",
  cyan: "#56B6C2",
  green: "#98C379",
  purple: "#C678DD",
  red: "#E06C75",
  yellow: "#E5C07B",
  white: "#C8CCD4",
});

export const light = createTheme(palette, {
  background: "#F3F4F5",
  foreground: "#565E65",
  selection: "#00000088",
  black: "#1C2023",
  blue: "#0037DA",
  cyan: "#3A96DD",
  green: "#95C7AE",
  purple: "#AE95C7",
  red: "#C795AE",
  yellow: "#C7AE95",
  white: "#F3F4F5",
});
