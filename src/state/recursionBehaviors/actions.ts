import { createAction } from "@reduxjs/toolkit"
import { RecursionBehaviorId, Translation, Scale, Angle, Depth } from "./types"

/**
 * TODO: doc
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
 * TODO: doc
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
 * TODO: doc
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
 * TODO: doc
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
