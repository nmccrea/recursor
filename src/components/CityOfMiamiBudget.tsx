/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "../state/cityOfMiamiBudget/async"
import { Status } from "../state/cityOfMiamiBudget/types"
import { getStatus, getData } from "../state/cityOfMiamiBudget/selectors"

const DATA_URL = "https://data.miamigov.com/resource/ub3m-qgg5.json"

const Data = () => {
  const data = useSelector(getData)
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
  const status = useSelector(getStatus)
  if (status === Status.Idle) {
    useDispatch()(fetchData(DATA_URL))
  }
  return ELEMENT_FOR_STATUS[status]
}

export default CityOfMiamiBudget
