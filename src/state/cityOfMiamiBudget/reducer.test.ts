import { Status } from "./types"
import reducer from "./reducer"
import { fetchDatasetStart, fetchDatasetSuccess } from "./actions"

describe("reducer", () => {
  it("should return the correct initial state", () => {
    const result = reducer(undefined, { type: "" })

    expect(result).toEqual({ status: Status.Idle })
  })

  describe("`fetchDatasetStart` action", () => {
    it("should transition to the pending status", () => {
      const previousState = { status: Status.Idle }
      const action = fetchDatasetStart()

      const result = reducer(previousState, action)

      expect(result).toEqual({ status: Status.Pending })
    })
  })

  describe("`fetchDatasetSuccess` action", () => {
    it("should transition to the fulfilled status and add the data to the state", () => {
      const previousState = { status: Status.Pending }
      const action = fetchDatasetSuccess({ a: "apples", b: "bananas" })

      const result = reducer(previousState, action)

      expect(result).toEqual({
        status: Status.Fulfilled,
        data: { a: "apples", b: "bananas" },
      })
    })
  })
})
