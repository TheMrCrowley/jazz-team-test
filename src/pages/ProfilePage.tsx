import React, { useEffect, useState } from 'react';
import { getParsedItem, hasItem, ITodo } from '../helpers/localStorageHelper';
import useTypedSelector from '../hooks/useTypedSelector';
import { useNavigate } from 'react-router-dom';
import './profile-page.css';
const ProfilePage = () => {
  const { isAuth } = useTypedSelector((state) => state.login);
  const navigate = useNavigate();
  const [todos, setTodos] = useState<ITodo[]>();

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
    if (hasItem('todos')) {
      const todos = getParsedItem<Record<string, ITodo>>('todos');
      setTodos(Object.values(todos));
    }
  }, []);
  console.log(todos);
  return (
    <div className="profile-wrapper">
      <h2>About:</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, maxime nemo. Assumenda beatae,
        dolorum, earum eos incidunt laborum, nam nesciunt nobis numquam odit officiis omnis quas
        repellat sequi similique temporibus! Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Ad, maxime nemo. Assumenda beatae, dolorum, earum eos incidunt laborum, nam nesciunt
        nobis numquam odit officiis omnis quas repellat sequi similique temporibus! Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Ad, maxime nemo. Assumenda beatae, dolorum,
        earum eos incidunt laborum, nam nesciunt nobis numquam odit officiis omnis quas repellat
        sequi similique temporibus!
      </p>
      <h2>Description:</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, maxime nemo. Assumenda beatae,
        dolorum, earum eos incidunt laborum, nam nesciunt nobis numquam odit officiis omnis quas
        repellat sequi similique temporibus! Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Ad, maxime nemo. Assumenda beatae, dolorum, earum eos incidunt laborum, nam nesciunt
        nobis numquam odit officiis omnis quas repellat sequi similique temporibus! Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Ad, maxime nemo. Assumenda beatae, dolorum,
        earum eos incidunt laborum, nam nesciunt nobis numquam odit officiis omnis quas repellat
        sequi similique temporibus!
      </p>
      <h2>Todos:</h2>
      <div className="todo-list">
        {todos?.length
          ? todos?.map((todo) => (
              <div className="todo-item" key={todo.id}>
                <div>
                  Date: {new Date(+todo.id).getDate()}.{new Date(+todo.id).getMonth() + 1}.
                  {new Date(+todo.id).getFullYear()};
                </div>
                <div>Title: {todo.title};</div>
                <div>Description: {todo.description};</div>
              </div>
            ))
          : 'Список задач пока что пуст...'}
      </div>
    </div>
  );
};

export default ProfilePage;
