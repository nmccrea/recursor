import React from "react"
import { render } from "@testing-library/react"
import * as reactRedux from "react-redux"
import { RootState } from "../../../state/store"
import Controls from "."

describe("`<Controls />`", () => {
  it("renders correctly when there are no existing similarities", () => {
    const mockState: RootState = { similarities: { ids: [], entities: {} } }
    jest
      .spyOn(reactRedux, "useSelector")
      .mockImplementation((selector) => selector(mockState))
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(jest.fn())

    const { container } = render(<Controls />)

    expect(container).toMatchSnapshot()
  })

  it("renders correctly when there is one existing similarity", () => {
    const mockState: RootState = {
      similarities: {
        ids: ["test/subject"],
        entities: {
          "test/subject": {
            id: "test/subject",
            translation: 0.4663,
            scale: 0.7791,
            angle: 0.1385,
            depth: 3,
            color: "gray",
          },
        },
      },
    }
    jest
      .spyOn(reactRedux, "useSelector")
      .mockImplementation((selector) => selector(mockState))

    const { container } = render(<Controls />)

    expect(container).toMatchSnapshot()
  })

  it("renders correctly when there are multiple existing similarities.", () => {
    const mockState: RootState = {
      similarities: {
        ids: ["test/a", "test/b"],
        entities: {
          "test/a": {
            id: "test/subject",
            translation: 0.4663,
            scale: 0.7791,
            angle: 0.1385,
            depth: 3,
            color: "gray",
          },
          "test/b": {
            id: "test/b",
            translation: 0.7432,
            scale: 0.7202,
            angle: 0.4692,
            depth: 7,
            color: "brown",
          },
        },
      },
    }
    jest
      .spyOn(reactRedux, "useSelector")
      .mockImplementation((selector) => selector(mockState))

    const { container } = render(<Controls />)

    expect(container).toMatchSnapshot()
  })
})
