import React, { FC } from 'react';
import NavItem from './NavItem';
import './Nav.css';

interface NavProps {
  isAuth: boolean;
}
const Nav: FC<NavProps> = ({ isAuth }) => {
  return (
    <nav className="navWrapper">
      <NavItem linkAddress="profile">Profile</NavItem>
      <NavItem linkAddress="info">Info</NavItem>
      {isAuth && <NavItem linkAddress="calendar">Calendar</NavItem>}
    </nav>
  );
};

export default Nav;
