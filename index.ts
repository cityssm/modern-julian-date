export function getDayOfYear(date: Date, startAtZero = false): number {
  const year = date.getFullYear()

  const januaryFirst = new Date(year, 0, 1)
  const givenDate = new Date(year, date.getMonth(), date.getDate())

  return (
    Math.round((givenDate.getTime() - januaryFirst.getTime()) / 86_400_000) +
    (startAtZero ? 0 : 1)
  )
}

/**
 * Returns a date string in the modern Julian format. (i.e. YYYYDDD)
 * ex. 2023-01-01 => '2023001'
 * @param date
 * @returns date string in modern Julian format
 */
export function toModernJulianDate(date: Date): string {
  const dayOfYear = getDayOfYear(date)
  return (date.getFullYear() * 1000 + dayOfYear).toString()
}

/**
 * Returns a date string in the modern Julian format with a two-digit year. (i.e. YYDDD)
 * ex. 2023-01-01 => '23001'
 * @param date
 * @returns date string in modern Julian format with a two-digit year
 */
export function toShortModernJulianDate(date: Date): string {
  return toModernJulianDate(date).slice(2)
}

export default toModernJulianDate
