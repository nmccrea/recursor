/**
 * Configures and exports the redux store and other top-level Redux resources.
 * @packageDocumentation
 */

import { Action } from "redux"
import { ThunkAction } from "redux-thunk"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import cityOfMiamiBudget from "./cityOfMiamiBudget/reducer"

const rootReducer = combineReducers({ cityOfMiamiBudget })
const store = configureStore({ reducer: rootReducer })

export default store
export type RootState = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
