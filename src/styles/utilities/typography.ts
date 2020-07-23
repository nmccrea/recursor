import { css } from "styled-components"

/**
 * The full URL for fetching the application's Google Fonts.
 */
const googleFontsUrl = [
  "https://fonts.googleapis.com/css2",
  "?family=Audiowide",
  "&family=Roboto+Mono:wght@500",
  "&display=swap",
].join("")

/**
 * Applies the font-family for headings.
 */
const fontFamilyHeading = css`
  font-family: "Audiowide", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`

/**
 * Applies a sans-serif font family.
 */
const fontFamilySans = css`
  font-family: "Roboto Mono", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`

export default { googleFontsUrl, fontFamilyHeading, fontFamilySans }
