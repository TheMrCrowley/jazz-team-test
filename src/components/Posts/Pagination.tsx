import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pagination = () => {
  const navigate = useNavigate();

  const getPagination = (total: number, limit: number) => {
    const paginationArr = [];
    for (let i = 0; i < total / limit; i++) {
      paginationArr.push(i + 1);
    }
    return paginationArr;
  };

  return (
    <div className="pagination-wrapper">
      {getPagination(100, 10).map((item) => (
        <div key={item - 1} className="pagination-item" onClick={() => navigate(`${item}`)}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
