/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { DatasetId } from "./types"

const getIndex = (state: RootState) => state.cityOfMiamiBudget.index

const selectorForDatasetState = (datasetId: DatasetId) =>
  createSelector(getIndex, (index) => index[datasetId])

const selectorForStatus = (datasetId: DatasetId) =>
  createSelector(
    selectorForDatasetState(datasetId),
    (datasetState) => (datasetState && datasetState.status) || undefined
  )

const selectorForData = (datasetId: DatasetId) =>
  createSelector(
    selectorForDatasetState(datasetId),
    (datasetState) => (datasetState && datasetState.data) || undefined
  )

export { selectorForStatus, selectorForData }
