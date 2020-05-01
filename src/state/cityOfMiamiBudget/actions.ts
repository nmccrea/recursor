/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import { createAction } from "@reduxjs/toolkit"
import { DatasetId, FetchResult } from "./types"

const fetchDatasetStart = createAction<DatasetId>("FETCH_DATA/start")

const fetchDatasetSuccess = createAction<FetchResult>("FETCH_DATA/success")

export { fetchDatasetStart, fetchDatasetSuccess }
