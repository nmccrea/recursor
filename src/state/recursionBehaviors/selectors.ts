import { RootState } from "../store"
import recursionBehaviors from "./recursionBehaviors"
import { RecursionBehaviorId } from "./types"

/**
 * Selects the recursion behaviors slice of the given state tree.
 */
const selectRecursionBehaviors = (state: RootState) => state.recursionBehaviors

/**
 * Selects a list containing all of the existing recursion behaviors.
 * Results are ordered according to the entity adaptor's `ids` field.
 */
const selectAll = recursionBehaviors.getSelectors(selectRecursionBehaviors)
  .selectAll

/**
 * Selects the ordered list of recursion behavior IDs.
 */
const selectIds = recursionBehaviors.getSelectors(selectRecursionBehaviors)
  .selectIds

/**
 * Returns a selector for the identified recursion behavior.
 *
 * @param id - The ID of the recursion behavior to select.
 *
 * @returns A selector which selects the identified recursion behavior when called.
 */
const selectorForRecursionBehavior = (id: RecursionBehaviorId) => (
  state: RootState
) =>
  recursionBehaviors
    .getSelectors(selectRecursionBehaviors)
    .selectById(state, id)

/**
 * Returns a selector for the identified recursion behavior's translation.
 *
 * @param id - The ID of the recursion behavior to select from.
 *
 * @returns A selector which returns the translation from the identified recursion behavior when called.
 */
const selectorForTranslation = (id: RecursionBehaviorId) => (
  state: RootState
) => {
  const recursionBehavior = recursionBehaviors
    .getSelectors(selectRecursionBehaviors)
    .selectById(state, id)
  return (recursionBehavior && recursionBehavior.translation) || undefined
}

/**
 * Returns a selector for the identified recursion behavior's scale.
 *
 * @param id - The ID of the recursion behavior to select from.
 *
 * @returns A selector which returns the scale from the identified recursion behavior when called.
 */
const selectorForScale = (id: RecursionBehaviorId) => (state: RootState) => {
  const recursionBehavior = recursionBehaviors
    .getSelectors(selectRecursionBehaviors)
    .selectById(state, id)
  return (recursionBehavior && recursionBehavior.scale) || undefined
}

/**
 * Returns a selector for the identified recursion behavior's angle.
 *
 * @param id - The ID of the recursion behavior to select from.
 *
 * @returns A selector which returns the angle from the identified recursion behavior when called.
 */
const selectorForAngle = (id: RecursionBehaviorId) => (state: RootState) => {
  const recursionBehavior = recursionBehaviors
    .getSelectors(selectRecursionBehaviors)
    .selectById(state, id)
  return (recursionBehavior && recursionBehavior.angle) || undefined
}

/**
 * Returns a selector for the identified recursion behavior's depth.
 *
 * @param id - The ID of the recursion behavior to select from.
 *
 * @returns A selector which returns the depth from the identified recursion behavior when called.
 */
const selectorForDepth = (id: RecursionBehaviorId) => (state: RootState) => {
  const recursionBehavior = recursionBehaviors
    .getSelectors(selectRecursionBehaviors)
    .selectById(state, id)
  return (recursionBehavior && recursionBehavior.depth) || undefined
}

export {
  selectAll,
  selectIds,
  selectorForRecursionBehavior,
  selectorForTranslation,
  selectorForScale,
  selectorForAngle,
  selectorForDepth,
}
