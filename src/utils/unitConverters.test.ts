import { degreesFromRadians, radiansFromDegrees } from "./unitConverters"

describe("`degreesFromRadians()`", () => {
  it("converts the given number from radians to degrees", () => {
    const results = [
      degreesFromRadians(0),
      degreesFromRadians(-Math.PI),
      degreesFromRadians(1.5 * Math.PI),
    ]

    expect(results).toEqual([0, -180, 270])
  })
})

describe("`radiansFromDegrees()`", () => {
  it("converts the given number from radians to degrees", () => {
    const results = [
      radiansFromDegrees(0),
      radiansFromDegrees(-180),
      radiansFromDegrees(270),
    ]

    expect(results).toEqual([0, -Math.PI, 1.5 * Math.PI])
  })
})
