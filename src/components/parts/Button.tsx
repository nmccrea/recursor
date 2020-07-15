import styled from "styled-components"
import { color, border, shadow } from "styles/utilities"

/**
 * A generic button element with visual feedback on hover and click.
 */
export const Button = styled.button`
  ${border.borderRadius}
  ${shadow.small}

  padding: 6px 16px;

  background-color: lightgray;

  color: white;
  letter-spacing: 0.03em;
  line-height: 1.75;
  text-transform: uppercase;

  &:hover {
    ${shadow.medium}
    filter: brightness(95%);
  }

  &:active {
    ${shadow.large}
    filter: brightness(100%);
  }
`

/**
 * A button for primary, most common, or expected actions.
 */
export const ButtonPrimary = styled(Button)`
  background-color: ${color.primary};
`

/**
 * A button for destructive actions.
 */
export const ButtonDanger = styled(Button)`
  background-color: ${color.danger};
`
