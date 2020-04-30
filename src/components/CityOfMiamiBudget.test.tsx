import React from "react"
import * as reactRedux from "react-redux"
import { render, act, fireEvent, getByText } from "@testing-library/react"
import { Status } from "../state/cityOfMiamiBudget/types"
import * as asyncActions from "../state/cityOfMiamiBudget/async"
import CityOfMiamiBudget from "./CityOfMiamiBudget"

describe("<CityOfMiamiBudget />", () => {
  it("renders correctly when status is idle", () => {
    jest.spyOn(reactRedux, "useSelector").mockReturnValue(Status.Idle)
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(jest.fn())

    const { container } = render(<CityOfMiamiBudget />)

    expect(container).toMatchSnapshot()
  })

  it("renders correctly when status is pending", () => {
    jest.spyOn(reactRedux, "useSelector").mockReturnValue(Status.Pending)
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(jest.fn())

    const { container } = render(<CityOfMiamiBudget />)

    expect(container).toMatchSnapshot()
  })

  it("renders correctly when status is fulfilled", () => {
    jest
      .spyOn(reactRedux, "useSelector")
      .mockReturnValueOnce(Status.Fulfilled)
      .mockReturnValueOnce({ a: "apples", b: "bananas" })
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(jest.fn())

    const { container } = render(<CityOfMiamiBudget />)

    expect(container).toMatchSnapshot()
  })

  it("dispatches the data fetch when the fetch button is clicked", () => {
    const mockDispatch = jest.fn()
    const mockThunk = jest.fn()
    jest.spyOn(reactRedux, "useSelector").mockReturnValue(Status.Idle)
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(mockDispatch)
    jest.spyOn(asyncActions, "fetchData").mockImplementation(() => mockThunk)
    const { container } = render(<CityOfMiamiBudget />)
    const button = getByText(container, "Fetch Data!")

    act(() => {
      fireEvent.click(button)
    })

    expect(mockDispatch).toHaveBeenCalledWith(mockThunk)
  })
})
