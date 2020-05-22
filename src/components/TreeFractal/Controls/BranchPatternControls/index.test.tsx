import React from "react"
import * as reactRedux from "react-redux"
import { render } from "@testing-library/react"
import BranchPatternControls from "."

describe("`<BranchPatternControls />`", () => {
  it("renders correctly", () => {
    jest.spyOn(reactRedux, "useSelector").mockReturnValue(0.4836)
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(jest.fn())

    const { container } = render(
      <BranchPatternControls branchPatternId={"test/subject"} />
    )

    expect(container).toMatchSnapshot()
  })
})
