import {
  selectAll,
  selectIds,
  selectorForBranchPattern,
  selectorForTranslation,
  selectorForScale,
  selectorForAngle,
  selectorForDepth,
} from "./selectors"

describe("selectAll()", () => {
  it("returns a list of all existing branch patterns, ordered according to the `ids` state", () => {
    const state = {
      branchPatterns: {
        ids: ["test/a", "test/c", "test/b"],
        entities: {
          "test/a": {
            id: "test/a",
            color: "blue",
            translation: 1,
            scale: 0.7,
            angle: Math.PI / 3,
            depth: 5,
          },
          "test/b": {
            id: "test/b",
            color: "red",
            translation: 0.8,
            scale: 0.5,
            angle: -Math.PI / 4,
            depth: 7,
          },
          "test/c": {
            id: "test/c",
            color: "yellow",
            translation: 0.1,
            scale: 0.02,
            angle: -Math.PI / 0.9,
            depth: 2,
          },
        },
      },
    }

    const result = selectAll(state)

    expect(result).toEqual([
      {
        id: "test/a",
        color: "blue",
        translation: 1,
        scale: 0.7,
        angle: Math.PI / 3,
        depth: 5,
      },
      {
        id: "test/c",
        color: "yellow",
        translation: 0.1,
        scale: 0.02,
        angle: -Math.PI / 0.9,
        depth: 2,
      },
      {
        id: "test/b",
        color: "red",
        translation: 0.8,
        scale: 0.5,
        angle: -Math.PI / 4,
        depth: 7,
      },
    ])
  })
})

describe("selectIds()", () => {
  it("returns the ordered list of IDs of all existing branch patterns", () => {
    const state = {
      branchPatterns: {
        ids: ["test/a", "test/b", "test/c"],
        entities: {
          "test/a": {
            id: "test/a",
            color: "blue",
            translation: 1,
            scale: 0.7,
            angle: Math.PI / 3,
            depth: 5,
          },
          "test/b": {
            id: "test/b",
            color: "red",
            translation: 0.8,
            scale: 0.5,
            angle: -Math.PI / 4,
            depth: 7,
          },
          "test/c": {
            id: "test/c",
            color: "yellow",
            translation: 0.1,
            scale: 0.02,
            angle: -Math.PI / 0.9,
            depth: 2,
          },
        },
      },
    }

    const result = selectIds(state)

    expect(result).toEqual(["test/a", "test/b", "test/c"])
  })
})

describe("selectorForBranchPattern()", () => {
  it("returns a selector which returns the identified branch pattern", () => {
    const state = {
      branchPatterns: {
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

    const result = selectorForBranchPattern("test/subject")(state)

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

describe("selectorForTranslation()", () => {
  it("returns a selector which returns the identified branch pattern's translation", () => {
    const state = {
      branchPatterns: {
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

    const result = selectorForTranslation("test/subject")(state)

    expect(result).toEqual(1)
  })
})

describe("selectorForScale()", () => {
  it("returns a selector which returns the identified branch pattern's scale", () => {
    const state = {
      branchPatterns: {
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

    const result = selectorForScale("test/subject")(state)

    expect(result).toEqual(0.7)
  })
})

describe("selectorForAngle()", () => {
  it("returns a selector which returns the identified branch pattern's angle", () => {
    const state = {
      branchPatterns: {
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

    const result = selectorForAngle("test/subject")(state)

    expect(result).toEqual(Math.PI / 3)
  })
})

describe("selectorForDepth()", () => {
  it("returns a selector which returns the identified branch pattern's depth", () => {
    const state = {
      branchPatterns: {
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

    const result = selectorForDepth("test/subject")(state)

    expect(result).toEqual(5)
  })
})
