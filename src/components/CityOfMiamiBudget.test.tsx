import React from "react"
import * as reactRedux from "react-redux"
import { render } from "@testing-library/react"
import { Status } from "../state/cityOfMiamiBudget/types"
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
})
