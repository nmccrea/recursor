export type Dataset = object

export type DatasetId = string

export interface DatasetIndex {
  [dataset: string]: DatasetState
}

export interface Datasets {
  index: DatasetIndex
}

export type DatasetState = {
  status: Status
  data?: Dataset
}

export interface FetchResult {
  datasetId: DatasetId
  data: Dataset
}

export enum Status {
  Idle = "idle",
  Pending = "pending",
  Fulfilled = "fulfilled",
}
