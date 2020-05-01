/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import { createReducer, CaseReducer, PayloadAction } from "@reduxjs/toolkit"
import { DatasetId, FetchResult, Status, CityOfMiamiBudgetState } from "./types"
import { fetchDatasetStart, fetchDatasetSuccess } from "./actions"

const INITIAL_STATE: CityOfMiamiBudgetState = { index: {} }

const fetchDatasetStartReducer: CaseReducer<
  CityOfMiamiBudgetState,
  PayloadAction<DatasetId>
> = (previousState, action) => ({
  ...previousState,
  index: {
    ...previousState.index,
    [action.payload]: { status: Status.Pending },
  },
})

const fetchDatasetSuccessReducer: CaseReducer<
  CityOfMiamiBudgetState,
  PayloadAction<FetchResult>
> = (previousState, action) => ({
  ...previousState,
  index: {
    ...previousState.index,
    [action.payload.datasetId]: {
      status: Status.Fulfilled,
      data: action.payload.data,
    },
  },
})

// Reducer
const reducer = createReducer(INITIAL_STATE, {
  [fetchDatasetStart.type]: fetchDatasetStartReducer,
  [fetchDatasetSuccess.type]: fetchDatasetSuccessReducer,
})

export default reducer
