import styled from "styled-components"
import { colorPrimary, colorDanger } from "../../styles/theme/colors"
import { borderRadius } from "../../styles/utilities/borderRadius"
import {
  shadowSmall,
  shadowMedium,
  shadowLarge,
} from "../../styles/utilities/shadow"

/**
 * A generic button element with visual feedback on hover and click.
 */
export const Button = styled.button`
  ${borderRadius}
  ${shadowSmall}

  padding: 6px 16px;

  background-color: lightgray;

  color: white;
  letter-spacing: 0.03em;
  line-height: 1.75;
  text-transform: uppercase;

  &:hover {
    ${shadowMedium}
    filter: brightness(95%);
  }

  &:active {
    ${shadowLarge}
    filter: brightness(100%);
  }
`

/**
 * A button for primary, most common, or expected actions.
 */
export const ButtonPrimary = styled(Button)`
  background-color: ${colorPrimary};
`

/**
 * A button for destructive actions.
 */
export const ButtonDanger = styled(Button)`
  background-color: ${colorDanger};
`
