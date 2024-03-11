import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCategory } from '../../managers/categoryManager';



const CategoryForm = () => {
  const [categoryLabel, setCategoryLabel] = useState('');
  const navigate = useNavigate();

  const handleSaveCategory = async () => {
    
    try {
      const newCategory = {
        label: categoryLabel,
      };
      
      await createCategory(newCategory);
      navigate('/category-list');
    } catch (error) {
      console.error('Error saving category:', error);
      
    }
  };

  return (
    <div>
      <h1>Create a New Category</h1>
      <label htmlFor="categoryLabel">Create a Category:</label>
      <input
        type="text"
        id="categoryLabel"
        value={categoryLabel}
        onChange={(e) => setCategoryLabel(e.target.value)}
      />
      <button onClick={handleSaveCategory}>Save</button>
    </div>
  );
};


export default CategoryForm;