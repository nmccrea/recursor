import configureMockStore from "redux-mock-store"
import fetchMock from "fetch-mock"
import thunk from "redux-thunk"
import { AppThunkDispatch } from "../store"
import { Status } from "./types"
import { fetchDataStart, fetchDataSuccess } from "./actions"
import { fetchData } from "./async"

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("fetchData()", () => {
  afterEach(() => {
    fetchMock.reset()
  })

  describe("success", () => {
    it("generates the expected sequence of actions", async () => {
      fetchMock.getOnce("/test-url.json", {
        body: { a: "apples", b: "bananas" },
      })
      const store = mockStore({ status: Status.Idle })

      const action = fetchData("/test-url.json")
      await (store.dispatch as AppThunkDispatch)(action)

      expect(store.getActions()).toEqual([
        fetchDataStart(),
        fetchDataSuccess({ a: "apples", b: "bananas" }),
      ])
    })
  })
})
