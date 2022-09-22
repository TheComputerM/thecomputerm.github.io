import { globalStyle, style } from "@vanilla-extract/css";
import { palette } from "../../styles/themes.css";

export const container = style({
  position: "relative",
  overflow: 'hidden',
  ":after": {
    background: `linear-gradient(to bottom, #1e1e1e, transparent 20%, 90%, #1e1e1e)`,
  },
  ":before": {
    background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
    backgroundSize: '100% 2px, 3px 100%'
  },
  selectors: {
    '&:after, &:before': {
      content: " ",
      display: "block",
      position: "absolute",
      inset: 0,
      zIndex: 2,
      pointerEvents: "none",
    }
  }
});

export const text = style({
  position: 'absolute',
  inset: 0,
  display: 'grid',
  placeContent: 'center',
  zIndex: 10,
  mixBlendMode: 'color-dodge',
})

globalStyle(`${text} h1`, {
  fontSize: 'max(180px, 35vw)',
  fontWeight: 'bolder',
  lineHeight: 1,
  color: palette.purple,
  textShadow: `3px 0 6px ${palette.red}, -3px 0 6px ${palette.blue}`,
  userSelect: 'none'
})

export const canvas = style({
  mixBlendMode: "screen",
});
