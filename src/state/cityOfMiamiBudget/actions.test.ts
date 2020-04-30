import { fetchDatasetStart, fetchDatasetSuccess } from "./actions"

describe("fetchDatasetStart()", () => {
  it("should return an action object to start the fetch", () => {
    const result = fetchDatasetStart()

    expect(result).toEqual({
      type: fetchDatasetStart.type,
    })
  })
})

describe("fetchDatasetSuccess()", () => {
  it("should return success action containing the fetched data", () => {
    const result = fetchDatasetSuccess({ a: "apples", b: "bananas" })

    expect(result).toEqual({
      type: fetchDatasetSuccess.type,
      payload: { a: "apples", b: "bananas" },
    })
  })
})
