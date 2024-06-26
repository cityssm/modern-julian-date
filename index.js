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
export default toModernJulianDate;
