import { createAction } from "@reduxjs/toolkit"
import { RecursionBehaviorId, Translation, Scale, Angle, Depth } from "./types"

/**
 * Creates an action representing a change to the identified recursion behavior's translation.
 *
 * @param id - The ID of the recursion behavior to update.
 * @param translation - The new translation value.
 *
 * @returns A payload action whose payload conforms to `@reduxjs/toolkit`'s `entityAdapter.updateOne()` API.
 */
const setTranslation = createAction(
  "treeFractal/SET_TRANSLATION",
  (id: RecursionBehaviorId, translation: Translation) => ({
    payload: {
      id,
      changes: { translation },
    },
  })
)

/**
 * Creates an action representing a change to the identified recursion behavior's scale.
 *
 * @param id - The ID of the recursion behavior to update.
 * @param scale - The new scale value.
 *
 * @returns A payload action whose payload conforms to `@reduxjs/toolkit`'s `entityAdapter.updateOne()` API.
 */
const setScale = createAction(
  "treeFractal/SET_SCALE",
  (id: RecursionBehaviorId, scale: Scale) => ({
    payload: {
      id,
      changes: { scale },
    },
  })
)

/**
 * Creates an action representing a change to the identified recursion behavior's angle.
 *
 * @param id - The ID of the recursion behavior to update.
 * @param angle - The new angle value.
 *
 * @returns A payload action whose payload conforms to `@reduxjs/toolkit`'s `entityAdapter.updateOne()` API.
 */
const setAngle = createAction(
  "treeFractal/SET_ANGLE",
  (id: RecursionBehaviorId, angle: Angle) => ({
    payload: {
      id,
      changes: { angle },
    },
  })
)

/**
 * Creates an action representing a change to the identified recursion behavior's depth.
 *
 * @param id - The ID of the recursion behavior to update.
 * @param depth - The new depth value.
 *
 * @returns A payload action whose payload conforms to `@reduxjs/toolkit`'s `entityAdapter.updateOne()` API.
 */
const setDepth = createAction(
  "treeFractal/SET_DEPTH",
  (id: RecursionBehaviorId, depth: Depth) => ({
    payload: {
      id,
      changes: { depth },
    },
  })
)

export { setTranslation, setScale, setAngle, setDepth }
