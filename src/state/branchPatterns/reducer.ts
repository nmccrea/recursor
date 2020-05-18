import { createReducer, nanoid, PayloadAction } from "@reduxjs/toolkit"
import branchPatterns, { BranchPatterns } from "./branchPatterns"
import {
  addOne,
  removeOne,
  setTranslation,
  setScale,
  setAngle,
  setDepth,
} from "./actions"
import { NewBranchPattern } from "./types"

/**
 * A case reducer which creates a unique ID for the given new branch pattern before adding it to the list.
 */
const addOneWithUniqueId = (
  previousState: BranchPatterns,
  action: PayloadAction<NewBranchPattern>
): BranchPatterns => {
  const branchPattern = action.payload
  return branchPatterns.addOne(previousState, {
    ...branchPattern,
    id: nanoid(),
  })
}

const reducer = createReducer(branchPatterns.getInitialState(), (builder) =>
  builder
    .addCase(addOne, addOneWithUniqueId)
    .addCase(removeOne, branchPatterns.removeOne)
    .addCase(setTranslation, branchPatterns.updateOne)
    .addCase(setScale, branchPatterns.updateOne)
    .addCase(setAngle, branchPatterns.updateOne)
    .addCase(setDepth, branchPatterns.updateOne)
)

export default reducer
