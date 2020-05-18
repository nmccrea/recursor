import { createAction } from "@reduxjs/toolkit"
import {
  NewRecursionBehavior,
  RecursionBehaviorId,
  Translation,
  Scale,
  Angle,
  Depth,
} from "./types"

/**
 * Creates an action containing a new recursion behavior to be added to the list of recursion behaviors.
 *
 * @param recursionBehavior - The new recursion behavior.
 *
 * @returns A payload action whose payload is the new recursion behavior to add.
 */
const addOne = createAction<NewRecursionBehavior>("recursionBehavior/ADD_ONE")

/**
 * Creates an action identifying an existing recursion behavior to be destroyed.
 *
 * @param recursionBehaviorId - The ID of the recursion behavior to remove.
 *
 * @returns A payload action whose payload conforms to `@reduxjs/toolkit`'s `entityAdapter.removeOne()` API.
 */
const removeOne = createAction<RecursionBehaviorId>(
  "recursionBehavior/REMOVE_ONE"
)

/**
 * Creates an action representing a change to the identified recursion behavior's translation.
 *
 * @param id - The ID of the recursion behavior to update.
 * @param translation - The new translation value.
 *
 * @returns A payload action whose payload conforms to `@reduxjs/toolkit`'s `entityAdapter.updateOne()` API.
 */
const setTranslation = createAction(
  "recursionBehavior/SET_TRANSLATION",
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
  "recursionBehavior/SET_SCALE",
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
  "recursionBehavior/SET_ANGLE",
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
  "recursionBehavior/SET_DEPTH",
  (id: RecursionBehaviorId, depth: Depth) => ({
    payload: {
      id,
      changes: { depth },
    },
  })
)

export { addOne, removeOne, setTranslation, setScale, setAngle, setDepth }
