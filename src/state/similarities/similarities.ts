import { createEntityAdapter } from "@reduxjs/toolkit"
import { Similarity } from "./types"

const entityAdapter = createEntityAdapter<Similarity>()
export default entityAdapter
export type Similarities = ReturnType<typeof entityAdapter.getInitialState>
