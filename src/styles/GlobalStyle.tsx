import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
import { fontSans } from "./utilities/typography"

export default createGlobalStyle`
  ${normalize}

  // Reset default font.
  body {
    ${fontSans}
  }

  // Reset button borders.
  button {
    border: none;
  }
`
