/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import { RootState } from "../store"

const getStatus = (state: RootState) =>
  (state.cityOfMiamiBudget && state.cityOfMiamiBudget.status) || undefined

const getData = (state: RootState) =>
  (state.cityOfMiamiBudget && state.cityOfMiamiBudget.data) || undefined

export { getStatus, getData }
