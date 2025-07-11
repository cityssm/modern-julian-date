/**
 * Returns the day of the year.
 * @param date - Date object.
 * @param startAtZero - Whether the day of the year should be zero-based.
 * @returns Day of year.
 */
export function getDayOfYear(date, startAtZero = false) {
    const year = date.getFullYear();
    const januaryFirst = new Date(year, 0, 1);
    const givenDate = new Date(year, date.getMonth(), date.getDate());
    return (Math.round((givenDate.getTime() - januaryFirst.getTime()) / 86_400_000) +
        (startAtZero ? 0 : 1));
}
/**
 * Returns a date string in the modern Julian format. (i.e. YYYYDDD)
 * ex. 2023-01-01 => '2023001'
 * @param date - Date object.
 * @returns Date string in modern Julian format.
 */
export function toModernJulianDate(date) {
    const dayOfYear = getDayOfYear(date);
    return (date.getFullYear() * 1000 + dayOfYear).toString();
}
/**
 * Returns a date string in the modern Julian format with a two-digit year. (i.e. YYDDD)
 * ex. 2023-01-01 => '23001'
 * @param date - Date object.
 * @returns Date string in modern Julian format with a two-digit year
 */
export function toShortModernJulianDate(date) {
    return toModernJulianDate(date).slice(2);
}
/**
 * Converts a modern Julian date into a Javascript Date object.
 * ex. '2023001' => 2023-01-01
 * @param modernJulianDate - A five-digit (short) or seven-digit modern Julian date. Note that five-digit dates will be assumed to be in the current century.
 * @returns Date object.
 */
export function fromModernJulianDate(modernJulianDate) {
    let sevenDigitModernJulianDate = modernJulianDate;
    if (modernJulianDate.length === 5) {
        sevenDigitModernJulianDate =
            Math.floor(new Date().getFullYear() / 100).toString() + modernJulianDate;
    }
    if (sevenDigitModernJulianDate.length !== 7) {
        throw new Error(`Invalid modern Julian date: ${modernJulianDate}`);
    }
    const year = Number.parseInt(sevenDigitModernJulianDate.slice(0, 4));
    const days = Number.parseInt(sevenDigitModernJulianDate.slice(4));
    if (Number.isNaN(year) || Number.isNaN(days) || days > 366) {
        throw new TypeError(`Invalid modern Julian date: ${modernJulianDate}`);
    }
    // eslint-disable-next-line sonarjs/no-identical-expressions
    const date = new Date(year, 1 - 1, 1);
    date.setDate(days);
    return date;
}
export default toModernJulianDate;
