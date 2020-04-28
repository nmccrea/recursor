import configureMockStore from "redux-mock-store"
import fetchMock from "fetch-mock"
import thunk from "redux-thunk"
import { Status } from "./reducer"
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
      // TODO: Type this statement correctly.
      // `dispatch` expects an action with a `type` field but `ThunkAction`
      // does not have one.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await store.dispatch<any>(action)

      expect(store.getActions()).toEqual([
        fetchDataStart(),
        fetchDataSuccess({ a: "apples", b: "bananas" }),
      ])
    })
  })
})
