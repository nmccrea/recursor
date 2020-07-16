import React from "react"
import "jest-styled-components"
import { Provider } from "react-redux"
import { render } from "@testing-library/react"
import { createStore, RootState } from "state/store"
import { Similarity } from "state/similarities/types"
import Recursion from "."

const SIMILARITY_A: Similarity = {
  id: "test/a",
  translation: 0.994,
  scale: 0.543,
  angle: -3.012 * Math.PI,
  depth: 2,
  color: "green",
}

const SIMILARITY_B: Similarity = {
  id: "test/b",
  translation: 1.042,
  scale: 0.452,
  angle: 1.902 * Math.PI,
  depth: 1,
  color: "red",
}

const TEST_STATE: RootState = {
  similarities: {
    ids: [SIMILARITY_A.id, SIMILARITY_B.id],
    entities: {
      [SIMILARITY_A.id]: SIMILARITY_A,
      [SIMILARITY_B.id]: SIMILARITY_B,
    },
  },
}

describe("`<Recursion />`", () => {
  it("correctly renders the tree with the appropriate depth", () => {
    const { container } = render(
      <Provider store={createStore(TEST_STATE)}>
        <Recursion {...SIMILARITY_A} currentDepth={0} />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })

  it("renders nothing when the `currentDepth` is equal to the given similarity's depth", () => {
    const { container } = render(
      <Provider store={createStore(TEST_STATE)}>
        <Recursion {...SIMILARITY_A} currentDepth={2} />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })
})
