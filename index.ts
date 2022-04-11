export const toModernJulianDate = (date: Date): number => {

  const year = date.getFullYear();

  const januaryFirst = new Date(year, 0, 1);
  const givenDate = new Date(year, date.getMonth(), date.getDate());

  const day = Math.round((givenDate.getTime() - januaryFirst.getTime()) / (86_400_000)) + 1;

  return (year * 1000) + day;
};


export default toModernJulianDate;
