import similaritiesAdapter from "./similaritiesAdapter"

export type SimilaritiesState = ReturnType<
  typeof similaritiesAdapter.getInitialState
>
