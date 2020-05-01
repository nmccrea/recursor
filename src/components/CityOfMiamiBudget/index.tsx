/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchDataset } from "../../state/datasets/async"
import {
  selectorForStatus,
  selectorForData,
} from "../../state/datasets/selectors"
import { DatasetId, Status } from "../../state/datasets/types"

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

const ELEMENT_FOR_STATUS = {
  [Status.Idle]: null,
  [Status.Pending]: <p>Loading...</p>,
  [Status.Fulfilled]: <Data />,
}

const CityOfMiamiBudget = () => {
  const status = useSelector(selectorForStatus(DATASET_ID))
  if (status === undefined || status === Status.Idle)
    useDispatch()(fetchDataset(DATA_URL, DATASET_ID))
  return ELEMENT_FOR_STATUS[status] || null
}

export default CityOfMiamiBudget
