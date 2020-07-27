import { RootState } from "state/store"
import {
  Similarity,
  SimilarityId,
  Translation,
  Scale,
  Angle,
  Depth,
} from "models/similarity"
import {
  selectAll,
  selectIds,
  getSimilaritySelectorFor,
  getTranslationSelectorFor,
  getScaleSelectorFor,
  getAngleSelectorFor,
  getDepthSelectorFor,
} from "./selectors"

describe("`selectAll()`", () => {
  it("returns a list of all existing similarities, ordered according to the `ids` state", () => {
    const state: RootState = {
      similarities: {
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

    expect(result).toEqual<Similarity[]>([
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

describe("`selectIds()`", () => {
  it("returns the ordered list of IDs of all existing similarities", () => {
    const state: RootState = {
      similarities: {
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

    expect(result).toEqual<SimilarityId[]>(["test/a", "test/b", "test/c"])
  })
})

describe("`getSimilaritySelectorFor()`", () => {
  describe("returned selector", () => {
    it("returns the identified similarity", () => {
      const state: RootState = {
        similarities: {
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

      const result = getSimilaritySelectorFor("test/subject")(state)

      expect(result).toEqual<Similarity>({
        id: "test/subject",
        color: "blue",
        translation: 1,
        scale: 0.7,
        angle: Math.PI / 3,
        depth: 5,
      })
    })
  })
})

describe("`getTranslationSelectorFor()`", () => {
  describe("returned selector", () => {
    it("returns the identified similarity's translation", () => {
      const state: RootState = {
        similarities: {
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

      const result = getTranslationSelectorFor("test/subject")(state)

      expect(result).toEqual<Translation>(1)
    })

    it("preserves the numeric value of `0`", () => {
      const state: RootState = {
        similarities: {
          ids: ["test/subject"],
          entities: {
            "test/subject": {
              id: "test/subject",
              color: "blue",
              translation: 0,
              scale: 0.7,
              angle: Math.PI / 3,
              depth: 5,
            },
          },
        },
      }

      const result = getTranslationSelectorFor("test/subject")(state)

      expect(result).toEqual<Translation>(0)
    })
  })
})

describe("`getScaleSelectorFor()`", () => {
  describe("returned selector", () => {
    it("returns the identified similarity's scale", () => {
      const state: RootState = {
        similarities: {
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

      const result = getScaleSelectorFor("test/subject")(state)

      expect(result).toEqual<Scale>(0.7)
    })

    it("preserves the numeric value of `0`", () => {
      const state: RootState = {
        similarities: {
          ids: ["test/subject"],
          entities: {
            "test/subject": {
              id: "test/subject",
              color: "blue",
              translation: 1,
              scale: 0,
              angle: Math.PI / 3,
              depth: 5,
            },
          },
        },
      }

      const result = getScaleSelectorFor("test/subject")(state)

      expect(result).toEqual<Scale>(0)
    })
  })
})

describe("`getAngleSelectorFor()`", () => {
  describe("returned selector", () => {
    it("returns the identified similarity's angle", () => {
      const state: RootState = {
        similarities: {
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

      const result = getAngleSelectorFor("test/subject")(state)

      expect(result).toEqual<Angle>(Math.PI / 3)
    })

    it("preserves the numeric value of `0`", () => {
      const state: RootState = {
        similarities: {
          ids: ["test/subject"],
          entities: {
            "test/subject": {
              id: "test/subject",
              color: "blue",
              translation: 1,
              scale: 0.7,
              angle: 0,
              depth: 5,
            },
          },
        },
      }

      const result = getAngleSelectorFor("test/subject")(state)

      expect(result).toEqual<Angle>(0)
    })
  })
})

describe("`getDepthSelectorFor()`", () => {
  describe("returned selector", () => {
    it("returns the identified similarity's depth", () => {
      const state: RootState = {
        similarities: {
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

      const result = getDepthSelectorFor("test/subject")(state)

      expect(result).toEqual<Depth>(5)
    })

    it("preserves the numeric value of `0`", () => {
      const state: RootState = {
        similarities: {
          ids: ["test/subject"],
          entities: {
            "test/subject": {
              id: "test/subject",
              color: "blue",
              translation: 1,
              scale: 0.7,
              angle: Math.PI / 3,
              depth: 0,
            },
          },
        },
      }

      const result = getDepthSelectorFor("test/subject")(state)

      expect(result).toEqual<Depth>(0)
    })
  })
})
