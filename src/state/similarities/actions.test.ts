import {
  addOne,
  removeOne,
  setTranslation,
  getTranslationSetterFor,
  setScale,
  getScaleSetterFor,
  setAngle,
  getAngleSetterFor,
  setDepth,
  getDepthSetterFor,
} from "./actions"

describe("`addOne()`", () => {
  it("returns an action object for adding new similarity inputs", () => {
    const action = addOne({
      color: "blue",
      translation: 0.891,
      scale: 0.687,
      angle: 0.343 * Math.PI,
      depth: 5,
    })

    expect(action).toEqual({
      type: "similarities/ADD_ONE",
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

describe("`removeOne()`", () => {
  it("returns an action object for removing an existing similarity", () => {
    const action = removeOne("test/subject")

    expect(action).toEqual({
      type: "similarities/REMOVE_ONE",
      payload: "test/subject",
    })
  })
})

describe("`setTranslation()`", () => {
  it("returns an action object for setting the identified similarity's transformation translation", () => {
    const action = setTranslation("test/subject", 0.54321)

    expect(action).toEqual({
      type: "similarities/SET_TRANSLATION",
      payload: {
        id: "test/subject",
        changes: { translation: 0.54321 },
      },
    })
  })
})

describe("`getTranslationSetterFor()`", () => {
  it("returns an action creator for setting the translation of the identified similarity", () => {
    const action = getTranslationSetterFor("test/subject")(0.7524)

    expect(action).toEqual({
      type: "similarities/SET_TRANSLATION",
      payload: {
        id: "test/subject",
        changes: { translation: 0.7524 },
      },
    })
  })
})

describe("`setScale()`", () => {
  it("returns an action object for setting the identified similarity's transformation scale", () => {
    const action = setScale("test/subject", Math.PI / 1.2345)

    expect(action).toEqual({
      type: "similarities/SET_SCALE",
      payload: {
        id: "test/subject",
        changes: { scale: Math.PI / 1.2345 },
      },
    })
  })
})

describe("`getScaleSetterFor()`", () => {
  it("returns an action creator for setting the scale of the identified similarity", () => {
    const action = getScaleSetterFor("test/subject")(0.2244)

    expect(action).toEqual({
      type: "similarities/SET_SCALE",
      payload: {
        id: "test/subject",
        changes: { scale: 0.2244 },
      },
    })
  })
})

describe("`setAngle()`", () => {
  it("returns an action object for setting the identified similarity's transformation angle", () => {
    const action = setAngle("test/subject", Math.PI / 1.2345)

    expect(action).toEqual({
      type: "similarities/SET_ANGLE",
      payload: {
        id: "test/subject",
        changes: { angle: Math.PI / 1.2345 },
      },
    })
  })
})

describe("`getAngleSetterFor()`", () => {
  it("returns an action creator for setting the angle of the identified similarity", () => {
    const action = getAngleSetterFor("test/subject")(0.9105)

    expect(action).toEqual({
      type: "similarities/SET_ANGLE",
      payload: {
        id: "test/subject",
        changes: { angle: 0.9105 },
      },
    })
  })
})

describe("`setDepth()`", () => {
  it("returns an action object for setting the identified similarity's recursion depth", () => {
    const action = setDepth("test/subject", Math.PI / 1.2345)

    expect(action).toEqual({
      type: "similarities/SET_DEPTH",
      payload: {
        id: "test/subject",
        changes: { depth: Math.PI / 1.2345 },
      },
    })
  })
})

describe("`getDepthSetterFor()`", () => {
  it("returns an action creator for setting the depth of the identified similarity", () => {
    const action = getDepthSetterFor("test/subject")(0.1928)

    expect(action).toEqual({
      type: "similarities/SET_DEPTH",
      payload: {
        id: "test/subject",
        changes: { depth: 0.1928 },
      },
    })
  })
})
