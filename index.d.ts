/**
 * Returns the day of the year.
 * @param date - Date object.
 * @param startAtZero - Whether the day of the year should be zero-based.
 * @returns Day of year.
 */
export declare function getDayOfYear(date: Date, startAtZero?: boolean): number;
/**
 * Returns a date string in the modern Julian format. (i.e. YYYYDDD)
 * ex. 2023-01-01 => '2023001'
 * @param date - Date object.
 * @returns Date string in modern Julian format.
 */
export declare function toModernJulianDate(date: Date): string;
/**
 * Returns a date string in the modern Julian format with a two-digit year. (i.e. YYDDD)
 * ex. 2023-01-01 => '23001'
 * @param date - Date object.
 * @returns Date string in modern Julian format with a two-digit year
 */
export declare function toShortModernJulianDate(date: Date): string;
/**
 * Converts a modern Julian date into a Javascript Date object.
 * ex. '2023001' => 2023-01-01
 * @param modernJulianDate - A five-digit (short) or seven-digit modern Julian date. Note that five-digit dates will be assumed to be in the current century.
 * @returns Date object.
 */
export declare function fromModernJulianDate(modernJulianDate: string): Date;
export default toModernJulianDate;
