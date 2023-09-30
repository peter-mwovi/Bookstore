import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  let categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const categoriesState = dispatch(checkStatus());
  if (categoriesState === 'Under construction!') {
    categories = categoriesState;
  }
  return (
    <div className="divcategories">
      <h3>Categories list...</h3>
      <div className="categoryitem">
        {categories}
      </div>
    </div>
  );
};

export default Categories;
