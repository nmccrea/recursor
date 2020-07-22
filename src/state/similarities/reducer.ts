import { createReducer, nanoid } from "@reduxjs/toolkit"
import similarities, { Similarities } from "./similarities"
import {
  createOne,
  removeOne,
  setTranslation,
  setScale,
  setAngle,
  setDepth,
} from "./actions"
import createSimilarity from "./utils/createSimilarity"

/**
 * A case reducer which creates a new similarity with a unique ID and adds it to the list.
 */
const createOneWithUniqueId = (previousState: Similarities): Similarities => {
  // Limit the number of similarities that can be added:
  // This is an un-subtle performance safeguard that should be improved on somehow.
  if (previousState?.ids.length >= 3) return previousState

  const id = nanoid()
  return similarities.addOne(previousState, createSimilarity(id))
}

const reducer = createReducer(similarities.getInitialState(), (builder) =>
  builder
    .addCase(createOne, createOneWithUniqueId)
    .addCase(removeOne, similarities.removeOne)
    .addCase(setTranslation, similarities.updateOne)
    .addCase(setScale, similarities.updateOne)
    .addCase(setAngle, similarities.updateOne)
    .addCase(setDepth, similarities.updateOne)
)

export default reducer
