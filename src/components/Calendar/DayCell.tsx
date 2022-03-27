import React, { FC, useEffect, useState } from 'react';
import { getParsedItem, hasItem, ITodo, setItemToStorage } from '../../helpers/localStorageHelper';

interface DayCellProps {
  date: Date;
  showDayName?: boolean;
  dayName?: string;
}

const DayCell: FC<DayCellProps> = ({ date, showDayName, dayName }) => {
  const [addTodo, setAddTodo] = useState(false);
  const [todoTitle, setTodoTitle] = useState<string>('');
  const [todoDescription, setTodoDescription] = useState<string>('');
  console.log(date);
  const handleClick = () => {
    setAddTodo(true);
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };

  const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTodoDescription(e.target.value);
  };

  const handleAddTodo = () => {
    const todos = getParsedItem<Record<string, ITodo>>('todos');

    const todoItem: ITodo = {
      id: date.valueOf().toString(),
      title: todoTitle,
      description: todoDescription,
    };
    todos[date.valueOf().toString()] = todoItem;
    setItemToStorage<Record<string, ITodo>>('todos', todos);
    setAddTodo(false);
  };

  useEffect(() => {
    const todos = getParsedItem<Record<string, ITodo>>('todos');
    if (todos[date.valueOf().toString()]) {
      const { title, description } = todos[date.valueOf().toString()];
      setTodoDescription(description);
      setTodoTitle(title);
    }
  }, []);

  return (
    <>
      {addTodo && (
        <div className="todo-modal-wrapper">
          <div className="todo-modal-body">
            <input
              className="todo-title"
              type="text"
              placeholder="Todo title..."
              value={todoTitle}
              onChange={handleChangeTitle}
            />
            <textarea
              className="todo-description"
              placeholder="Todo description..."
              value={todoDescription}
              onChange={handleChangeDescription}
            />
            <div className="btn-wrapper">
              <button className="todo-btn" onClick={handleAddTodo}>
                Add Todo
              </button>
              <button onClick={() => setAddTodo(false)} className="todo-btn">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div onClick={handleClick} className="calendar-day">
        {showDayName ? (
          <span>
            {dayName}, {date.getDate()}
          </span>
        ) : (
          <span>{date.getDate()}</span>
        )}
        {todoTitle && <span className="todo-title-text">{todoTitle}</span>}
        {todoDescription && <span>{todoDescription}</span>}
      </div>
    </>
  );
};

export default DayCell;
