export enum Status {
  Idle = "idle",
  Pending = "pending",
  Fulfilled = "fulfilled",
}

export interface CityOfMiamiBudgetState {
  status: Status
  data?: object
}
