import { createEntityAdapter } from "@reduxjs/toolkit"
import { Similarity } from "models/similarity"

const similaritiesAdapter = createEntityAdapter<Similarity>()
export default similaritiesAdapter
export type Similarities = ReturnType<
  typeof similaritiesAdapter.getInitialState
>
