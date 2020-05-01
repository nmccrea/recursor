/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import { createAction } from "@reduxjs/toolkit"
import { DatasetId, FetchResult } from "./types"

const fetchDatasetStart = createAction<DatasetId>(
  "datasets/FETCH_DATASET/start"
)

const fetchDatasetSuccess = createAction<FetchResult>(
  "datasets/FETCH_DATASET/success"
)

export { fetchDatasetStart, fetchDatasetSuccess }
