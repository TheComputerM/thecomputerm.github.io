import { style } from "@vanilla-extract/css";
import { palette } from "../../styles/themes.css";

export const link = style({
  color: palette.cyan,
  textDecoration: "none",
  ":hover": {
    backgroundColor: palette.cyan,
    color: palette.background,
  },
});
