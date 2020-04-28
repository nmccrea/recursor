import reducer, { Status } from "./reducer"
import { fetchDataStart, fetchDataSuccess } from "./actions"

describe("reducer", () => {
  it("should return the correct initial state", () => {
    const result = reducer(undefined, { type: "" })

    expect(result).toEqual({ status: Status.Idle })
  })

  describe("`fetchDataStart` action", () => {
    it("should transition to the pending status", () => {
      const previousState = { status: Status.Idle }
      const action = fetchDataStart()

      const result = reducer(previousState, action)

      expect(result).toEqual({ status: Status.Pending })
    })
  })

  describe("`fetchDataSuccess` action", () => {
    it("should transition to the fulfilled status and add the data to the state", () => {
      const previousState = { status: Status.Pending }
      const action = fetchDataSuccess({ a: "apples", b: "bananas" })

      const result = reducer(previousState, action)

      expect(result).toEqual({
        status: Status.Fulfilled,
        data: { a: "apples", b: "bananas" },
      })
    })
  })
})
