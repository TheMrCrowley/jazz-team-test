import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="layoutWrapper">
      <div className="contentWrapper">
        <Header />
        <div className="pageContainer">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
