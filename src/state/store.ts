/**
 * Configures and exports the redux store and other top-level Redux resources.
 * @packageDocumentation
 */

import { configureStore, combineReducers } from "@reduxjs/toolkit"
import similarities from "./similarities/reducer"

const rootReducer = combineReducers({ similarities })
const createStore = () => configureStore({ reducer: rootReducer })

export { createStore }
export type RootState = ReturnType<typeof rootReducer>
export type Selector<ReturnType> = (state: RootState) => ReturnType | undefined
