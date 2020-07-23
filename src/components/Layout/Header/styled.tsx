import styled from "styled-components"
import { color, typography } from "styles/utilities"
import { Panel } from "components/parts/Panel"

export const H1 = styled.h1`
  ${typography.fontFamilyHeading}
  color: ${color.primary};
  text-transform: uppercase;
  line-height: 0;
  padding: 0.5rem 1rem;
`

export const HeaderPanel = styled(Panel)`
  position: fixed;
  top: 1rem;
  left: 1rem;
  padding: 0;
`
