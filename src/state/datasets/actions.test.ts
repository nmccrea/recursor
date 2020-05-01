import { fetchDatasetStart, fetchDatasetSuccess } from "./actions"

describe("fetchDatasetStart()", () => {
  it("returns an action object to start the fetch", () => {
    const result = fetchDatasetStart("test/dataset/id")

    expect(result).toEqual({
      type: fetchDatasetStart.type,
      payload: "test/dataset/id",
    })
  })
})

describe("fetchDatasetSuccess()", () => {
  it("returns success action containing the fetched data", () => {
    const result = fetchDatasetSuccess({
      datasetId: "test/dataset/id",
      data: { a: "apples", b: "bananas" },
    })

    expect(result).toEqual({
      type: fetchDatasetSuccess.type,
      payload: {
        datasetId: "test/dataset/id",
        data: { a: "apples", b: "bananas" },
      },
    })
  })
})
