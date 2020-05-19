import React from "react"
import { render } from "@testing-library/react"
import { BranchPattern } from "../../state/branchPatterns/types"
import TreeFractal from "."

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

jest.mock("../../state/branchPatterns/selectors", () => ({
  selectAll: () => Object.values(MOCK_BRANCH_PATTERNS),
}))

jest.mock("react-redux", () => ({
  useSelector: (selector: Function) => selector(),
}))

describe("<TreeFractal />", () => {
  it("renders correctly", () => {
    const { container } = render(<TreeFractal />)

    expect(container).toMatchSnapshot()
  })
})
