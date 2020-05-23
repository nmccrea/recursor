import React from "react"
import { render, fireEvent, getByText } from "@testing-library/react"
import * as reactRedux from "react-redux"
import { AddOneAction } from "../../../../state/similarities/actions"
import AddsimilarityButton from "."

describe("`<AddSimilarityButton />`", () => {
  it("renders correctly", () => {
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(jest.fn())

    const { container } = render(<AddsimilarityButton />)

    expect(container).toMatchSnapshot()
  })

  it("responds correctly to a click event", () => {
    const mockDispatch = jest.fn()
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(mockDispatch)
    const { container } = render(<AddsimilarityButton />)

    fireEvent.click(getByText(container, "Add Similarity"))

    expect(mockDispatch).toHaveBeenCalledWith<[AddOneAction]>({
      type: "similarities/ADD_ONE",
      payload: {
        translation: 1,
        scale: 0.9,
        angle: 1.23425,
        depth: 4,
        color: "black",
      },
    })
  })
})
