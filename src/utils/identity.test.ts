import identity from "./identity"

describe("`identity()`", () => {
  it("returns the value it was given", () => {
    const results = [
      identity("test string"),
      identity(12),
      identity(true),
      identity(null),
      identity(undefined),
      identity({ foo: "foo", bar: 83 }),
    ]

    expect(results).toEqual([
      "test string",
      12,
      true,
      null,
      undefined,
      { foo: "foo", bar: 83 },
    ])
  })

  it("returns the same object it was given", () => {
    const testObject = { foo: "foo", bar: 83 }

    const result = identity(testObject)

    expect(result).toBe(testObject)
  })
})
