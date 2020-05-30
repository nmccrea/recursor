import React from "react"
import { Provider } from "react-redux"
import { render, fireEvent, getByText } from "@testing-library/react"
import { createStore, RootState } from "../../../state/store"
import AddsimilarityButton from "."

jest.mock("@reduxjs/toolkit", () => ({
  ...jest.requireActual("@reduxjs/toolkit"),
  nanoid: () => "fake-nanoid-unique-id",
}))

describe("`<AddSimilarityButton />`", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Provider store={createStore()}>
        <AddsimilarityButton />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })

  it("responds correctly to a click event", () => {
    const state: RootState = { similarities: { ids: [], entities: {} } }
    const store = createStore(state)
    const { container } = render(
      <Provider store={store}>
        <AddsimilarityButton />
      </Provider>
    )

    fireEvent.click(getByText(container, "Add Similarity"))

    expect(store.getState()).toEqual<RootState>({
      similarities: {
        ids: ["fake-nanoid-unique-id"],
        entities: {
          "fake-nanoid-unique-id": {
            id: "fake-nanoid-unique-id",
            translation: 1,
            scale: 0.9,
            angle: 1.23425,
            depth: 4,
            color: "black",
          },
        },
      },
    })
  })
})
