import { createAction } from "@reduxjs/toolkit"
import {
  NewBranchPattern,
  BranchPatternId,
  Translation,
  Scale,
  Angle,
  Depth,
} from "./types"

/**
 * Creates an action containing a new branch pattern to be added to the list of branch patterns.
 *
 * @param branchPattern - The new branch pattern.
 *
 * @returns A payload action whose payload is the new branch pattern to add.
 */
const addOne = createAction<NewBranchPattern>("branchPattern/ADD_ONE")

/**
 * Creates an action identifying an existing branch pattern to be destroyed.
 *
 * @param branchPatternId - The ID of the branch pattern to remove.
 *
 * @returns A payload action whose payload conforms to `@reduxjs/toolkit`'s `entityAdapter.removeOne()` API.
 */
const removeOne = createAction<BranchPatternId>("branchPattern/REMOVE_ONE")

/**
 * Creates an action representing a change to the identified branch pattern's translation.
 *
 * @param id - The ID of the branch pattern to update.
 * @param translation - The new translation value.
 *
 * @returns A payload action whose payload conforms to `@reduxjs/toolkit`'s `entityAdapter.updateOne()` API.
 */
const setTranslation = createAction(
  "branchPattern/SET_TRANSLATION",
  (id: BranchPatternId, translation: Translation) => ({
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
const setScale = createAction(
  "branchPattern/SET_SCALE",
  (id: BranchPatternId, scale: Scale) => ({
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
const setAngle = createAction(
  "branchPattern/SET_ANGLE",
  (id: BranchPatternId, angle: Angle) => ({
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
const setDepth = createAction(
  "branchPattern/SET_DEPTH",
  (id: BranchPatternId, depth: Depth) => ({
    payload: {
      id,
      changes: { depth },
    },
  })
)

export { addOne, removeOne, setTranslation, setScale, setAngle, setDepth }
