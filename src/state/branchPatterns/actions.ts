import { createAction, PayloadAction } from "@reduxjs/toolkit"
import {
  BranchPatternId,
  BranchPatternInputs,
  BranchPatternInputKey,
  Translation,
  Scale,
  Angle,
  Depth,
} from "./types"

/**
 * A payload action representing a change to a branch pattern input.
 */
type BranchPatternInputAction<
  Key extends BranchPatternInputKey
> = PayloadAction<{
  id: BranchPatternId
  changes: Pick<BranchPatternInputs, Key>
}>

/**
 * An action creator for updating a branch pattern input. The function will already be bound to a particular branch pattern ID so only the new value is required.
 *
 * @param value - The new value of the input.
 *
 * @returns A branch pattern input action with the given value.
 */
export type BranchPatternInputActionCreator<
  Key extends BranchPatternInputKey
> = (value: BranchPatternInputs[Key]) => BranchPatternInputAction<Key>

/**
 * Creates an action containing new branch pattern inputs to be added to the list of branch patterns.
 *
 * @param branchPattern - The new branch pattern inputs.
 *
 * @returns A payload action whose payload is the new branch pattern inputs to add.
 */
const addOne = createAction<BranchPatternInputs>("branchPatterns/ADD_ONE")

/**
 * Creates an action identifying an existing branch pattern to be destroyed.
 *
 * @param branchPatternId - The ID of the branch pattern to remove.
 *
 * @returns A payload action whose payload conforms to `@reduxjs/toolkit`'s `entityAdapter.removeOne()` API.
 */
const removeOne = createAction<BranchPatternId>("branchPatterns/REMOVE_ONE")

/**
 * Creates an action representing a change to the identified branch pattern's translation.
 *
 * @param id - The ID of the branch pattern to update.
 * @param translation - The new translation value.
 *
 * @returns A branch pattern input action representing this change.
 */
const setTranslation = createAction(
  "branchPatterns/SET_TRANSLATION",
  (id: BranchPatternId, translation: Translation) => ({
    payload: {
      id,
      changes: { translation },
    },
  })
)

/**
 * Gets an action creator for setting the translation of the identified branch pattern.
 *
 * @param id - The ID of the branch pattern for which to create a translation setter.
 *
 * @returns A branch pattern input action creator.
 */
const getTranslationSetterFor = (
  id: BranchPatternId
): BranchPatternInputActionCreator<"translation"> => (translation) =>
  setTranslation(id, translation)

/**
 * Creates an action representing a change to the identified branch pattern's scale.
 *
 * @param id - The ID of the branch pattern to update.
 * @param scale - The new scale value.
 *
 * @returns A branch pattern input update representing this change.
 */
const setScale = createAction(
  "branchPatterns/SET_SCALE",
  (id: BranchPatternId, scale: Scale) => ({
    payload: {
      id,
      changes: { scale },
    },
  })
)

/**
 * Gets an action creator for setting the scale of the identified branch pattern.
 *
 * @param id - The ID of the branch pattern for which to create a scale setter.
 *
 * @returns A branch pattern input action creator.
 */
const getScaleSetterFor = (
  id: BranchPatternId
): BranchPatternInputActionCreator<"scale"> => (scale) => setScale(id, scale)

/**
 * Creates an action representing a change to the identified branch pattern's angle.
 *
 * @param id - The ID of the branch pattern to update.
 * @param angle - The new angle value.
 *
 * @returns A branch pattern input update representing this change.
 */
const setAngle = createAction(
  "branchPatterns/SET_ANGLE",
  (id: BranchPatternId, angle: Angle) => ({
    payload: {
      id,
      changes: { angle },
    },
  })
)

/**
 * Gets an action creator for setting the angle of the identified branch pattern.
 *
 * @param id - The ID of the branch pattern for which to create a angle setter.
 *
 * @returns A branch pattern input action creator.
 */
const getAngleSetterFor = (
  id: BranchPatternId
): BranchPatternInputActionCreator<"angle"> => (angle) => setAngle(id, angle)

/**
 * Creates an action representing a change to the identified branch pattern's depth.
 *
 * @param id - The ID of the branch pattern to update.
 * @param depth - The new depth value.
 *
 * @returns A branch pattern input update representing this change.
 */
const setDepth = createAction(
  "branchPatterns/SET_DEPTH",
  (id: BranchPatternId, depth: Depth) => ({
    payload: {
      id,
      changes: { depth },
    },
  })
)

/**
 * Gets an action creator for setting the depth of the identified branch pattern.
 *
 * @param id - The ID of the branch pattern for which to create a depth setter.
 *
 * @returns A branch pattern input action creator.
 */
const getDepthSetterFor = (
  id: BranchPatternId
): BranchPatternInputActionCreator<"depth"> => (depth) => setDepth(id, depth)

export {
  addOne,
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
