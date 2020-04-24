/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchData,
  getStatus,
  getData,
  Status,
} from "../state/cityOfMiamiBudget"

const DATA_URL = "https://data.miamigov.com/resource/ub3m-qgg5.json"

const Idle = () => {
  const dispatch = useDispatch()
  return (
    <button onClick={() => dispatch(fetchData(DATA_URL))}>Fetch Data!</button>
  )
}

const Loading = () => <p>Loading...</p>

const Success = () => {
  const data = useSelector(getData)
  return (
    <>
      <h3>The Data:</h3>
      <p>{JSON.stringify(data)}</p>
    </>
  )
}

const STATUS_TO_ELEMENT = {
  [Status.Idle]: <Idle />,
  [Status.Loading]: <Loading />,
  [Status.Success]: <Success />,
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
