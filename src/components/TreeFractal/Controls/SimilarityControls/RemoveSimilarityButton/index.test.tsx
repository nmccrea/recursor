import React from "react"
import * as reactRedux from "react-redux"
import { render, fireEvent, getByText } from "@testing-library/react"
import { RemoveOneAction } from "../../../../../state/similarities/actions"
import RemoveSimilarityButton from "."

describe("`<RemoveSimilarityButton />`", () => {
  it("renders correctly", () => {
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(jest.fn())

    const { container } = render(
      <RemoveSimilarityButton similarityId={"test/subject"} />
    )

    expect(container).toMatchSnapshot()
  })

  it("responds correctly to a click event", () => {
    const mockDispatch = jest.fn()
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(mockDispatch)
    const { container } = render(
      <RemoveSimilarityButton similarityId={"test/subject"} />
    )

    fireEvent.click(getByText(container, "Remove"))

    expect(mockDispatch).toHaveBeenCalledWith<[RemoveOneAction]>({
      type: "similarities/REMOVE_ONE",
      payload: "test/subject",
    })
  })
})
