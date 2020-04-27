/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import { CityOfMiamiBudgetState, Status } from "./cityOfMiamiBudget"
import { createAsyncThunk, CaseReducer, PayloadAction } from "@reduxjs/toolkit"

// Case Reducers
const fetchDataPending: CaseReducer<CityOfMiamiBudgetState, PayloadAction> = (
  previousState
) => ({
  ...previousState,
  status: Status.Pending,
})

const fetchDataFulfilled: CaseReducer<
  CityOfMiamiBudgetState,
  PayloadAction<object>
> = (previousState, action) => ({
  ...previousState,
  status: Status.Fulfilled,
  data: action.payload,
})

const fetchData = createAsyncThunk("fetchData", async (url: string) => {
  const response = await fetch(url)
  return await response.json()
})

export { fetchData, fetchDataPending, fetchDataFulfilled }
