import { createThemeContract, createTheme } from "@vanilla-extract/css";

export const palette = createThemeContract({
  background: null,
  foreground: null,
  surface: null,
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

// Old theme

// export const dark = createTheme(palette, {
//   background: "#1E1E1E",
//   foreground: "#ABB2BF",
//   selection: "#ABB2BF88",
//   black: "#282C34",
//   blue: "#61AFEF",
//   cyan: "#56B6C2",
//   green: "#98C379",
//   purple: "#C678DD",
//   red: "#E06C75",
//   yellow: "#E5C07B",
//   white: "#C8CCD4",
// });

// export const light = createTheme(palette, {
//   background: "#F3F4F5",
//   foreground: "#565E65",
//   selection: "#565E6588",
//   black: "#1C2023",
//   blue: "#0037DA",
//   cyan: "#3A96DD",
//   green: "#95C7AE",
//   purple: "#AE95C7",
//   red: "#C795AE",
//   yellow: "#C7AE95",
//   white: "#F3F4F5",
// });

export const dark = createTheme(palette, {
  "background": "#212121",
  "foreground": "#DEDEDE",
  "selection": "#EEFFFF88",
  surface: "#2F2F2F",
  "black": "#212121",
  "blue": "#82AAFF",
  "cyan": "#89DDFF",
  "green": "#C3E88D",
  "purple": "#C792EA",
  "red": "#F07178",
  "white": "#EEFFFF",
  "yellow": "#FFCB6B"
});

export const light = createTheme(palette, {
  "background": "#FFFFFF",
  "foreground": "#4C4A4E",
  "selection": "#4C4A4E55",
  surface: "#2F2F2F",
  "black": "#FFFFFF",
  "blue": "#775DFF",
  "cyan": "#149BDA",
  "green": "#17AD98",
  "purple": "#AA17E6",
  "red": "#D8137F",
  "white": "#6C696E",
  "yellow": "#DC8A0E"
})