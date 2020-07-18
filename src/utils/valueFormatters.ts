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

export { formatNumber }
