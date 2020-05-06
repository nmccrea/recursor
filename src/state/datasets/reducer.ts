import { createReducer, CaseReducer, PayloadAction } from "@reduxjs/toolkit"
import { DatasetId, FetchResult, AsyncState } from "./types"
import entityAdapter, { Datasets } from "./entityAdapter"
import { fetchDatasetStart, fetchDatasetSuccess } from "./actions"

/**
 * The initialization state for the `datasets` slice.
 */
const INITIAL_STATE = entityAdapter.getInitialState()

/**
 * Transitions the `asyncState` of the identified dataset to pending.
 */
const fetchDatasetStartReducer: CaseReducer<
  Datasets,
  PayloadAction<DatasetId>
> = (previousState, action) =>
  entityAdapter.upsertOne(previousState, {
    id: action.payload,
    asyncState: AsyncState.Pending,
  })

/**
 * Upserts the fetched data for the identified dataset, and transitions the `asyncState` to fulfilled.
 */
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
