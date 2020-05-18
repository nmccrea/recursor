import { createReducer, nanoid, PayloadAction } from "@reduxjs/toolkit"
import recursionBehaviors, { RecursionBehaviors } from "./recursionBehaviors"
import {
  addOne,
  removeOne,
  setTranslation,
  setScale,
  setAngle,
  setDepth,
} from "./actions"
import { NewRecursionBehavior } from "./types"

/**
 * A case reducer which creates a unique ID for the given new recursion behavior before adding it to the list.
 */
const addOneWithUniqueId = (
  previousState: RecursionBehaviors,
  action: PayloadAction<NewRecursionBehavior>
): RecursionBehaviors => {
  const recursionBehavior = action.payload
  return recursionBehaviors.addOne(previousState, {
    ...recursionBehavior,
    id: nanoid(),
  })
}

const reducer = createReducer(recursionBehaviors.getInitialState(), (builder) =>
  builder
    .addCase(addOne, addOneWithUniqueId)
    .addCase(removeOne, recursionBehaviors.removeOne)
    .addCase(setTranslation, recursionBehaviors.updateOne)
    .addCase(setScale, recursionBehaviors.updateOne)
    .addCase(setAngle, recursionBehaviors.updateOne)
    .addCase(setDepth, recursionBehaviors.updateOne)
)

export default reducer
