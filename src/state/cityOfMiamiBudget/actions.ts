/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import { createAction } from "@reduxjs/toolkit"

const fetchDataStart = createAction("FETCH_DATA/start")

const fetchDataSuccess = createAction<string>("FETCH_DATA/success")

export { fetchDataStart, fetchDataSuccess }
