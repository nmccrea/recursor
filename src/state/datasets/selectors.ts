/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import { RootState } from "../store"
import { DatasetId } from "./types"
import entityAdapter from "./entityAdapter"

const selectDatasets = (state: RootState) => state.datasets

const selectorForAsyncState = (datasetId: DatasetId) => (state: RootState) => {
  const dataset = entityAdapter
    .getSelectors(selectDatasets)
    .selectById(state, datasetId)
  return (dataset && dataset.asyncState) || undefined
}

const selectorForData = (datasetId: DatasetId) => (state: RootState) => {
  const dataset = entityAdapter
    .getSelectors(selectDatasets)
    .selectById(state, datasetId)
  return (dataset && dataset.data) || undefined
}

export { selectorForAsyncState, selectorForData }
