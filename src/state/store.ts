/**
 * Configures and exports the redux store and other top-level Redux resources.
 * @packageDocumentation
 */

import { configureStore, combineReducers } from "@reduxjs/toolkit"
import cityOfMiamiBudget from "./cityOfMiamiBudget/slice"

const rootReducer = combineReducers({ cityOfMiamiBudget })
const store = configureStore({ reducer: rootReducer })

export default store
export type RootState = ReturnType<typeof rootReducer>
