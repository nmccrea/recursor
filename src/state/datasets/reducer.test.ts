import { AsyncState } from "./types"
import reducer from "./reducer"
import { fetchDatasetStart, fetchDatasetSuccess } from "./actions"

describe("reducer", () => {
  it("should return the correct initial state", () => {
    const initialState = reducer(undefined, { type: "" })

    expect(initialState).toEqual({ ids: [], entities: {} })
  })

  describe("`fetchDatasetStart` action", () => {
    it("transitions from uninitialized to the pending async state", () => {
      const previousState = { ids: [], entities: {} }
      const action = fetchDatasetStart("test/dataset")

      const nextState = reducer(previousState, action)

      expect(nextState).toEqual({
        ids: ["test/dataset"],
        entities: {
          "test/dataset": {
            id: "test/dataset",
            asyncState: AsyncState.Pending,
          },
        },
      })
    })

    it("transitions from the idle async state to the pending async state", () => {
      const previousState = {
        ids: ["test/dataset"],
        entities: {
          "test/dataset": {
            id: "test/dataset",
            asyncState: AsyncState.Idle,
          },
        },
      }
      const action = fetchDatasetStart("test/dataset")

      const nextState = reducer(previousState, action)

      expect(nextState).toEqual({
        ids: ["test/dataset"],
        entities: {
          "test/dataset": {
            id: "test/dataset",
            asyncState: AsyncState.Pending,
          },
        },
      })
    })
  })

  describe("`fetchDatasetSuccess` action", () => {
    it("transitions from the pending async state to the fulfilled async state, including the data", () => {
      const previousState = {
        ids: ["test/dataset"],
        entities: {
          "test/dataset": {
            id: "test/dataset",
            asyncState: AsyncState.Pending,
          },
        },
      }
      const action = fetchDatasetSuccess({
        id: "test/dataset",
        data: { a: "apples", b: "bananas" },
      })

      const nextState = reducer(previousState, action)

      expect(nextState).toEqual({
        ids: ["test/dataset"],
        entities: {
          "test/dataset": {
            id: "test/dataset",
            asyncState: AsyncState.Fulfilled,
            data: { a: "apples", b: "bananas" },
          },
        },
      })
    })
  })
})
