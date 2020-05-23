import { createStore, RootState } from "./store"

describe("`createStore()`", () => {
  it("creates a store with the correct initial value", () => {
    const initialState = createStore().getState()

    expect(initialState).toEqual<RootState>({
      similarities: { ids: [], entities: {} },
    })
  })
})
