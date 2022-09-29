import { palette } from "./themes.css";
import { globalStyle } from "@vanilla-extract/css";

globalStyle("body", {
  backgroundColor: palette.background,
  color: palette.foreground,
  fontFamily: "'IBM Plex Mono', monospace",
  margin: 0,
  lineHeight: 1.5,
  fontSize: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
});

globalStyle("::selection", {
  backgroundColor: palette.selection,
});

globalStyle("h1", {
  fontSize: "clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)",
});

globalStyle("h2", {
  fontSize: "clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)",
});

globalStyle("h3", {
  fontSize: "clamp(1.56rem, 1vw + 1.31rem, 2.11rem)",
});

globalStyle("h4", {
  fontSize: "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
});

globalStyle("h5", {
  fontSize: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
});

globalStyle("h6", {
  fontSize: "1rem",
});

globalStyle(":where(h1,h2,h3,h4,h5,h6)", {
  marginBlock: 0,
});

globalStyle("small", {
  fontSize: "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
});

globalStyle("hr", {
  border: 0,
  borderBottom: `1px dashed ${palette.foreground}`,
  margin: '1.5rem 0',
  boxSizing: 'content-box',
  height: 0
})

globalStyle('ul', {
  listStyleType: "'- '",
  paddingInlineStart: '1.5rem'
})

globalStyle('table', {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '1rem'
});

globalStyle('table :where(td,th)', {
  border: '1px solid currentColor',
  padding: '5px'
})

globalStyle('table>caption', {
  marginBottom: '1em'
})