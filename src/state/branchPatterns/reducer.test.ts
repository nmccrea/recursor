import reducer from "./reducer"
import {
  addOne,
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

    expect(initialState).toEqual({ ids: [], entities: {} })
  })

  describe("`addOne` action", () => {
    it("creates a unique id for the given branch pattern and adds it to the list", () => {
      const previousState = {
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
      const action = addOne({
        color: "blue",
        translation: 0.234,
        scale: 0.623,
        angle: 2.622 * Math.PI,
        depth: 4,
      })

      const nextState = reducer(previousState, action)

      expect(nextState).toEqual({
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
            color: "blue",
            translation: 0.234,
            scale: 0.623,
            angle: 2.622 * Math.PI,
            depth: 4,
          },
        },
      })
    })
  })

  describe("`removeOne` action", () => {
    it("removes the identified branch pattern from the list", () => {
      const previousState = {
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

      expect(nextState).toEqual({
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
    it("updates the translation for the identified branch pattern", () => {
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
    it("updates the scale for the identified branch pattern", () => {
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
    it("updates the angle for the identified branch pattern", () => {
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
    it("updates the depth for the identified branch pattern", () => {
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
