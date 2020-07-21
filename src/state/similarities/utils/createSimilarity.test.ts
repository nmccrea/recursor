import createSimilarity from "./createSimilarity"

describe("`createSimilarity()`", () => {
  it("creates a new similarity object with the given ID and the expected values", () => {
    const result = createSimilarity("test-id")

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
    const firstResult = createSimilarity("test-id")
    const secondResult = createSimilarity("test-id")

    expect(firstResult).not.toBe(secondResult)
  })
})
