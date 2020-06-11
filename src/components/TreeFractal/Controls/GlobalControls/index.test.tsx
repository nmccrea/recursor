import React from "react"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { createStore } from "../../../../state/store"
import GlobalControls from "."

describe("`<GlobalControls />`", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Provider store={createStore()}>
        <GlobalControls />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })
})
