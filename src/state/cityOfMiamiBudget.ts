/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import { RootState } from "./store"
import {
  createAsyncThunk,
  createSlice,
  CaseReducer,
  PayloadAction,
} from "@reduxjs/toolkit"

// State
enum Status {
  Idle = "idle",
  Pending = "pending",
  Fulfilled = "fulfilled",
}

interface CityOfMiamiBudgetState {
  status: Status
  data?: object
}

const INITIAL_STATE: CityOfMiamiBudgetState = { status: Status.Idle }

// Case Reducers
const fetchDataPending: CaseReducer<CityOfMiamiBudgetState, PayloadAction> = (
  previousState
) => ({
  ...previousState,
  status: Status.Pending,
})

const fetchDataFulfilled: CaseReducer<
  CityOfMiamiBudgetState,
  PayloadAction<object>
> = (previousState, action) => ({
  ...previousState,
  status: Status.Fulfilled,
  data: action.payload,
})

// Async Thunks
const fetchData = createAsyncThunk("fetchData", async (url: string) => {
  const response = await fetch(url)
  return await response.json()
})

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

// Selectors
const getStatus = (state: RootState) =>
  (state.cityOfMiamiBudget && state.cityOfMiamiBudget.status) || undefined

const getData = (state: RootState) =>
  (state.cityOfMiamiBudget && state.cityOfMiamiBudget.data) || undefined

export default reducer
export { fetchData, getStatus, getData, Status }
