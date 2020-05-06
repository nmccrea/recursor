import { fetchDatasetStart, fetchDatasetSuccess } from "./actions"
import { AppThunkAction } from "../store"
import { DatasetId } from "./types"

/**
 * Fetches the data for the identified dataset from the given URL.
 */
const fetchDataset = (
  datasetId: DatasetId,
  url: string
): AppThunkAction => async (dispatch) => {
  dispatch(fetchDatasetStart(datasetId))
  const response = await fetch(url)
  const data = await response.json()
  dispatch(fetchDatasetSuccess({ id: datasetId, data }))
}

export { fetchDataset }
