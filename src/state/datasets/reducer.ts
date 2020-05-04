/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import { createReducer, CaseReducer, PayloadAction } from "@reduxjs/toolkit"
import { DatasetId, FetchResult, AsyncState } from "./types"
import entityAdapter, { Datasets } from "./entityAdapter"
import { fetchDatasetStart, fetchDatasetSuccess } from "./actions"

const INITIAL_STATE = entityAdapter.getInitialState()

const fetchDatasetStartReducer: CaseReducer<
  Datasets,
  PayloadAction<DatasetId>
> = (previousState, action) =>
  entityAdapter.upsertOne(previousState, {
    id: action.payload,
    asyncState: AsyncState.Pending,
  })

const fetchDatasetSuccessReducer: CaseReducer<
  Datasets,
  PayloadAction<FetchResult>
> = (previousState, action) =>
  entityAdapter.upsertOne(previousState, {
    ...action.payload,
    asyncState: AsyncState.Fulfilled,
  })

const reducer = createReducer(INITIAL_STATE, {
  [fetchDatasetStart.type]: fetchDatasetStartReducer,
  [fetchDatasetSuccess.type]: fetchDatasetSuccessReducer,
})

export default reducer
