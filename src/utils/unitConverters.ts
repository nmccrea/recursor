// Angles

const DEGREES_PER_RADIAN = 180 / Math.PI
const RADIANS_PER_DEGREE = Math.PI / 180

/**
 * Converts an angle given in radians into degrees.
 *
 * @param radians - The angle to convert, in radians.
 *
 * @returns The smae angle in degrees.
 */
const degreesFromRadians = (radians: number) => radians * DEGREES_PER_RADIAN

/**
 * Converts an angle given in degrees into radians.
 *
 * @param degrees - The angle to convert, in degrees.
 *
 * @returns The same angle in radians.
 */
const radiansFromDegrees = (degrees: number) => degrees * RADIANS_PER_DEGREE

export { degreesFromRadians, radiansFromDegrees }
