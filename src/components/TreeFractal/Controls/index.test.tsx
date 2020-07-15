import React from "react"
import "jest-styled-components"
import { Provider } from "react-redux"
import { render } from "@testing-library/react"
import { createStore, RootState } from "state/store"
import Controls from "."

describe("`<Controls />`", () => {
  it("renders correctly when there are no existing similarities", () => {
    const state: RootState = { similarities: { ids: [], entities: {} } }

    const { container } = render(
      <Provider store={createStore(state)}>
        <Controls />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })

  it("renders correctly when there is one existing similarity", () => {
    const state: RootState = {
      similarities: {
        ids: ["test/subject"],
        entities: {
          "test/subject": {
            id: "test/subject",
            translation: 0.4663,
            scale: 0.7791,
            angle: 0.1385,
            depth: 3,
            color: "gray",
          },
        },
      },
    }

    const { container } = render(
      <Provider store={createStore(state)}>
        <Controls />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })

  it("renders correctly when there are multiple existing similarities.", () => {
    const state: RootState = {
      similarities: {
        ids: ["test/a", "test/b"],
        entities: {
          "test/a": {
            id: "test/subject",
            translation: 0.4663,
            scale: 0.7791,
            angle: 0.1385,
            depth: 3,
            color: "gray",
          },
          "test/b": {
            id: "test/b",
            translation: 0.7432,
            scale: 0.7202,
            angle: 0.4692,
            depth: 7,
            color: "brown",
          },
        },
      },
    }

    const { container } = render(
      <Provider store={createStore(state)}>
        <Controls />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })
})
