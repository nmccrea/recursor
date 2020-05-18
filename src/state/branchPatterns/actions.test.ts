import {
  addOne,
  removeOne,
  setTranslation,
  setScale,
  setAngle,
  setDepth,
} from "./actions"

describe("addOne()", () => {
  it("returns an action object for adding a new branch pattern", () => {
    const action = addOne({
      color: "blue",
      translation: 0.891,
      scale: 0.687,
      angle: 0.343 * Math.PI,
      depth: 5,
    })

    expect(action).toEqual({
      type: addOne.type,
      payload: {
        color: "blue",
        translation: 0.891,
        scale: 0.687,
        angle: 0.343 * Math.PI,
        depth: 5,
      },
    })
  })
})

describe("removeOne()", () => {
  it("returns an action object for removing an existing branch pattern", () => {
    const action = removeOne("test/subject")

    expect(action).toEqual({
      type: removeOne.type,
      payload: "test/subject",
    })
  })
})

describe("setTranslation()", () => {
  it("returns an action object for setting the identified branch pattern's transformation translation", () => {
    const action = setTranslation("test/translation", 0.54321)

    expect(action).toEqual({
      type: setTranslation.type,
      payload: {
        id: "test/translation",
        changes: { translation: 0.54321 },
      },
    })
  })
})

describe("setScale()", () => {
  it("returns an action object for setting the identified branch pattern's transformation scale", () => {
    const action = setScale("test/scale", Math.PI / 1.2345)

    expect(action).toEqual({
      type: setScale.type,
      payload: {
        id: "test/scale",
        changes: { scale: Math.PI / 1.2345 },
      },
    })
  })
})

describe("setAngle()", () => {
  it("returns an action object for setting the identified branch pattern's transformation angle", () => {
    const action = setAngle("test/angle", Math.PI / 1.2345)

    expect(action).toEqual({
      type: setAngle.type,
      payload: {
        id: "test/angle",
        changes: { angle: Math.PI / 1.2345 },
      },
    })
  })
})

describe("setDepth()", () => {
  it("returns an action object for setting the identified branch pattern's recursion depth", () => {
    const action = setDepth("test/depth", Math.PI / 1.2345)

    expect(action).toEqual({
      type: setDepth.type,
      payload: {
        id: "test/depth",
        changes: { depth: Math.PI / 1.2345 },
      },
    })
  })
})
