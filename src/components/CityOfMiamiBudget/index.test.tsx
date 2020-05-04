import React from "react"
import * as reactRedux from "react-redux"
import { render } from "@testing-library/react"
import { AsyncState } from "../../state/datasets/types"
import * as asyncActions from "../../state/datasets/async"
import CityOfMiamiBudget from "."

describe("<CityOfMiamiBudget />", () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it("renders correctly when status is idle", () => {
    jest.spyOn(reactRedux, "useSelector").mockReturnValue(AsyncState.Idle)
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(jest.fn())

    const { container } = render(<CityOfMiamiBudget />)

    expect(container).toMatchSnapshot()
  })

  it("renders correctly when status is pending", () => {
    jest.spyOn(reactRedux, "useSelector").mockReturnValue(AsyncState.Pending)
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(jest.fn())

    const { container } = render(<CityOfMiamiBudget />)

    expect(container).toMatchSnapshot()
  })

  it("renders correctly when status is fulfilled", () => {
    jest
      .spyOn(reactRedux, "useSelector")
      .mockReturnValueOnce(AsyncState.Fulfilled)
      .mockReturnValueOnce({ a: "apples", b: "bananas" })
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(jest.fn())

    const { container } = render(<CityOfMiamiBudget />)

    expect(container).toMatchSnapshot()
  })

  it("dispatches the data fetch if the status is undefined", () => {
    const mockDispatch = jest.fn()
    const mockThunk = jest.fn()
    jest.spyOn(reactRedux, "useSelector").mockReturnValue(undefined)
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(mockDispatch)
    jest.spyOn(asyncActions, "fetchDataset").mockReturnValue(mockThunk)

    render(<CityOfMiamiBudget />)

    expect(mockDispatch).toHaveBeenCalledWith(mockThunk)
  })

  it("dispatches the data fetch if the status is idle", () => {
    const mockDispatch = jest.fn()
    const mockThunk = jest.fn()
    jest.spyOn(reactRedux, "useSelector").mockReturnValue(AsyncState.Idle)
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(mockDispatch)
    jest.spyOn(asyncActions, "fetchDataset").mockReturnValue(mockThunk)

    render(<CityOfMiamiBudget />)

    expect(mockDispatch).toHaveBeenCalledWith(mockThunk)
  })

  it("does not dispatch the data fetch if the status is pending", () => {
    const mockDispatch = jest.fn()
    jest.spyOn(reactRedux, "useSelector").mockReturnValue(AsyncState.Pending)
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(mockDispatch)

    render(<CityOfMiamiBudget />)

    expect(mockDispatch).not.toHaveBeenCalled()
  })

  it("does not dispatch the data fetch if the status is fulfilled", () => {
    const mockDispatch = jest.fn()
    jest.spyOn(reactRedux, "useSelector").mockReturnValue(AsyncState.Fulfilled)
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(mockDispatch)

    render(<CityOfMiamiBudget />)

    expect(mockDispatch).not.toHaveBeenCalled()
  })
})
