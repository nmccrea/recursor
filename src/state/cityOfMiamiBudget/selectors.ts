/**
 * TODO: type
 * TODO: test
 * TODO: doc
 */

import { RootState } from "../store"

/**
 * Gets the current status.
 *
 * @param state The current state of the slice.
 *
 * @returns The current value of the `status` field.
 */
const getStatus = (state: RootState) => state.cityOfMiamiBudget.status

/**
 * Gets the current data object.
 *
 * @param state The current state of the slice.
 *
 * @returns The current data object.
 */
const getData = (state: RootState) => state.cityOfMiamiBudget.data

export { getStatus, getData }
