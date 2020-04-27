/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import { createReducer, CaseReducer, PayloadAction } from "@reduxjs/toolkit"
import { fetchDataStart, fetchDataSuccess } from "./actions"

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
