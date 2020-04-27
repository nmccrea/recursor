/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "../state/cityOfMiamiBudget/async"
import { Status } from "../state/cityOfMiamiBudget/reducer"
import { getStatus, getData } from "../state/cityOfMiamiBudget/selectors"

const DATA_URL = "https://data.miamigov.com/resource/ub3m-qgg5.json"

const FetchButton = () => {
  const dispatch = useDispatch()
  return (
    <button onClick={() => dispatch(fetchData(DATA_URL))}>Fetch Data!</button>
  )
}

const Loading = () => <p>Loading...</p>

const Data = () => {
  const data = useSelector(getData)
  return (
    <>
      <h3>The Data:</h3>
      <p>{JSON.stringify(data)}</p>
    </>
  )
}

const STATUS_TO_ELEMENT = {
  [Status.Idle]: <FetchButton />,
  [Status.Pending]: <Loading />,
  [Status.Fulfilled]: <Data />,
}

const CityOfMiamiBudget = () => {
  const status = useSelector(getStatus)
  return (
    <Layout>
      <SEO title="City of Miami Budget" />
      {STATUS_TO_ELEMENT[status]}
    </Layout>
  )
}

export default CityOfMiamiBudget
