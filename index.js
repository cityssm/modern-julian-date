export const toModernJulianDate = (date) => {
    const year = date.getFullYear();
    const januaryFirst = new Date(year, 0, 1);
    const givenDate = new Date(year, date.getMonth(), date.getDate());
    const day = Math.round((givenDate.getTime() - januaryFirst.getTime()) / (86400000)) + 1;
    return (year * 1000) + day;
};
export default toModernJulianDate;
