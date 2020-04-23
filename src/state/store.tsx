/**
 * Configures and exports the redux store and other top-level Redux resources.
 * @packageDocumentation
 */

import { combineReducers, configureStore } from "@reduxjs/toolkit"

const rootReducer = combineReducers({})
export type RootState = ReturnType<typeof rootReducer>
export default configureStore({ reducer: rootReducer })
