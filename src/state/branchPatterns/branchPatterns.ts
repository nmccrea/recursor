import { createEntityAdapter } from "@reduxjs/toolkit"
import { BranchPattern } from "./types"

const entityAdapter = createEntityAdapter<BranchPattern>()
export default entityAdapter
export type BranchPatterns = ReturnType<typeof entityAdapter.getInitialState>
