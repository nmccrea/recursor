/**
 * Configures and exports the redux store and other top-level Redux resources.
 * @packageDocumentation
 */

import { Action } from "redux"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import datasets from "./datasets/reducer"
import recursionBehaviors from "./recursionBehaviors/reducer"

const rootReducer = combineReducers({ datasets, recursionBehaviors })
const store = configureStore({ reducer: rootReducer })

export default store
export type RootState = ReturnType<typeof rootReducer>
export type AppThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
export type AppThunkDispatch<ReturnType = void> = ThunkDispatch<
  RootState,
  unknown,
  Action<string>
>
