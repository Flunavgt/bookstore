import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../../Redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{status}</p>
      <button type="button" className="statusBtn" onClick={() => dispatch(checkStatus())}>Check status</button>
    </div>
  );
};

export default Categories;
