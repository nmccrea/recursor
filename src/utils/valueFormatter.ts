interface NumberFormatOptions {
  precision?: number
  suffix?: string
}

const DEFAULT_NUMBER_FORMAT_OPTIONS: Required<NumberFormatOptions> = {
  precision: 0,
  suffix: "",
}

/**
 * Performs simple formatting on the given numeric value.
 *
 * @param value - The numeric value to format.
 * @param options - Formatting options.
 * @param options.precision - The number of places to show after the decimal. Default `0`.
 * @param options.suffix - A string that will be appended to the end of the result. Default `""`.
 *
 * @returns A string representation of the given number, formatted according to the provided options. If the given value is undefined, returns `"NO DATA"`.
 */
const formatNumber = (value?: number, options?: NumberFormatOptions) => {
  if (value === undefined) return "NO DATA"
  const { precision, suffix } = { ...DEFAULT_NUMBER_FORMAT_OPTIONS, ...options }
  const formattedValue = value.toFixed(precision)
  return `${formattedValue}${String(suffix)}`
}

interface AngleFormatOptions {
  precision?: number
}

const DEFAULT_ANGLE_FORMAT_OPTIONS = { precision: 2 }

/**
 * Performs simple formatting on the given numeric value. The number is assumed to represent an angle in radians. It is automatically divided by π and appended with an appropriate suffix.
 *
 * @param value - The numeric value to format.
 * @param options - Formatting options.
 * @param options.precision - The number of places to show after the decimal. Default `2`.
 *
 * @returns A string representation of the given angle, formatted according to the provided options. If the given value is undefined, returns `"NO DATA"`.
 */
const formatAngle = (value?: number, options?: AngleFormatOptions) => {
  const convertedValue = value === undefined ? undefined : value / Math.PI

  return formatNumber(convertedValue, {
    ...DEFAULT_ANGLE_FORMAT_OPTIONS,
    ...options,
    suffix: "π rad",
  })
}

export { formatNumber, formatAngle }
