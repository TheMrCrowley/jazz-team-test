import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Pagination from '../components/Posts/Pagination';
import './info-page.css';

const InfoPage = () => {
  return (
    <div className="info-wrapper">
      <Pagination />
      <Outlet />
    </div>
  );
};

export default InfoPage;
