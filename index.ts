export const getDayOfYear = (date: Date, startAtZero = false): number => {

  const year = date.getFullYear();

  const januaryFirst = new Date(year, 0, 1);
  const givenDate = new Date(year, date.getMonth(), date.getDate());

  return Math.round((givenDate.getTime() - januaryFirst.getTime()) / 86_400_000) +
    (startAtZero ? 0 : 1);
};


export const toModernJulianDate = (date: Date): number => {
  const dayOfYear = getDayOfYear(date);
  return (date.getFullYear() * 1000) + dayOfYear;
};


export default toModernJulianDate;
