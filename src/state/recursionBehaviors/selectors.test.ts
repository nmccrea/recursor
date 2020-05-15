import { selectorForRecursionBehavior } from "./selectors"

describe("selectorForRecursionBehavior()", () => {
  it("returns a selector which returns the identified recursion behavior", () => {
    const state = {
      recursionBehaviors: {
        ids: ["test/subject", "test/control"],
        entities: {
          "test/subject": {
            id: "test/subject",
            color: "blue",
            translation: 1,
            scale: 0.7,
            angle: Math.PI / 3,
            depth: 5,
          },
          "test/control": {
            id: "test/control",
            color: "red",
            translation: 0.8,
            scale: 0.5,
            angle: -Math.PI / 4,
            depth: 7,
          },
        },
      },
    }

    const result = selectorForRecursionBehavior("test/subject")(state)

    expect(result).toEqual({
      id: "test/subject",
      color: "blue",
      translation: 1,
      scale: 0.7,
      angle: Math.PI / 3,
      depth: 5,
    })
  })
})
