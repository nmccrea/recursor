import { fetchDataStart, fetchDataSuccess } from "./actions"

describe("fetchDataStart()", () => {
  it("should return an action object to start the fetch", () => {
    const result = fetchDataStart()

    expect(result).toEqual({
      type: fetchDataStart.type,
    })
  })
})

describe("fetchDataSuccess()", () => {
  it("should return success action containing the fetched data", () => {
    const result = fetchDataSuccess({ a: "apples", b: "bananas" })

    expect(result).toEqual({
      type: fetchDataSuccess.type,
      payload: { a: "apples", b: "bananas" },
    })
  })
})
