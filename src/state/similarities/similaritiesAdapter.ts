import { createEntityAdapter } from "@reduxjs/toolkit"
import { Similarity } from "./types"

const similaritiesAdapter = createEntityAdapter<Similarity>()
export default similaritiesAdapter
export type Similarities = ReturnType<
  typeof similaritiesAdapter.getInitialState
>
