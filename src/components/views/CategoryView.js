import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CategoryView = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    // Simulating fetching category details from an API
    const fetchCategoryDetails = async () => {
      try {
        const response = await fetch(`/api/categories/${categoryId}`);
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.error('Error fetching category details:', error);
      }
    };

    // Call the function to fetch category details
    fetchCategoryDetails();
  }, [categoryId]);

  return (
    <div>
      <h1>Category Details</h1>
      {category ? (
        <div>
          <h2>{category.label}</h2>
          <p>ID: {category.id}</p>
          {/* Additional details or actions related to the category can be displayed here */}
        </div>
      ) : (
        <p>Loading category details...</p>
      )}
    </div>
  );
};

export default CategoryView;