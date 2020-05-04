import { AsyncState } from "./types"
import { selectorForAsyncState, selectorForData } from "./selectors"

describe("selectorForAsyncState()", () => {
  it("returns a selector that selects the async state for the indicated dataset", () => {
    const testState = {
      datasets: {
        ids: ["a", "b", "c"],
        entities: {
          a: { id: "a", asyncState: AsyncState.Idle },
          b: { id: "b", asyncState: AsyncState.Pending },
          c: {
            id: "c",
            asyncState: AsyncState.Fulfilled,
            data: { x: "x", y: "y" },
          },
        },
      },
    }

    const results = [
      selectorForAsyncState("a")(testState),
      selectorForAsyncState("b")(testState),
      selectorForAsyncState("c")(testState),
    ]

    expect(results).toEqual([
      AsyncState.Idle,
      AsyncState.Pending,
      AsyncState.Fulfilled,
    ])
  })
})

describe("selectorForData()", () => {
  it("returns a selector that selects the data for the indicated dataset", () => {
    const testState = {
      datasets: {
        ids: ["a", "b", "c"],
        entities: {
          a: { id: "a", asyncState: AsyncState.Idle },
          b: { id: "b", asyncState: AsyncState.Pending },
          c: {
            id: "c",
            asyncState: AsyncState.Fulfilled,
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
