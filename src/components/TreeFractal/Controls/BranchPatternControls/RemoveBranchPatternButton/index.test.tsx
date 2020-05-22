import React from "react"
import * as reactRedux from "react-redux"
import { render, fireEvent, getByText } from "@testing-library/react"
import RemoveBranchPatternButton from "."

describe("`<RemoveBranchPatternButton />`", () => {
  it("renders correctly", () => {
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(jest.fn())

    const { container } = render(
      <RemoveBranchPatternButton branchPatternId={"test/subject"} />
    )

    expect(container).toMatchSnapshot()
  })

  it("responds correctly to a click event", () => {
    const mockDispatch = jest.fn()
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(mockDispatch)
    const { container } = render(
      <RemoveBranchPatternButton branchPatternId={"test/subject"} />
    )

    fireEvent.click(getByText(container, "Remove"))

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "branchPatterns/REMOVE_ONE",
      payload: "test/subject",
    })
  })
})
