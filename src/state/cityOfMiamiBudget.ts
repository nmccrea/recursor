/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import { RootState, AppThunk } from "./store"
import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit"

// State
enum Status {
  Idle = "idle",
  Loading = "loading",
  Success = "success",
}

interface CityOfMiamiBudgetState {
  status: Status
  data?: object
}

const INITIAL_STATE: CityOfMiamiBudgetState = { status: Status.Idle }

// Case Reducers
const fetchDataRequest: CaseReducer<CityOfMiamiBudgetState, PayloadAction> = (
  previousState
) => ({
  ...previousState,
  status: Status.Loading,
})

const fetchDataSuccess: CaseReducer<
  CityOfMiamiBudgetState,
  PayloadAction<object>
> = (previousState, action) => ({
  ...previousState,
  status: Status.Success,
  data: action.payload,
})

// Selectors
const getStatus = (state: RootState) =>
  (state.cityOfMiamiBudget && state.cityOfMiamiBudget.status) || undefined

const getData = (state: RootState) =>
  (state.cityOfMiamiBudget && state.cityOfMiamiBudget.data) || undefined

// Slice
const { actions, reducer } = createSlice({
  name: "cityOfMiamiBudget",
  initialState: INITIAL_STATE,
  reducers: {
    fetchDataRequest,
    fetchDataSuccess,
  },
})

// Async Thunks
const fetchData = (url: string): AppThunk => async (dispatch) => {
  dispatch(actions.fetchDataRequest())
  const response = await fetch(url)
  const data = await response.json()
  dispatch(actions.fetchDataSuccess(data))
}

export default reducer
export { fetchData, getStatus, getData, Status }
