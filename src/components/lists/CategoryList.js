import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = () => {
  return (
    <div>
      <h1>Category List Page</h1>
      <Link to="/create-category">Create Category</Link>
      {/* Add code to display existing categories */}
    </div>
  );
};

export default CategoryList;