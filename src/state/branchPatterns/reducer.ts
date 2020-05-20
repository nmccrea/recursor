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
import { BranchPatternInputs } from "./types"

/**
 * A case reducer which creates a branch pattern out of the given branch pattern inputs and adds it to the list.
 */
const addOneWithUniqueId = (
  previousState: BranchPatterns,
  action: PayloadAction<BranchPatternInputs>
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
