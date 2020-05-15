import reducer from "./reducer"
import { setTranslation, setScale, setAngle, setDepth } from "./actions"

describe("reducer", () => {
  it("has the correct initial state", () => {
    const initialState = reducer(undefined, { type: "" })

    expect(initialState).toEqual({ ids: [], entities: {} })
  })

  describe("`setTranslation` action", () => {
    it("updates the translation for the identified recursion behavior", () => {
      const previousState = {
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

      expect(nextState).toEqual({
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
    it("updates the scale for the identified recursion behavior", () => {
      const previousState = {
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

      expect(nextState).toEqual({
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
    it("updates the angle for the identified recursion behavior", () => {
      const previousState = {
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

      expect(nextState).toEqual({
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
    it("updates the depth for the identified recursion behavior", () => {
      const previousState = {
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

      expect(nextState).toEqual({
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
