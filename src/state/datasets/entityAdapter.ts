import { createEntityAdapter } from "@reduxjs/toolkit"
import { Dataset } from "./types"

const entityAdapter = createEntityAdapter<Dataset>()
export default entityAdapter
export type Datasets = ReturnType<typeof entityAdapter.getInitialState>
