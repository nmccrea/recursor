/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import { fetchDatasetStart, fetchDatasetSuccess } from "./actions"
import { AppThunkAction } from "../store"
import { DatasetId } from "./types"

const fetchDataset = (
  url: string,
  datasetId: DatasetId
): AppThunkAction => async (dispatch) => {
  dispatch(fetchDatasetStart(datasetId))
  const response = await fetch(url)
  const data = await response.json()
  dispatch(fetchDatasetSuccess({ id: datasetId, data }))
}

export { fetchDataset }
