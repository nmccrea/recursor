import { createReducer } from "@reduxjs/toolkit"
import recursionBehaviors from "./recursionBehaviors"
import { setTranslation, setScale, setAngle, setDepth } from "./actions"

const reducer = createReducer(recursionBehaviors.getInitialState(), (builder) =>
  builder
    .addCase(setTranslation, recursionBehaviors.updateOne)
    .addCase(setScale, recursionBehaviors.updateOne)
    .addCase(setAngle, recursionBehaviors.updateOne)
    .addCase(setDepth, recursionBehaviors.updateOne)
)

export default reducer
