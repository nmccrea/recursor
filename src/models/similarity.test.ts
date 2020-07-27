import similarity from "./similarity"

describe("`create()`", () => {
  it("creates a new similarity object with the given ID and the expected values", () => {
    const result = similarity.create("test-id")

    expect(result).toEqual({
      id: "test-id",
      translation: 1,
      scale: 0.75,
      angle: 0,
      depth: 5,
      color: "black",
    })
  })

  it("returns a new object each time it is called", () => {
    const firstResult = similarity.create("test-id")
    const secondResult = similarity.create("test-id")

    expect(firstResult).not.toBe(secondResult)
  })
})
