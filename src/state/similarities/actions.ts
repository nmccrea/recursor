import { createAction, PayloadAction } from "@reduxjs/toolkit"
import {
  SimilarityId,
  SimilarityInputs,
  SimilarityInputKey,
  Translation,
  Scale,
  Angle,
  Depth,
} from "./types"

/**
 * A payload action representing a change to a similarity input.
 */
type SimilarityInputAction<Key extends SimilarityInputKey> = PayloadAction<{
  id: SimilarityId
  changes: Pick<SimilarityInputs, Key>
}>

/**
 * An action creator for updating a similarity input. The function will already be bound to a particular similarity ID so only the new value is required.
 *
 * @param value - The new value of the input.
 *
 * @returns A similarity input action with the given value.
 */
export type SimilarityInputActionCreator<Key extends SimilarityInputKey> = (
  value: SimilarityInputs[Key]
) => SimilarityInputAction<Key>

/**
 * Creates an action representing the creation of a new similarity to be added to the list of similarities.
 *
 * @returns A payload action with an empty payload.
 */
const createOne = createAction<undefined>("similarities/CREATE_ONE")

/**
 * Creates an action identifying an existing similarity to be destroyed.
 *
 * @param similarityId - The ID of the similarity to remove.
 *
 * @returns A payload action containing the given ID.
 */
const removeOne = createAction<SimilarityId>("similarities/REMOVE_ONE")

/**
 * Creates an action representing a change to the identified similarity's translation.
 *
 * @param id - The ID of the similarity to update.
 * @param translation - The new translation value.
 *
 * @returns A similarity input action representing this change.
 */
const setTranslation = createAction(
  "similarities/SET_TRANSLATION",
  (id: SimilarityId, translation: Translation) => ({
    payload: {
      id,
      changes: { translation },
    },
  })
)

/**
 * Gets an action creator for setting the translation of the identified similarity.
 *
 * @param id - The ID of the similarity for which to create a translation setter.
 *
 * @returns A similarity input action creator.
 */
const getTranslationSetterFor = (
  id: SimilarityId
): SimilarityInputActionCreator<"translation"> => (translation) =>
  setTranslation(id, translation)

/**
 * Creates an action representing a change to the identified similarity's scale.
 *
 * @param id - The ID of the similarity to update.
 * @param scale - The new scale value.
 *
 * @returns A similarity input update representing this change.
 */
const setScale = createAction(
  "similarities/SET_SCALE",
  (id: SimilarityId, scale: Scale) => ({
    payload: {
      id,
      changes: { scale },
    },
  })
)

/**
 * Gets an action creator for setting the scale of the identified similarity.
 *
 * @param id - The ID of the similarity for which to create a scale setter.
 *
 * @returns A similarity input action creator.
 */
const getScaleSetterFor = (
  id: SimilarityId
): SimilarityInputActionCreator<"scale"> => (scale) => setScale(id, scale)

/**
 * Creates an action representing a change to the identified similarity's angle.
 *
 * @param id - The ID of the similarity to update.
 * @param angle - The new angle value.
 *
 * @returns A similarity input update representing this change.
 */
const setAngle = createAction(
  "similarities/SET_ANGLE",
  (id: SimilarityId, angle: Angle) => ({
    payload: {
      id,
      changes: { angle },
    },
  })
)

/**
 * Gets an action creator for setting the angle of the identified similarity.
 *
 * @param id - The ID of the similarity for which to create a angle setter.
 *
 * @returns A similarity input action creator.
 */
const getAngleSetterFor = (
  id: SimilarityId
): SimilarityInputActionCreator<"angle"> => (angle) => setAngle(id, angle)

/**
 * Creates an action representing a change to the identified similarity's depth.
 *
 * @param id - The ID of the similarity to update.
 * @param depth - The new depth value.
 *
 * @returns A similarity input update representing this change.
 */
const setDepth = createAction(
  "similarities/SET_DEPTH",
  (id: SimilarityId, depth: Depth) => ({
    payload: {
      id,
      changes: { depth },
    },
  })
)

/**
 * Gets an action creator for setting the depth of the identified similarity.
 *
 * @param id - The ID of the similarity for which to create a depth setter.
 *
 * @returns A similarity input action creator.
 */
const getDepthSetterFor = (
  id: SimilarityId
): SimilarityInputActionCreator<"depth"> => (depth) => setDepth(id, depth)

export type CreateOneAction = ReturnType<typeof createOne>
export type RemoveOneAction = ReturnType<typeof removeOne>
export type SetTranslationAction = ReturnType<typeof setTranslation>
export type SetScaleAction = ReturnType<typeof setScale>
export type SetAngleAction = ReturnType<typeof setAngle>
export type SetDepthAction = ReturnType<typeof setDepth>

export {
  createOne,
  removeOne,
  setTranslation,
  getTranslationSetterFor,
  setScale,
  getScaleSetterFor,
  setAngle,
  getAngleSetterFor,
  setDepth,
  getDepthSetterFor,
}
