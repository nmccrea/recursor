import { RootState } from "../store"
import recursionBehaviors from "./recursionBehaviors"
import { RecursionBehaviorId } from "./types"

/**
 * TODO: doc
 */
const selectRecursionBehaviors = (state: RootState) => state.recursionBehaviors

/**
 * TODO: doc
 */
const selectorForRecursionBehavior = (id: RecursionBehaviorId) => (
  state: RootState
) =>
  recursionBehaviors
    .getSelectors(selectRecursionBehaviors)
    .selectById(state, id)

export { selectorForRecursionBehavior }
