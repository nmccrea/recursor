import { fetchDatasetStart, fetchDatasetSuccess } from "./actions"

describe("fetchDatasetStart()", () => {
  it("returns an action object to start the fetch", () => {
    const result = fetchDatasetStart("test/dataset")

    expect(result).toEqual({
      type: fetchDatasetStart.type,
      payload: "test/dataset",
    })
  })
})

describe("fetchDatasetSuccess()", () => {
  it("returns success action containing the fetched data", () => {
    const result = fetchDatasetSuccess({
      id: "test/dataset",
      data: { a: "apples", b: "bananas" },
    })

    expect(result).toEqual({
      type: fetchDatasetSuccess.type,
      payload: {
        id: "test/dataset",
        data: { a: "apples", b: "bananas" },
      },
    })
  })
})
