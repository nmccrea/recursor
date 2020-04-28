/**
 * Implements Gatsby's `wrapRootElement` API.
 * @packageDocumentation
 */

import React from "react"
import { Provider as ReduxProvider } from "react-redux"
import store from "./store"

interface Arg {
  element: React.ReactNode
}
export const wrapWithReduxProvider = ({ element }: Arg) => (
  <ReduxProvider store={store}>{element}</ReduxProvider>
)
