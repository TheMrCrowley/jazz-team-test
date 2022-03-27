import React, { useEffect, useState } from 'react';
import './calendar.css';
import DayCell from './DayCell';
import { getMonthData } from '../../helpers/calendarHelper';
import WeekLine from './WeekLine';
import { getParsedItem, hasItem, ITodo, setItemToStorage } from '../../helpers/localStorageHelper';
import { searchHelper } from '../../helpers/searchHelper';
import useTypedSelector from '../../hooks/useTypedSelector';
import { useNavigate } from 'react-router-dom';

const Calendar = () => {
  const monthNames = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  const [date, setDate] = useState(new Date());
  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>();
  const [matchTodos, setMatchTodos] = useState<ITodo[]>();
  const { isAuth } = useTypedSelector((state) => state.login);
  const navigate = useNavigate();

  const monthData = getMonthData(date.getFullYear(), date.getMonth());

  const handleMonthDec = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() - 1);

    setDate(newDate);
  };

  const handleMonthInc = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + 1);

    setDate(newDate);
  };

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
    if (!hasItem('todos')) {
      setItemToStorage('todos', {});
    } else {
      const todosFromStorage = getParsedItem<Record<string, ITodo>>('todos');
      setTodos(Object.values(todosFromStorage));
    }
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setMatchTodos(searchHelper(todos, searchValue));
  };

  return (
    <div className="calendar">
      <div className="calendar-controls">
        <button className="month-btn" onClick={handleMonthDec}>
          {'<'}
        </button>
        <div className="month-name">{monthNames[date.getMonth()]}</div>
        <button className="month-btn" onClick={handleMonthInc}>
          {'>'}
        </button>
        <input
          type="text"
          className="search-field"
          placeholder="Todo title..."
          value={searchValue}
          onChange={handleSearch}
        />
      </div>
      <div className="calendar-body">
        {searchValue ? (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {matchTodos?.map((todo, index) => (
              <DayCell key={index} date={new Date(+todo.id)} />
            ))}
          </div>
        ) : (
          monthData.map((week, index) => {
            if (index === 0) {
              return <WeekLine key={index} week={week} isFirstWeek={true} />;
            } else {
              return <WeekLine key={index} week={week} />;
            }
          })
        )}
      </div>
    </div>
  );
};

export default Calendar;
