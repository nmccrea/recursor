import { RootState } from "../store"
import branchPatterns from "./branchPatterns"
import { BranchPatternId } from "./types"

/**
 * Selects the branch patterns slice of the given state tree.
 */
const selectBranchPatterns = (state: RootState) => state.branchPatterns

/**
 * Selects a list containing all of the existing branch patterns.
 * Results are ordered according to the entity adaptor's `ids` field.
 */
const selectAll = branchPatterns.getSelectors(selectBranchPatterns).selectAll

/**
 * Selects the ordered list of branch pattern IDs.
 */
const selectIds = branchPatterns.getSelectors(selectBranchPatterns).selectIds

/**
 * Returns a selector for the identified branch pattern.
 *
 * @param id - The ID of the branch pattern to select.
 *
 * @returns A selector which selects the identified branch pattern when called.
 */
const selectorForBranchPattern = (id: BranchPatternId) => (state: RootState) =>
  branchPatterns.getSelectors(selectBranchPatterns).selectById(state, id)

/**
 * Returns a selector for the identified branch pattern's translation.
 *
 * @param id - The ID of the branch pattern to select from.
 *
 * @returns A selector which returns the translation from the identified branch pattern when called.
 */
const selectorForTranslation = (id: BranchPatternId) => (state: RootState) => {
  const branchPattern = branchPatterns
    .getSelectors(selectBranchPatterns)
    .selectById(state, id)
  return (branchPattern && branchPattern.translation) || undefined
}

/**
 * Returns a selector for the identified branch pattern's scale.
 *
 * @param id - The ID of the branch pattern to select from.
 *
 * @returns A selector which returns the scale from the identified branch pattern when called.
 */
const selectorForScale = (id: BranchPatternId) => (state: RootState) => {
  const branchPattern = branchPatterns
    .getSelectors(selectBranchPatterns)
    .selectById(state, id)
  return (branchPattern && branchPattern.scale) || undefined
}

/**
 * Returns a selector for the identified branch pattern's angle.
 *
 * @param id - The ID of the branch pattern to select from.
 *
 * @returns A selector which returns the angle from the identified branch pattern when called.
 */
const selectorForAngle = (id: BranchPatternId) => (state: RootState) => {
  const branchPattern = branchPatterns
    .getSelectors(selectBranchPatterns)
    .selectById(state, id)
  return (branchPattern && branchPattern.angle) || undefined
}

/**
 * Returns a selector for the identified branch pattern's depth.
 *
 * @param id - The ID of the branch pattern to select from.
 *
 * @returns A selector which returns the depth from the identified branch pattern when called.
 */
const selectorForDepth = (id: BranchPatternId) => (state: RootState) => {
  const branchPattern = branchPatterns
    .getSelectors(selectBranchPatterns)
    .selectById(state, id)
  return (branchPattern && branchPattern.depth) || undefined
}

export {
  selectAll,
  selectIds,
  selectorForBranchPattern,
  selectorForTranslation,
  selectorForScale,
  selectorForAngle,
  selectorForDepth,
}
