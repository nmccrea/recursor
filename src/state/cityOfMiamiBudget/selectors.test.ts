import { Status } from "./types"
import { getStatus, getData } from "./selectors"

describe("getStatus", () => {
  it("should return the value of the status field", () => {
    const result = getStatus({
      cityOfMiamiBudget: { status: Status.Fulfilled },
    })

    expect(result).toBe(Status.Fulfilled)
  })
})

describe("getData", () => {
  it("should return the value of the data field", () => {
    const data: object = { a: "apples", b: "bananas", c: "cornbread" }

    const result = getData({
      cityOfMiamiBudget: { data, status: Status.Fulfilled },
    })

    expect(result).toBe(data)
  })
})
