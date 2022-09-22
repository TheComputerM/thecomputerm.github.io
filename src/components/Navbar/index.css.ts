import { keyframes, style } from "@vanilla-extract/css";
import { palette } from "../../styles/themes.css";
import { responsive } from "../../styles/utils";

const blinking = keyframes({
  to: {
    visibility: "hidden",
  },
});

export const title = style({
  textDecoration: "none",
  color: palette.foreground,
  fontWeight: "bold",
  "::after": {
    // █ or _
    content: "█",
    color: palette.green,
    marginLeft: 2,
    animation: `${blinking} 2s steps(2, start) infinite`,
    textShadow: "0 0 5px currentColor",
  },
});

export const hideWhenSmall = style(
  responsive({
    '< mobile': {
      display: "none",
    },
  })
);

export const navbar = style({
  padding: "0.375rem",
  margin: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: `2px solid ${palette.purple}`,
  borderRadius: "0.25rem",
});

export const navitems = style({
  display: "flex",
  gap: "1rem",
});
