import React from "react"
import * as reactRedux from "react-redux"
import { render } from "@testing-library/react"
import SimilarityControls from "."

describe("`<SimilarityControls />`", () => {
  it("renders correctly", () => {
    jest.spyOn(reactRedux, "useSelector").mockReturnValue(0.4836)
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(jest.fn())

    const { container } = render(
      <SimilarityControls similarityId={"test/subject"} />
    )

    expect(container).toMatchSnapshot()
  })
})
