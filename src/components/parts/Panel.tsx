import styled from "styled-components"
import { color, border, shadow } from "styles/utilities"

export const Panel = styled.div`
  padding: 1rem;
  background-color: ${color.transparent.white1};
  ${border.borderRadius}
  ${shadow.small}
`
