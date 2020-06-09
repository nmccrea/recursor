import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

export default createGlobalStyle`
  ${normalize}

  body {
    font-family: Roboto, Arial, sans-serif;
    font-size: 14px;
    font-weight: 600;
  }
`
