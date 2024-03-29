import { globalStyle, keyframes, style } from "@vanilla-extract/css";
import { palette, dark as darkTheme } from "../../../styles/themes.css";
import { responsive } from "../../../styles/utils";

export const container = style({
  position: "relative",
  overflow: "hidden",
  height: "calc(100vh - 100px)",
  ":after": {
    background: `linear-gradient(to bottom, ${palette.background}, transparent 20%, 90%, ${palette.background})`,
  },
  ":before": {
    background:
      "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
    backgroundSize: "100% 2px, 3px 100%",
  },
  selectors: {
    "&:after, &:before": {
      content: " ",
      display: "block",
      position: "absolute",
      inset: 0,
      zIndex: 2,
      pointerEvents: "none",
    },
  },
});

const textFadeAnimation = keyframes({
  "0%": {
    mixBlendMode: "hue",
    opacity: 1,
  },
  "55%": {
    mixBlendMode: "hue",
    opacity: 1,
  },
  "56%": {
    mixBlendMode: "hue",
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

export const textContainer = style([{
  position: "absolute",
  inset: 0,
  display: "grid",
  placeContent: "center",
  zIndex: 10,
  mixBlendMode: "color-burn",
  selectors: {
    [`${darkTheme} &`]: {
      mixBlendMode: "color-dodge"
    }
  }
}, responsive({
  '> mobile': {
    animationName: textFadeAnimation,
    animationDuration: "2.5s",
    animationTimingFunction: 'ease-in-out'
  }
})]);

globalStyle(`${textContainer} h1`, {
  fontSize: "max(180px, 35vw)",
  fontWeight: "bolder",
  lineHeight: 1,
  color: palette.purple,
  textShadow: `3px 0 6px ${palette.red}, -3px 0 6px ${palette.blue}`,
  userSelect: "none",
});

export const canvas = style({
  mixBlendMode: "difference",
  selectors: {
    [`${darkTheme} &`]: {
      mixBlendMode: "screen"
    }
  }
});
