import React from "react"
import "jest-styled-components"
import { Provider } from "react-redux"
import { render, fireEvent, getByRole } from "@testing-library/react"
import { createStore, RootState } from "state/store"
import CreateSimilarityButton from "."

jest.mock("@reduxjs/toolkit", () => ({
  ...jest.requireActual("@reduxjs/toolkit"),
  nanoid: () => "fake-nanoid-unique-id",
}))

describe("`<CreateSimilarityButton />`", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Provider store={createStore()}>
        <CreateSimilarityButton />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })

  it("responds correctly to a click event", () => {
    const state: RootState = { similarities: { ids: [], entities: {} } }
    const store = createStore(state)
    const { container } = render(
      <Provider store={store}>
        <CreateSimilarityButton />
      </Provider>
    )

    fireEvent.click(getByRole(container, "button"))

    expect(store.getState()).toEqual<RootState>({
      similarities: {
        ids: ["fake-nanoid-unique-id"],
        entities: {
          "fake-nanoid-unique-id": {
            id: "fake-nanoid-unique-id",
            translation: 1,
            scale: 0.75,
            angle: 0,
            depth: 5,
            color: "black",
          },
        },
      },
    })
  })
})
