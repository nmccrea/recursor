import styled from "styled-components"
import { colorPrimary, colorDanger } from "../../styles/colors"
import { borderRadius } from "../../styles/mixins/borderRadius"
import {
  shadowDefault,
  shadowHover,
  shadowActive,
} from "../../styles/mixins/shadow"

/**
 * A generic button element with visual feedback on hover and click.
 */
export const Button = styled.button`
  ${borderRadius}
  ${shadowDefault}

  border: 0;
  padding: 6px 16px;

  background-color: lightgray;

  color: white;
  letter-spacing: 0.03em;
  line-height: 1.75;
  text-transform: uppercase;

  &:hover {
    ${shadowHover}
    filter: brightness(95%);
  }

  &:active {
    ${shadowActive}
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
