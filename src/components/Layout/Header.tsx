import React from 'react';
import Nav from './Nav';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import NavItem from './NavItem';
import useTypedSelector from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../redux/store/reducers/loginReducer';

const Header = () => {
  const { isAuth, userName } = useTypedSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAction());
    navigate('/login');
  };

  return (
    <header className="header">
      <Link to="/">
        <h1>JazzTeam Test</h1>
      </Link>
      <Nav isAuth={isAuth} />
      {isAuth && <span style={{ color: '#fff' }}>{userName}</span>}
      {!isAuth ? (
        <NavItem linkAddress="login">Login</NavItem>
      ) : (
        <button className="navItem" onClick={handleLogout}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
