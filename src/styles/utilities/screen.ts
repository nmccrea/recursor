const breakpoints = {
  small: "640px",
  medium: "768px",
  large: "1024px",
  extraLarge: "1280px",
}

/**
 * Defines the breakpoint for a small screen.
 */
const small = `@media (min-width: ${breakpoints.small})`

/**
 * Defines the breakpoint for a medium screen.
 */
const medium = `@media (min-width: ${breakpoints.medium})`

/**
 * Defines the breakpoint for a large screen.
 */
const large = `@media (min-width: ${breakpoints.large})`

/**
 * Defines the breakpoint for an extra large screen.
 */
const extraLarge = `@media (min-width: ${breakpoints.extraLarge})`

export default {
  small,
  medium,
  large,
  extraLarge,
}
