import React from "react"
import { Provider } from "react-redux"
import { render } from "@testing-library/react"
import { createStore, RootState } from "../../../state/store"
import FractalView from "."

describe("`<FractalView />`", () => {
  it("renders correctly", () => {
    const state: RootState = {
      similarities: {
        ids: ["test/a", "test/b"],
        entities: {
          "test/a": {
            id: "test/a",
            translation: 0.994,
            scale: 0.543,
            angle: -3.012 * Math.PI,
            depth: 3,
            color: "green",
          },
          "test/b": {
            id: "test/b",
            translation: 1.042,
            scale: 0.452,
            angle: 1.902 * Math.PI,
            depth: 2,
            color: "red",
          },
        },
      },
    }

    const { container } = render(
      <Provider store={createStore(state)}>
        <FractalView />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })
})
