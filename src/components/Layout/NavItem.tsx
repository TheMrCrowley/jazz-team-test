import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
  linkAddress: string;
}

const NavItem: FC<NavItemProps> = ({ linkAddress, children }) => {
  return (
    <Link className="navItem" to={linkAddress}>
      {children}
    </Link>
  );
};

export default NavItem;
