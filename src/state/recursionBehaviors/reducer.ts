import { createReducer } from "@reduxjs/toolkit"
import recursionBehaviors from "./recursionBehaviors"
import { setTranslation, setScale, setAngle, setDepth } from "./actions"

/**
 * TODO: doc
 */
const INITIAL_STATE = recursionBehaviors.getInitialState()

/**
 * TODO: doc
 */
const reducer = createReducer(INITIAL_STATE, (builder) =>
  builder
    .addCase(setTranslation, recursionBehaviors.updateOne)
    .addCase(setScale, recursionBehaviors.updateOne)
    .addCase(setAngle, recursionBehaviors.updateOne)
    .addCase(setDepth, recursionBehaviors.updateOne)
)

export default reducer
