import { RootState } from "../store"
import branchPatterns from "./branchPatterns"
import { Selector } from "../store"
import {
  BranchPatternId,
  BranchPatternInputs,
  BranchPatternInputKey,
} from "./types"

/**
 * A selector for getting a branch pattern input value. The function will already be bound to a particular branch pattern ID.
 */
export type BranchPatternInputSelector<
  Key extends BranchPatternInputKey
> = Selector<BranchPatternInputs[Key]>

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
const getBranchPatternSelectorFor = (id: BranchPatternId) => (
  state: RootState
) => branchPatterns.getSelectors(selectBranchPatterns).selectById(state, id)

/**
 * Returns a selector for the identified branch pattern's translation.
 *
 * @param id - The ID of the branch pattern to select from.
 *
 * @returns A selector which returns the translation from the identified branch pattern when called.
 */
const getTranslationSelectorFor = (
  id: BranchPatternId
): BranchPatternInputSelector<"translation"> => (state) => {
  const branchPattern = branchPatterns
    .getSelectors(selectBranchPatterns)
    .selectById(state, id)
  return branchPattern?.translation
}

/**
 * Returns a selector for the identified branch pattern's scale.
 *
 * @param id - The ID of the branch pattern to select from.
 *
 * @returns A selector which returns the scale from the identified branch pattern when called.
 */
const getScaleSelectorFor = (
  id: BranchPatternId
): BranchPatternInputSelector<"scale"> => (state) => {
  const branchPattern = branchPatterns
    .getSelectors(selectBranchPatterns)
    .selectById(state, id)
  return branchPattern?.scale
}

/**
 * Returns a selector for the identified branch pattern's angle.
 *
 * @param id - The ID of the branch pattern to select from.
 *
 * @returns A selector which returns the angle from the identified branch pattern when called.
 */
const getAngleSelectorFor = (
  id: BranchPatternId
): BranchPatternInputSelector<"angle"> => (state) => {
  const branchPattern = branchPatterns
    .getSelectors(selectBranchPatterns)
    .selectById(state, id)
  return branchPattern?.angle
}

/**
 * Returns a selector for the identified branch pattern's depth.
 *
 * @param id - The ID of the branch pattern to select from.
 *
 * @returns A selector which returns the depth from the identified branch pattern when called.
 */
const getDepthSelectorFor = (
  id: BranchPatternId
): BranchPatternInputSelector<"depth"> => (state) => {
  const branchPattern = branchPatterns
    .getSelectors(selectBranchPatterns)
    .selectById(state, id)
  return branchPattern?.depth
}

export {
  selectAll,
  selectIds,
  getBranchPatternSelectorFor,
  getTranslationSelectorFor,
  getScaleSelectorFor,
  getAngleSelectorFor,
  getDepthSelectorFor,
}
