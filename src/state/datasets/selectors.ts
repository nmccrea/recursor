/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { DatasetId } from "./types"
import entityAdapter from "./entityAdapter"

const selectDatasets = (state: RootState) => state.datasets

const selectorForDataset = (datasetId: DatasetId) => (state: RootState) =>
  entityAdapter.getSelectors(selectDatasets).selectById(state, datasetId)

const selectorForAsyncState = (datasetId: DatasetId) =>
  createSelector(
    selectorForDataset(datasetId),
    (dataset) => (dataset && dataset.asyncState) || undefined
  )

const selectorForData = (datasetId: DatasetId) =>
  createSelector(
    selectorForDataset(datasetId),
    (dataset) => (dataset && dataset.data) || undefined
  )

export { selectorForAsyncState, selectorForData }
