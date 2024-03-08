import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../managers/categoryManager';


export const CategoryList = () => {
    const [allCategories, setAllCategories] = useState([])
  
  
  return (
    <div>
      <h1>Category List Page</h1>
      <Link to="/createCategory">Create Category</Link>
      
      <h2>Existing Categories:</h2>
      <ul>
        {testCategories.map(category => (
          <li key={category.id}>
            {category.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;