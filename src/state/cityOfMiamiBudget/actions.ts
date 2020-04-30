/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import { createAction } from "@reduxjs/toolkit"

const fetchDatasetStart = createAction("FETCH_DATA/start")

const fetchDatasetSuccess = createAction<object>("FETCH_DATA/success")

export { fetchDatasetStart, fetchDatasetSuccess }
