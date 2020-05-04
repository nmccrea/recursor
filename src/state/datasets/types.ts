export enum AsyncState {
  Idle = "idle",
  Pending = "pending",
  Fulfilled = "fulfilled",
}

export type Data = object

export interface Dataset {
  readonly id: DatasetId
  readonly asyncState: AsyncState
  readonly data?: Data
}

export type DatasetId = string

// Makes `data` required.
export type FetchResult = Pick<Dataset, "id" | "data"> & { data: Data }
