import React from "react"
import { Provider } from "react-redux"
import { render, fireEvent, getByText } from "@testing-library/react"
import { createStore, RootState } from "../../../../../state/store"
import RemoveSimilarityButton from "."

describe("`<RemoveSimilarityButton />`", () => {
  it("renders correctly", () => {
    const state: RootState = {
      similarities: {
        ids: ["test/subject"],
        entities: {
          "test/subject": {
            id: "test/subject",
            translation: 0.7345,
            scale: 0.1672,
            angle: 0.7532,
            depth: 6,
            color: "violet",
          },
        },
      },
    }

    const { container } = render(
      <Provider store={createStore(state)}>
        <RemoveSimilarityButton similarityId={"test/subject"} />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })

  it("responds correctly to a click event", () => {
    const state: RootState = {
      similarities: {
        ids: ["test/subject", "test/control"],
        entities: {
          "test/subject": {
            id: "test/subject",
            translation: 0.7345,
            scale: 0.1672,
            angle: 0.7532,
            depth: 6,
            color: "violet",
          },
          "test/control": {
            id: "test/control",
            translation: 0.2468,
            scale: 0.2856,
            angle: 0.224,
            depth: 7,
            color: "yellow",
          },
        },
      },
    }
    const store = createStore(state)
    const { container } = render(
      <Provider store={store}>
        <RemoveSimilarityButton similarityId={"test/subject"} />
      </Provider>
    )

    fireEvent.click(getByText(container, "Remove"))

    expect(store.getState()).toEqual<RootState>({
      similarities: {
        ids: ["test/control"],
        entities: {
          "test/control": {
            id: "test/control",
            translation: 0.2468,
            scale: 0.2856,
            angle: 0.224,
            depth: 7,
            color: "yellow",
          },
        },
      },
    })
  })
})
