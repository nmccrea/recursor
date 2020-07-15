import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
import { typography } from "./utilities"

export default createGlobalStyle`
  ${normalize}

  // Reset default font.
  body {
    ${typography.fontFamilySans}
  }

  // Reset button borders.
  button {
    border: none;
  }
`
