import { formatNumber, formatAngle } from "./valueFormatter"

describe("`numberFormatter()`", () => {
  it("returns a correctly-formatted string", () => {
    const result = [
      formatNumber(0),
      formatNumber(1),
      formatNumber(-1),
      formatNumber(1.1),
      formatNumber(1.5),
      formatNumber(1.49),
      formatNumber(-1.5),
    ]

    expect(result).toEqual(["0", "1", "-1", "1", "2", "1", "-2"])
  })

  it("returns a string formatted to the given precision", () => {
    const result = [
      formatNumber(1, { precision: 2 }),
      formatNumber(111.11, { precision: 0 }),
      formatNumber(111.111, { precision: 2 }),
      formatNumber(11.1, { precision: 8 }),
      formatNumber(1.5, { precision: 0 }),
      formatNumber(1.5, { precision: 1 }),
      formatNumber(-1.999, { precision: 3 }),
      formatNumber(-1.9995, { precision: 3 }),
    ]

    expect(result).toEqual([
      "1.00",
      "111",
      "111.11",
      "11.10000000",
      "2",
      "1.5",
      "-1.999",
      "-2.000",
    ])
  })

  it("returns a string with the given suffix appended", () => {
    const result = [
      formatNumber(12, { suffix: "kg" }),
      formatNumber(2.2, { suffix: "Mb", precision: 2 }),
      formatNumber(1, { suffix: " banana" }),
    ]

    expect(result).toEqual(["12kg", "2.20Mb", "1 banana"])
  })

  it("returns an appropriate string when the given value is undefined", () => {
    const result = [
      formatNumber(),
      formatNumber(undefined, { precision: 2, suffix: " beans" }),
    ]

    expect(result).toEqual(["NO DATA", "NO DATA"])
  })
})

describe("`formatAngle()`", () => {
  it("returns the angle in units of π radians", () => {
    const result = [
      formatAngle(0),
      formatAngle(3.141),
      formatAngle(4.188),
      formatAngle(-6.283),
    ]

    expect(result).toEqual([
      "0.00π rad",
      "1.00π rad",
      "1.33π rad",
      "-2.00π rad",
    ])
  })

  it("returns a string formatted to the given precision", () => {
    const result = [
      formatAngle(0, { precision: 2 }),
      formatAngle(3.141, { precision: 1 }),
      formatAngle(4.36, { precision: 2 }),
      formatAngle(-5.52606, { precision: 5 }),
    ]

    expect(result).toEqual([
      "0.00π rad",
      "1.0π rad",
      "1.39π rad",
      "-1.75900π rad",
    ])
  })

  it("returns an appropriate string when the given value is undefined", () => {
    const result = [formatAngle(), formatAngle(undefined, { precision: 3 })]

    expect(result).toEqual(["NO DATA", "NO DATA"])
  })
})
