import React from "react"
import { Provider } from "react-redux"
import { render } from "@testing-library/react"
import { createStore, RootState } from "../../../../state/store"
import SimilarityControls from "."

describe("`<SimilarityControls />`", () => {
  it("renders correctly", () => {
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
        <SimilarityControls similarityId={"test/subject"} />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })
})
