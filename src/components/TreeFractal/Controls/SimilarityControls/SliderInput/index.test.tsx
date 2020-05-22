import React from "react"
import * as reactRedux from "react-redux"
import { render, fireEvent, getByLabelText } from "@testing-library/react"
import { getTranslationSetterFor } from "../../../../../state/similarities/actions"
import SliderInput from "."

describe("<SliderInput />", () => {
  it("renders correctly based on the value returned by the selector", () => {
    jest
      .spyOn(reactRedux, "useSelector")
      .mockImplementation((mockSelector) => mockSelector({}))
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(jest.fn())

    const { container } = render(
      <SliderInput
        selector={jest.fn(() => 0.5636)}
        actionCreator={jest.fn()}
        label="Test Subject"
        min={0.422}
        max={0.744}
        step={0.001}
      />
    )

    expect(container).toMatchSnapshot()
  })

  it("responds correctly to a change event", () => {
    const mockDispatch = jest.fn()
    jest.spyOn(reactRedux, "useSelector").mockReturnValue(0)
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(mockDispatch)
    const { container } = render(
      <SliderInput
        selector={jest.fn()}
        actionCreator={getTranslationSetterFor("test/subject")}
        label="Test Input"
        min={0}
        max={10}
        step={0.1}
      />
    )

    fireEvent.change(getByLabelText(container, "Test Input"), {
      target: { value: 0.5582 },
    })

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "similarities/SET_TRANSLATION",
      payload: {
        id: "test/subject",
        changes: { translation: 0.5582 },
      },
    })
  })
})
