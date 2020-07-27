import { createReducer, nanoid } from "@reduxjs/toolkit"
import similaritiesAdapter, { Similarities } from "./similaritiesAdapter"
import {
  createOne,
  removeOne,
  setTranslation,
  setScale,
  setAngle,
  setDepth,
} from "./actions"
import similarity from "models/similarity"

/**
 * A case reducer which creates a new similarity with a unique ID and adds it to the list.
 */
const createOneWithUniqueId = (previousState: Similarities): Similarities => {
  // Limit the number of similarities that can be added:
  // This is an un-subtle performance safeguard that should be improved on somehow.
  if (previousState?.ids.length >= 3) return previousState

  const id = nanoid()
  return similaritiesAdapter.addOne(previousState, similarity.create(id))
}

const reducer = createReducer(
  similaritiesAdapter.getInitialState(),
  (builder) =>
    builder
      .addCase(createOne, createOneWithUniqueId)
      .addCase(removeOne, similaritiesAdapter.removeOne)
      .addCase(setTranslation, similaritiesAdapter.updateOne)
      .addCase(setScale, similaritiesAdapter.updateOne)
      .addCase(setAngle, similaritiesAdapter.updateOne)
      .addCase(setDepth, similaritiesAdapter.updateOne)
)

export default reducer
