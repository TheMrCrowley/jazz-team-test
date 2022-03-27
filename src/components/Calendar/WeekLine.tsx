import React, { FC } from 'react';
import DayCell from './DayCell';

interface WeekLineProps {
  week: Date[];
  isFirstWeek?: boolean;
}

const WeekLine: FC<WeekLineProps> = ({ week, isFirstWeek }) => {
  const weekDays = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ];

  return (
    <div className="calendar-line">
      {isFirstWeek
        ? week.map((day, index) => (
            <DayCell key={day.valueOf()} date={day} showDayName={true} dayName={weekDays[index]} />
          ))
        : week.map((day, index) => <DayCell key={day.valueOf()} date={day} />)}
    </div>
  );
};

export default WeekLine;
