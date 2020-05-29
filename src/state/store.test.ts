import { createStore, RootState } from "./store"

describe("`createStore()`", () => {
  it("creates a store with the correct default initial state", () => {
    const initialState = createStore().getState()

    expect(initialState).toEqual<RootState>({
      similarities: { ids: [], entities: {} },
    })
  })

  it("creates a store with the given initial state", () => {
    const store = createStore({
      similarities: {
        ids: ["test/a", "test/b"],
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
            color: "blue",
            translation: 0.234,
            scale: 0.623,
            angle: 2.622 * Math.PI,
            depth: 4,
          },
        },
      },
    })

    const initialState = store.getState()

    expect(initialState).toEqual<RootState>({
      similarities: {
        ids: ["test/a", "test/b"],
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
            color: "blue",
            translation: 0.234,
            scale: 0.623,
            angle: 2.622 * Math.PI,
            depth: 4,
          },
        },
      },
    })
  })
})
