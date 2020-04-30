/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import { AppThunkAction } from "../store"
import { fetchDatasetStart, fetchDatasetSuccess } from "./actions"

const fetchDataset = (url: string): AppThunkAction => async (dispatch) => {
  dispatch(fetchDatasetStart())
  const response = await fetch(url)
  const data = await response.json()
  dispatch(fetchDatasetSuccess(data))
}

export { fetchDataset }
