/**
 * Implements Gatsby's `wrapRootElement` API to enable `react-redux` in the browser.
 * @packageDocumentation
 */

import React from "react"
import { Provider as ReduxProvider } from "react-redux"
import { createStore } from "./store"

interface Arg {
  element: React.ReactNode
}

/**
 * Wraps an element in a `react-redux` `<Provider />` supplying the application's Redux store.
 */
export const wrapWithReduxProvider = ({ element }: Arg) => (
  <ReduxProvider store={createStore()}>{element}</ReduxProvider>
)
