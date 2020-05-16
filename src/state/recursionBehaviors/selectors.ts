import { RootState } from "../store"
import recursionBehaviors from "./recursionBehaviors"
import { RecursionBehaviorId } from "./types"

/**
 * Selects the recursion behaviors slice of the given state tree.
 */
const selectRecursionBehaviors = (state: RootState) => state.recursionBehaviors

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

export { selectorForRecursionBehavior }
