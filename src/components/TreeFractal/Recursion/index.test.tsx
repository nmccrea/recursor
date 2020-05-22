import React from "react"
import { render } from "@testing-library/react"
import { Similarity } from "../../../state/similarities/types"
import Recursion from "."

const MOCK_SIMILARITIES: { [id: string]: Similarity } = {
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
}

jest.mock("../../../state/similarities/selectors", () => ({
  selectAll: () => Object.values(MOCK_SIMILARITIES),
}))

jest.mock("react-redux", () => ({
  useSelector: (selector: Function) => selector(),
}))

describe("<Recursion />", () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it("correctly renders the tree with the appropriate depth", () => {
    const similarity = MOCK_SIMILARITIES["test/a"]

    const { container } = render(
      <Recursion similarity={similarity} currentDepth={0} />
    )

    expect(container).toMatchSnapshot()
  })

  it("renders nothing when the `currentDepth` is equal to the given similarity's depth", () => {
    const similarity = MOCK_SIMILARITIES["test/b"]

    const { container } = render(
      <Recursion similarity={similarity} currentDepth={2} />
    )

    expect(container).toMatchSnapshot()
  })
})
