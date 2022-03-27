import React, { useState } from 'react';
import './login-page.css';
import { useNavigate } from 'react-router-dom';
import useTypedSelector from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import {
  loginAction,
  loginErrorAction,
  loginResetAction,
} from '../redux/store/reducers/loginReducer';

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { authError } = useTypedSelector((state) => state.login);
  const dispatch = useDispatch();

  const handleLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    if (userName === 'Admin' && password === '12345678') {
      dispatch(loginResetAction());
      dispatch(loginAction({ userName }));
      navigate('/profile');
    } else {
      dispatch(loginErrorAction());
    }
  };

  return (
    <form className="login-form">
      {authError && <div>{'Имя пользователя или пароль введены неверно'}</div>}
      <input
        value={userName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
        className="input-text"
        type="text"
        placeholder="Username..."
      />
      <input
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        className="input-text"
        type="password"
        placeholder="Password..."
      />
      <button onClick={handleLogin} className="login-btn" type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginPage;
