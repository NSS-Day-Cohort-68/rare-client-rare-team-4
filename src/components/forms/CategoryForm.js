import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCategory } from '../../managers/categoryManager';



const CategoryForm = () => {
  const [categoryLabel, setCategoryLabel] = useState('');
  const navigate = useNavigate();

  const handleSaveCategory = async () => {
    // Add code to make a request to save the new category
    // For simplicity, this example assumes a fictional saveCategory function
    try {
      const newCategory = {
        label: 'Comics',
      };
      // Simulate a successful request (replace this with your actual server request)
      // After saving, redirect to the Category list page
      await createCategory(newCategory);
      navigate.push('/category-list');
    } catch (error) {
      console.error('Error saving category:', error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  return (
    <div>
      <h1>Create a New Category</h1>
      <label htmlFor="categoryLabel">Category Name:</label>
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

// Replace this with your actual server request logic
const saveCategory = async (categoryLabel) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Category saved:', categoryLabel);
      resolve();
    }, 1000);
  });
};

export default CategoryForm;