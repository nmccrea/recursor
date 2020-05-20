import {
  createAction,
  ActionCreatorWithPreparedPayload,
} from "@reduxjs/toolkit"
import {
  BranchPatternId,
  BranchPatternInputs,
  BranchPatternInputKey,
} from "./types"

interface BranchPatternInputUpdate<Key extends BranchPatternInputKey> {
  id: BranchPatternId
  changes: Pick<BranchPatternInputs, Key>
}

export type BranchPatternInputActionCreator<
  Key extends BranchPatternInputKey
> = ActionCreatorWithPreparedPayload<
  [BranchPatternId, BranchPatternInputs[Key]],
  BranchPatternInputUpdate<Key>
>

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
 * @returns A payload action whose payload conforms to `@reduxjs/toolkit`'s `entityAdapter.updateOne()` API.
 */
const setTranslation: BranchPatternInputActionCreator<"translation"> = createAction(
  "branchPatterns/SET_TRANSLATION",
  (id, translation) => ({
    payload: {
      id,
      changes: { translation },
    },
  })
)

/**
 * Creates an action representing a change to the identified branch pattern's scale.
 *
 * @param id - The ID of the branch pattern to update.
 * @param scale - The new scale value.
 *
 * @returns A payload action whose payload conforms to `@reduxjs/toolkit`'s `entityAdapter.updateOne()` API.
 */
const setScale: BranchPatternInputActionCreator<"scale"> = createAction(
  "branchPatterns/SET_SCALE",
  (id, scale) => ({
    payload: {
      id,
      changes: { scale },
    },
  })
)

/**
 * Creates an action representing a change to the identified branch pattern's angle.
 *
 * @param id - The ID of the branch pattern to update.
 * @param angle - The new angle value.
 *
 * @returns A payload action whose payload conforms to `@reduxjs/toolkit`'s `entityAdapter.updateOne()` API.
 */
const setAngle: BranchPatternInputActionCreator<"angle"> = createAction(
  "branchPatterns/SET_ANGLE",
  (id, angle) => ({
    payload: {
      id,
      changes: { angle },
    },
  })
)

/**
 * Creates an action representing a change to the identified branch pattern's depth.
 *
 * @param id - The ID of the branch pattern to update.
 * @param depth - The new depth value.
 *
 * @returns A payload action whose payload conforms to `@reduxjs/toolkit`'s `entityAdapter.updateOne()` API.
 */
const setDepth: BranchPatternInputActionCreator<"depth"> = createAction(
  "branchPatterns/SET_DEPTH",
  (id, depth) => ({
    payload: {
      id,
      changes: { depth },
    },
  })
)

export { addOne, removeOne, setTranslation, setScale, setAngle, setDepth }
