import { RootState } from "../store"
import { DatasetId } from "./types"
import entityAdapter from "./entityAdapter"

/**
 * Selects the root of the `datasets` slice.
 */
const selectDatasets = (state: RootState) => state.datasets

/**
 * Returns a selector for getting the `asyncState` of the identified dataset.
 *
 * @param datasetId - The ID of the dataset for which to create a selector.
 *
 * @returns A selector that selects the `asyncState` of the identified dataset.
 */
const selectorForAsyncState = (datasetId: DatasetId) => (state: RootState) => {
  const dataset = entityAdapter
    .getSelectors(selectDatasets)
    .selectById(state, datasetId)
  return (dataset && dataset.asyncState) || undefined
}

/**
 * Returns a selector for getting the `data` of the identified dataset.
 *
 * @param datasetId - The ID of the dataset for which to create a selector.
 *
 * @returns A selector that selects the `data` of the identified dataset.
 */
const selectorForData = (datasetId: DatasetId) => (state: RootState) => {
  const dataset = entityAdapter
    .getSelectors(selectDatasets)
    .selectById(state, datasetId)
  return (dataset && dataset.data) || undefined
}

export { selectorForAsyncState, selectorForData }
