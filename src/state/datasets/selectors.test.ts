import { Status } from "./types"
import { selectorForStatus, selectorForData } from "./selectors"

describe("selectorForStatus()", () => {
  it("returns a selector that selects the status for the indicated dataset", () => {
    const testState = {
      datasets: {
        index: {
          a: { status: Status.Idle },
          b: { status: Status.Pending },
          c: {
            status: Status.Fulfilled,
            data: { x: "x", y: "y" },
          },
        },
      },
    }

    const results = [
      selectorForStatus("a")(testState),
      selectorForStatus("b")(testState),
      selectorForStatus("c")(testState),
    ]

    expect(results).toEqual([Status.Idle, Status.Pending, Status.Fulfilled])
  })
})

describe("selectorForData()", () => {
  it("returns a selector that selects the data for the indicated dataset", () => {
    const testState = {
      datasets: {
        index: {
          a: { status: Status.Idle },
          b: { status: Status.Pending },
          c: {
            status: Status.Fulfilled,
            data: { x: "x", y: "y" },
          },
        },
      },
    }

    const results = [
      selectorForData("a")(testState),
      selectorForData("b")(testState),
      selectorForData("c")(testState),
    ]

    expect(results).toEqual([undefined, undefined, { x: "x", y: "y" }])
  })
})
