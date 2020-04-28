/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import { AppThunkAction } from "../store"
import { fetchDataStart, fetchDataSuccess } from "./actions"

const fetchData = (url: string): AppThunkAction => async (dispatch) => {
  dispatch(fetchDataStart())
  const response = await fetch(url)
  const data = await response.json()
  dispatch(fetchDataSuccess(data))
}

export { fetchData }
