import { style } from "@vanilla-extract/css";
import { palette } from "../../styles/themes.css";

export const section = style({
  border: `2px solid ${palette.purple}`,
  borderRadius: '0.25rem',
  padding: '1rem',
  margin: '1rem'
})