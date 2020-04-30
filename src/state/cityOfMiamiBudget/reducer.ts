/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import { createReducer, CaseReducer, PayloadAction } from "@reduxjs/toolkit"
import { CityOfMiamiBudgetState, Status } from "./types"
import { fetchDatasetStart, fetchDatasetSuccess } from "./actions"

const INITIAL_STATE: CityOfMiamiBudgetState = { status: Status.Idle }

// Case Reducers
const fetchDatasetStartReducer: CaseReducer<
  CityOfMiamiBudgetState,
  PayloadAction
> = (previousState) => ({
  ...previousState,
  status: Status.Pending,
})

const fetchDatasetSuccessReducer: CaseReducer<
  CityOfMiamiBudgetState,
  PayloadAction<object>
> = (previousState, action) => ({
  ...previousState,
  status: Status.Fulfilled,
  data: action.payload,
})

// Reducer
const reducer = createReducer(INITIAL_STATE, {
  [fetchDatasetStart.type]: fetchDatasetStartReducer,
  [fetchDatasetSuccess.type]: fetchDatasetSuccessReducer,
})

export default reducer
