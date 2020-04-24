/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import { RootState, AppThunk } from "./store"

// Actions
const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST"
interface FetchDataRequestAction {
  type: typeof FETCH_DATA_REQUEST
}

const fetchDataRequest = (): FetchDataRequestAction => ({
  type: FETCH_DATA_REQUEST,
})

const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
interface FetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS
  payload: {
    data: object
  }
}

const fetchDataSuccess = (data: object): FetchDataSuccessAction => ({
  type: FETCH_DATA_SUCCESS,
  payload: {
    data,
  },
})

type CityOfMiamiBudgetAction = FetchDataRequestAction | FetchDataSuccessAction

// Async Thunks
const fetchData = (url: string): AppThunk => async (dispatch) => {
  dispatch(fetchDataRequest())
  const response = await fetch(url)
  const data = await response.json()
  dispatch(fetchDataSuccess(data))
}

// State
enum Status {
  Idle = "idle",
  Loading = "loading",
  Success = "success",
}

interface CityOfMiamiBudgetState {
  status: Status
  data?: object
}

const INITIAL_STATE: CityOfMiamiBudgetState = { status: Status.Idle }

// Reducers
const reduceFetchDataRequest = (
  previousState: CityOfMiamiBudgetState
): CityOfMiamiBudgetState => ({
  ...previousState,
  status: Status.Loading,
})

const reduceFetchDataSuccess = (
  previousState: CityOfMiamiBudgetState,
  action: FetchDataSuccessAction
): CityOfMiamiBudgetState => ({
  ...previousState,
  status: Status.Success,
  data: action.payload,
})

const reducer = (
  previousState = INITIAL_STATE,
  action: CityOfMiamiBudgetAction
): CityOfMiamiBudgetState => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return reduceFetchDataRequest(previousState)
    case FETCH_DATA_SUCCESS:
      return reduceFetchDataSuccess(previousState, action)
    default:
      return previousState
  }
}

// Selectors
const getStatus = (state: RootState) =>
  (state.cityOfMiamiBudget && state.cityOfMiamiBudget.status) || undefined

const getData = (state: RootState) =>
  (state.cityOfMiamiBudget && state.cityOfMiamiBudget.data) || undefined

export default reducer
export { fetchData, getStatus, getData, Status }
