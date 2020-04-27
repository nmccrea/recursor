/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import { createSlice } from "@reduxjs/toolkit"
import { fetchData, fetchDataPending, fetchDataFulfilled } from "./async"

// State
export enum Status {
  Idle = "idle",
  Pending = "pending",
  Fulfilled = "fulfilled",
}

export interface CityOfMiamiBudgetState {
  status: Status
  data?: object
}

const INITIAL_STATE: CityOfMiamiBudgetState = { status: Status.Idle }

// Slice
const { reducer } = createSlice({
  name: "cityOfMiamiBudget",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [fetchData.pending.type]: fetchDataPending,
    [fetchData.fulfilled.type]: fetchDataFulfilled,
  },
})

export default reducer
