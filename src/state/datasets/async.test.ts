import configureMockStore from "redux-mock-store"
import fetchMock from "fetch-mock"
import thunk from "redux-thunk"
import { AppThunkDispatch } from "../store"
import { AsyncState } from "./types"
import { fetchDatasetStart, fetchDatasetSuccess } from "./actions"
import { fetchDataset } from "./async"

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("fetchDataset()", () => {
  afterEach(() => {
    fetchMock.reset()
  })

  describe("success", () => {
    it("generates the expected sequence of actions", async () => {
      fetchMock.getOnce("/test-url.json", {
        body: { a: "apples", b: "bananas" },
      })
      const store = mockStore({ status: AsyncState.Idle })

      const action = fetchDataset("/test-url.json", "test/dataset")
      await (store.dispatch as AppThunkDispatch)(action)

      expect(store.getActions()).toEqual([
        fetchDatasetStart("test/dataset"),
        fetchDatasetSuccess({
          id: "test/dataset",
          data: { a: "apples", b: "bananas" },
        }),
      ])
    })
  })
})
