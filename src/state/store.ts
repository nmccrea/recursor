/**
 * Configures and exports the Redux store and other top-level Redux resources.
 * @packageDocumentation
 */

import { configureStore, combineReducers } from "@reduxjs/toolkit"
import similarities from "./similarities/reducer"

const rootReducer = combineReducers({ similarities })
const createStore = (initialState?: RootState) =>
  configureStore({ reducer: rootReducer, preloadedState: initialState })

export { createStore }
export type RootState = ReturnType<typeof rootReducer>
export type Selector<ReturnType> = (state: RootState) => ReturnType | undefined
