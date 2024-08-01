export function getDayOfYear(date, startAtZero = false) {
    const year = date.getFullYear();
    const januaryFirst = new Date(year, 0, 1);
    const givenDate = new Date(year, date.getMonth(), date.getDate());
    return (Math.round((givenDate.getTime() - januaryFirst.getTime()) / 86_400_000) +
        (startAtZero ? 0 : 1));
}
export function toModernJulianDate(date) {
    const dayOfYear = getDayOfYear(date);
    return (date.getFullYear() * 1000 + dayOfYear).toString();
}
export function toShortModernJulianDate(date) {
    return toModernJulianDate(date).slice(2);
}
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
    const date = new Date(year, 1 - 1, 1);
    date.setDate(days);
    return date;
}
export default toModernJulianDate;
