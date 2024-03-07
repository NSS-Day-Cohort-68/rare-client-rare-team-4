import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = () => {
    const testCategories = [
    { id: 10, label: 'Category 10' },
    { id: 11, label: 'Category 11' },
    { id: 12, label: 'Category 12' },
  ];
  
  return (
    <div>
      <h1>Category List Page</h1>
      <Link to="/create-category">Create Category</Link>
      
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