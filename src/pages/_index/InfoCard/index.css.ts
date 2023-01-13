import { globalStyle, style } from "@vanilla-extract/css";
import { palette } from "../../../styles/themes.css";

export const card = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100px',
    padding: '1.25rem',
    borderRadius: '0.75rem',
    backgroundColor: palette.surface,
})

globalStyle(`${card} > img`, {
    width: "100%",
    filter: "grayscale(100%)",
    transition: "filter 250ms ease-in",
})


globalStyle(`${card}:is(:focus, :hover) > img`, {
    filter: "grayscale(0%)"
})

export const tooltip = style({
    display: 'none',
    position: 'absolute',
    maxWidth: '200px',
    backgroundColor: '#000',
    border: `2px solid ${palette.cyan}`,
    borderRadius: '0.25rem',
    padding: '0.5rem',
    zIndex: 100
})