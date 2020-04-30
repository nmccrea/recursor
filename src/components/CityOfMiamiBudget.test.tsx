import React from "react"
import * as reactRedux from "react-redux"
import { render } from "@testing-library/react"
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

  it("dispatches the data fetch if the status is idle", () => {
    const mockDispatch = jest.fn()
    const mockThunk = jest.fn()
    jest.spyOn(reactRedux, "useSelector").mockReturnValue(Status.Idle)
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(mockDispatch)
    jest.spyOn(asyncActions, "fetchData").mockReturnValue(mockThunk)

    render(<CityOfMiamiBudget />)

    expect(mockDispatch).toHaveBeenCalledWith(mockThunk)
  })

  it("does not dispatch the data fetch if the status is pending", () => {
    const mockDispatch = jest.fn()
    jest.spyOn(reactRedux, "useSelector").mockReturnValue(Status.Pending)
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(mockDispatch)

    render(<CityOfMiamiBudget />)

    expect(mockDispatch).not.toHaveBeenCalled()
  })

  it("does not dispatch the data fetch if the status is fulfilled", () => {
    const mockDispatch = jest.fn()
    jest.spyOn(reactRedux, "useSelector").mockReturnValue(Status.Fulfilled)
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(mockDispatch)

    render(<CityOfMiamiBudget />)

    expect(mockDispatch).not.toHaveBeenCalled()
  })
})
