import { createEntityAdapter } from "@reduxjs/toolkit"
import { RecursionBehavior } from "./types"

const entityAdapter = createEntityAdapter<RecursionBehavior>()
export default entityAdapter
export type RecursionBehaviors = ReturnType<
  typeof entityAdapter.getInitialState
>
