/**
 * Configures and exports the redux store and other top-level Redux resources.
 * @packageDocumentation
 */

import { configureStore, combineReducers } from "@reduxjs/toolkit"
import branchPatterns from "./branchPatterns/reducer"

const rootReducer = combineReducers({ branchPatterns })
const store = configureStore({ reducer: rootReducer })

export default store
export type RootState = ReturnType<typeof rootReducer>
export type Selector<ReturnType> = (state: RootState) => ReturnType | undefined
