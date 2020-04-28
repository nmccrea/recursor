/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import { createReducer, CaseReducer, PayloadAction } from "@reduxjs/toolkit"
import { CityOfMiamiBudgetState, Status } from "./types"
import { fetchDataStart, fetchDataSuccess } from "./actions"

const INITIAL_STATE: CityOfMiamiBudgetState = { status: Status.Idle }

// Case Reducers
const fetchDataStartReducer: CaseReducer<
  CityOfMiamiBudgetState,
  PayloadAction
> = (previousState) => ({
  ...previousState,
  status: Status.Pending,
})

const fetchDataSuccessReducer: CaseReducer<
  CityOfMiamiBudgetState,
  PayloadAction<object>
> = (previousState, action) => ({
  ...previousState,
  status: Status.Fulfilled,
  data: action.payload,
})

// Reducer
const reducer = createReducer(INITIAL_STATE, {
  [fetchDataStart.type]: fetchDataStartReducer,
  [fetchDataSuccess.type]: fetchDataSuccessReducer,
})

export default reducer
