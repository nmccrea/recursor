import { createReducer, nanoid, PayloadAction } from "@reduxjs/toolkit"
import similarities, { Similarities } from "./similarities"
import {
  addOne,
  removeOne,
  setTranslation,
  setScale,
  setAngle,
  setDepth,
} from "./actions"
import { SimilarityInputs } from "./types"

/**
 * A case reducer which creates a similarity out of the given similarity inputs and adds it to the list.
 */
const addOneWithUniqueId = (
  previousState: Similarities,
  action: PayloadAction<SimilarityInputs>
): Similarities => {
  const similarity = action.payload
  return similarities.addOne(previousState, {
    ...similarity,
    id: nanoid(),
  })
}

const reducer = createReducer(similarities.getInitialState(), (builder) =>
  builder
    .addCase(addOne, addOneWithUniqueId)
    .addCase(removeOne, similarities.removeOne)
    .addCase(setTranslation, similarities.updateOne)
    .addCase(setScale, similarities.updateOne)
    .addCase(setAngle, similarities.updateOne)
    .addCase(setDepth, similarities.updateOne)
)

export default reducer
