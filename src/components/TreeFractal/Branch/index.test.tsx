import React from "react"
import { render } from "@testing-library/react"
import { BranchPattern } from "../../../state/branchPatterns/types"
import Branch from "."

const MOCK_BRANCH_PATTERNS: { [id: string]: BranchPattern } = {
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

jest.mock("../../../state/branchPatterns/selectors", () => ({
  selectAll: () => Object.values(MOCK_BRANCH_PATTERNS),
}))

jest.mock("react-redux", () => ({
  useSelector: (selector: Function) => selector(),
}))

describe("<Branch />", () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it("correctly renders the tree with the appropriate depth", () => {
    const branchPattern = MOCK_BRANCH_PATTERNS["test/a"]

    const { container } = render(
      <Branch branchPattern={branchPattern} currentDepth={0} />
    )

    expect(container).toMatchSnapshot()
  })

  it("renders nothing when the `currentDepth` is equal to the given branch pattern's depth", () => {
    const branchPattern = MOCK_BRANCH_PATTERNS["test/b"]

    const { container } = render(
      <Branch branchPattern={branchPattern} currentDepth={2} />
    )

    expect(container).toMatchSnapshot()
  })
})
