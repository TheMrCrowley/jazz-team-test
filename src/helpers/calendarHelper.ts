const DAYS_IN_WEEK = 7;

export const getDaysInMonth = (date: Date): number =>
  33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate();

export const getFirstDay = (date: Date) => {
  const dayOfWeek = date.getDay();

  if (dayOfWeek === 0) {
    return 6;
  }

  return dayOfWeek - 1;
};

function getDaysFromPrevMonth(date: Date, daysCount: number): Date[] {
  const result = [];
  const firstDay = new Date(date.getFullYear(), date.getMonth() - 1);
  firstDay.setDate(getDaysInMonth(firstDay) - daysCount + 1);
  for (let i = 0; i < daysCount; i++) {
    result[i] = new Date(date.getFullYear(), date.getMonth() - 1, firstDay.getDate());
    firstDay.setDate(firstDay.getDate() + 1);
  }
  return result;
}

export const getMonthData = (year: number, month: number) => {
  const result: Date[][] = [];
  const date = new Date(year, month);
  const daysInMonth = getDaysInMonth(date);
  const monthStartsOn = getFirstDay(date);
  let day = 1;
  for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
    result[i] = [];
    for (let j = 0; j < DAYS_IN_WEEK; j++) {
      if (i === 0 && j < monthStartsOn) {
        result[i] = getDaysFromPrevMonth(date, monthStartsOn);
      } else {
        result[i][j] = new Date(year, month, day++);
      }
    }
  }
  return result;
};
