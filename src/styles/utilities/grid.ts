import { css } from "styled-components"

/**
 * Applies the given number of equal-width columns to the CSS grid template.
 *
 * @param count - The number of equal columns to use for the grid template.
 *
 * @returns CSS that applies the style.
 */
const columns = (count: number) => css`
  grid-template-columns: repeat(${count}, minmax(0, 1fr));
`

/**
 * Makes an element span the given number of CSS grid columns.
 *
 * @param span - The number of grid columns to span.
 *
 * @returns CSS that applies the style.
 */
const columnSpan = (span: number) => css`
  grid-column: span ${span} / span ${span};
`

export default { columns, columnSpan }
