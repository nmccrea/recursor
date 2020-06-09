import React from "react"
import { Provider } from "react-redux"
import { render } from "@testing-library/react"
import { createStore, RootState } from "../state/store"
import TreeFractalPage from "./index"

describe("`<TreeFractalPage />`", () => {
  it("renders correctly when there are no similarities", () => {
    const state: RootState = {
      similarities: { ids: [], entities: {} },
    }

    const { container } = render(
      <Provider store={createStore(state)}>
        <TreeFractalPage />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })

  it("renders correctly when there are existing similarities", () => {
    const state: RootState = {
      similarities: {
        ids: ["test/a", "test/b"],
        entities: {
          "test/a": {
            id: "test/a",
            translation: 0.2298,
            scale: 0.5651,
            angle: 0.1236,
            depth: 2,
            color: "gray",
          },
          "test/b": {
            id: "test/b",
            translation: 0.2134,
            scale: 0.4909,
            angle: 0.0488,
            depth: 2,
            color: "brown",
          },
        },
      },
    }

    const { container } = render(
      <Provider store={createStore(state)}>
        <TreeFractalPage />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })
})
