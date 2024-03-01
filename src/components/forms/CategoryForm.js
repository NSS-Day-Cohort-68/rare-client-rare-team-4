import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


const CategoryForm = () => {
  const [categoryName, setCategoryName] = useState('');
  const history = useHistory();

  const handleSaveCategory = async () => {
    // Add code to make a request to save the new category
    // For simplicity, this example assumes a fictional saveCategory function
    try {
      // Simulate a successful request (replace this with your actual server request)
      // After saving, redirect to the Category list page
      await saveCategory(categoryName);
      history.push('/category-list');
    } catch (error) {
      console.error('Error saving category:', error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  return (
    <div>
      <h1>Create a New Category</h1>
      <label htmlFor="categoryName">Category Name:</label>
      <input
        type="text"
        id="categoryName"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button onClick={handleSaveCategory}>Save</button>
    </div>
  );
};

// Replace this with your actual server request logic
const saveCategory = async (categoryName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Category saved:', categoryName);
      resolve();
    }, 1000);
  });
};

export default CategoryForm;