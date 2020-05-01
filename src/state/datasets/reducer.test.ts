import { Status } from "./types"
import reducer from "./reducer"
import { fetchDatasetStart, fetchDatasetSuccess } from "./actions"

describe("reducer", () => {
  it("should return the correct initial state", () => {
    const result = reducer(undefined, { type: "" })

    expect(result).toEqual({ index: {} })
  })

  describe("`fetchDatasetStart` action", () => {
    it("transitions from uninitialized to the pending status", () => {
      const previousState = { index: {} }
      const action = fetchDatasetStart("test/dataset/id")

      const result = reducer(previousState, action)

      expect(result).toEqual({
        index: {
          "test/dataset/id": { status: Status.Pending },
        },
      })
    })

    it("transitions from the idle status to the pending status", () => {
      const previousState = {
        index: {
          "test/dataset/id": { status: Status.Idle },
        },
      }
      const action = fetchDatasetStart("test/dataset/id")

      const result = reducer(previousState, action)

      expect(result).toEqual({
        index: {
          "test/dataset/id": { status: Status.Pending },
        },
      })
    })
  })

  describe("`fetchDatasetSuccess` action", () => {
    it("transitions from the pending status to the fulfilled status, including the data", () => {
      const previousState = {
        index: {
          "test/dataset/id": { status: Status.Pending },
        },
      }
      const action = fetchDatasetSuccess({
        datasetId: "test/dataset/id",
        data: { a: "apples", b: "bananas" },
      })

      const result = reducer(previousState, action)

      expect(result).toEqual({
        index: {
          "test/dataset/id": {
            status: Status.Fulfilled,
            data: { a: "apples", b: "bananas" },
          },
        },
      })
    })
  })
})
