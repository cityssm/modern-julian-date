export const getDayOfYear = (date) => {
    const year = date.getFullYear();
    const januaryFirst = new Date(year, 0, 1);
    const givenDate = new Date(year, date.getMonth(), date.getDate());
    return Math.round((givenDate.getTime() - januaryFirst.getTime()) / 86400000) + 1;
};
export const toModernJulianDate = (date) => {
    const dayOfYear = getDayOfYear(date);
    return (date.getFullYear() * 1000) + dayOfYear;
};
export default toModernJulianDate;
