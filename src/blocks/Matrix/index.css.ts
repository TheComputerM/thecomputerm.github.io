import { globalStyle, style } from "@vanilla-extract/css";
import { palette } from "../../styles/themes.css";

export const container = style({
  position: "relative",
  overflow: 'hidden',
  ":after": {
    content: " ",
    display: "block",
    position: "absolute",
    inset: 0,
    zIndex: 2,
    pointerEvents: "none",
    background: `linear-gradient(to bottom, #1e1e1e, transparent 20%, 90%, #1e1e1e)`,
  },
});

export const text = style({
  position: 'absolute',
  inset: 0,
  display: 'grid',
  placeContent: 'center',
  color: palette.purple,
  zIndex: 10,
  mixBlendMode: 'hue',
})

globalStyle(`${text} h1`, {
  fontSize: 'max(180px, 35vw)',
  fontWeight: 'bolder',
  lineHeight: 1
})

export const canvas = style({
  mixBlendMode: "screen",
});
