import reducer from "./reducer"
import { SimilaritiesState } from "./types"
import {
  createOne,
  removeOne,
  setTranslation,
  setScale,
  setAngle,
  setDepth,
} from "./actions"

jest.mock("@reduxjs/toolkit", () => ({
  ...jest.requireActual("@reduxjs/toolkit"),
  nanoid: () => "fake-nanoid-unique-id",
}))

describe("reducer", () => {
  it("has the correct initial state", () => {
    const initialState = reducer(undefined, { type: "" })

    expect(initialState).toEqual<SimilaritiesState>({ ids: [], entities: {} })
  })

  describe("`createOne` action", () => {
    it("creates a similarity with a unique ID and adds it to the list", () => {
      const previousState: SimilaritiesState = {
        ids: ["test/control"],
        entities: {
          "test/control": {
            id: "test/control",
            color: "red",
            translation: 0.8,
            scale: 0.5,
            angle: -Math.PI / 4,
            depth: 7,
          },
        },
      }
      const action = createOne()

      const nextState = reducer(previousState, action)

      expect(nextState).toEqual<SimilaritiesState>({
        ids: ["test/control", "fake-nanoid-unique-id"],
        entities: {
          "test/control": {
            id: "test/control",
            color: "red",
            translation: 0.8,
            scale: 0.5,
            angle: -Math.PI / 4,
            depth: 7,
          },
          "fake-nanoid-unique-id": {
            id: "fake-nanoid-unique-id",
            color: "black",
            translation: 1,
            scale: 0.75,
            angle: 0,
            depth: 5,
          },
        },
      })
    })

    it("does nothing if there are already three similarities", () => {
      const previousState: SimilaritiesState = {
        ids: ["test/a", "test/b", "test/c"],
        entities: {
          "test/a": {
            id: "test/a",
            color: "red",
            translation: 0.8,
            scale: 0.5,
            angle: -Math.PI / 4,
            depth: 7,
          },
          "test/b": {
            id: "test/b",
            color: "green",
            translation: 1.2,
            scale: 0.6,
            angle: Math.PI / 6,
            depth: 3,
          },
          "test/c": {
            id: "test/c",
            color: "blue",
            translation: 0.1,
            scale: 0.9,
            angle: -Math.PI,
            depth: 5,
          },
        },
      }

      const nextState = reducer(previousState, createOne())

      expect(nextState).toBe(previousState)
    })
  })

  describe("`removeOne` action", () => {
    it("removes the identified similarity from the list", () => {
      const previousState: SimilaritiesState = {
        ids: ["test/subject", "test/control"],
        entities: {
          "test/subject": {
            id: "test/subject",
            color: "blue",
            translation: 0.234,
            scale: 0.623,
            angle: 2.622 * Math.PI,
            depth: 4,
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
      }
      const action = removeOne("test/subject")

      const nextState = reducer(previousState, action)

      expect(nextState).toEqual<SimilaritiesState>({
        ids: ["test/control"],
        entities: {
          "test/control": {
            id: "test/control",
            color: "red",
            translation: 0.8,
            scale: 0.5,
            angle: -Math.PI / 4,
            depth: 7,
          },
        },
      })
    })
  })

  describe("`setTranslation` action", () => {
    it("updates the translation for the identified similarity", () => {
      const previousState: SimilaritiesState = {
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
      }
      const action = setTranslation("test/subject", 1.11111)

      const nextState = reducer(previousState, action)

      expect(nextState).toEqual<SimilaritiesState>({
        ids: ["test/subject", "test/control"],
        entities: {
          "test/subject": {
            id: "test/subject",
            color: "blue",
            translation: 1.11111,
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
      })
    })
  })

  describe("`setScale` action", () => {
    it("updates the scale for the identified similarity", () => {
      const previousState: SimilaritiesState = {
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
      }
      const action = setScale("test/subject", 0.88888)

      const nextState = reducer(previousState, action)

      expect(nextState).toEqual<SimilaritiesState>({
        ids: ["test/subject", "test/control"],
        entities: {
          "test/subject": {
            id: "test/subject",
            color: "blue",
            translation: 1,
            scale: 0.88888,
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
      })
    })
  })

  describe("`setAngle` action", () => {
    it("updates the angle for the identified similarity", () => {
      const previousState: SimilaritiesState = {
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
      }
      const action = setAngle("test/subject", Math.PI / 2.44444)

      const nextState = reducer(previousState, action)

      expect(nextState).toEqual<SimilaritiesState>({
        ids: ["test/subject", "test/control"],
        entities: {
          "test/subject": {
            id: "test/subject",
            color: "blue",
            translation: 1,
            scale: 0.7,
            angle: Math.PI / 2.44444,
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
      })
    })
  })

  describe("`setDepth` action", () => {
    it("updates the depth for the identified similarity", () => {
      const previousState: SimilaritiesState = {
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
      }
      const action = setDepth("test/subject", 444)

      const nextState = reducer(previousState, action)

      expect(nextState).toEqual<SimilaritiesState>({
        ids: ["test/subject", "test/control"],
        entities: {
          "test/subject": {
            id: "test/subject",
            color: "blue",
            translation: 1,
            scale: 0.7,
            angle: Math.PI / 3,
            depth: 444,
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
      })
    })
  })
})
