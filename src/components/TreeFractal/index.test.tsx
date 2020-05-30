import React from "react"
import { Provider } from "react-redux"
import { render } from "@testing-library/react"
import { createStore } from "../../state/store"
import TreeFractal from "."

jest.mock("@reduxjs/toolkit", () => {
  let fakeId = 0
  return {
    ...jest.requireActual("@reduxjs/toolkit"),
    nanoid: () => `fake-nanoid-unique-id-${fakeId++}`,
  }
})

describe("`<TreeFractal />`", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Provider store={createStore()}>
        <TreeFractal />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })
})
