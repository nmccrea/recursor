import { RootState } from "../store"
import similarities from "./similarities"
import { Selector } from "../store"
import { SimilarityId, SimilarityInputs, SimilarityInputKey } from "./types"

/**
 * A selector for getting a similarity input value. The function will already be bound to a particular similarity ID.
 */
export type SimilarityInputSelector<Key extends SimilarityInputKey> = Selector<
  SimilarityInputs[Key]
>

/**
 * Selects the similarities slice of the given state tree.
 */
const selectSimilarities = (state: RootState) => state.similarities

/**
 * Selects a list containing all of the existing similarities.
 * Results are ordered according to the entity adaptor's `ids` field.
 */
const selectAll = similarities.getSelectors(selectSimilarities).selectAll

/**
 * Selects the ordered list of similarity IDs.
 */
const selectIds = similarities.getSelectors(selectSimilarities).selectIds

/**
 * Returns a selector for the identified similarity.
 *
 * @param id - The ID of the similarity to select.
 *
 * @returns A selector which selects the identified similarity when called.
 */
const getSimilaritySelectorFor = (id: SimilarityId) => (state: RootState) =>
  similarities.getSelectors(selectSimilarities).selectById(state, id)

/**
 * Returns a selector for the identified similarity's translation.
 *
 * @param id - The ID of the similarity to select from.
 *
 * @returns A selector which returns the translation from the identified similarity when called.
 */
const getTranslationSelectorFor = (
  id: SimilarityId
): SimilarityInputSelector<"translation"> => (state) => {
  const similarity = similarities
    .getSelectors(selectSimilarities)
    .selectById(state, id)
  return similarity?.translation
}

/**
 * Returns a selector for the identified similarity's scale.
 *
 * @param id - The ID of the similarity to select from.
 *
 * @returns A selector which returns the scale from the identified similarity when called.
 */
const getScaleSelectorFor = (
  id: SimilarityId
): SimilarityInputSelector<"scale"> => (state) => {
  const similarity = similarities
    .getSelectors(selectSimilarities)
    .selectById(state, id)
  return similarity?.scale
}

/**
 * Returns a selector for the identified similarity's angle.
 *
 * @param id - The ID of the similarity to select from.
 *
 * @returns A selector which returns the angle from the identified similarity when called.
 */
const getAngleSelectorFor = (
  id: SimilarityId
): SimilarityInputSelector<"angle"> => (state) => {
  const similarity = similarities
    .getSelectors(selectSimilarities)
    .selectById(state, id)
  return similarity?.angle
}

/**
 * Returns a selector for the identified similarity's depth.
 *
 * @param id - The ID of the similarity to select from.
 *
 * @returns A selector which returns the depth from the identified similarity when called.
 */
const getDepthSelectorFor = (
  id: SimilarityId
): SimilarityInputSelector<"depth"> => (state) => {
  const similarity = similarities
    .getSelectors(selectSimilarities)
    .selectById(state, id)
  return similarity?.depth
}

export {
  selectAll,
  selectIds,
  getSimilaritySelectorFor,
  getTranslationSelectorFor,
  getScaleSelectorFor,
  getAngleSelectorFor,
  getDepthSelectorFor,
}
