/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchDataset } from "../../state/datasets/async"
import {
  selectorForAsyncState,
  selectorForData,
} from "../../state/datasets/selectors"
import { DatasetId, AsyncState } from "../../state/datasets/types"

const DATASET_ID: DatasetId = "cityOfMiami/budget/revenue"
const DATA_URL = "https://data.miamigov.com/resource/ub3m-qgg5.json"

const Data = () => {
  const data = useSelector(selectorForData(DATASET_ID))
  return (
    <>
      <h3>The Data:</h3>
      <p>{JSON.stringify(data)}</p>
    </>
  )
}

const ELEMENT_FOR_ASYNC_STATE = {
  [AsyncState.Idle]: null,
  [AsyncState.Pending]: <p>Loading...</p>,
  [AsyncState.Fulfilled]: <Data />,
}

const CityOfMiamiBudget = () => {
  const asyncState = useSelector(selectorForAsyncState(DATASET_ID))
  if (asyncState === undefined || asyncState === AsyncState.Idle)
    useDispatch()(fetchDataset(DATA_URL, DATASET_ID))
  return (asyncState && ELEMENT_FOR_ASYNC_STATE[asyncState]) || null
}

export default CityOfMiamiBudget
