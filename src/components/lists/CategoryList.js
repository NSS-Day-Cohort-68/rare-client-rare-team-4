import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../managers/categoryManager';
import "./List.css"
import { Button, ListGroup, ListGroupItem } from 'reactstrap'


export const CategoryList = () => {
    const [allCategories, setAllCategories] = useState([])
  
    useEffect(() => {
      getAllCategories().then(categoriesArr => {
        const sortedCategories = categoriesArr.sort((a, b) =>
          a.label.localeCompare(b.label)
        )
        setAllCategories(sortedCategories)
      })
    }, [])
  return (
    <div className="category-list-container">
      <h1>Category List Page</h1>

      <div className="category-list-content">
          <div className="category-list-left">
            <h2>Existing Categories:</h2>
          <ListGroup>
            {allCategories.map(category => (
              <ListGroupItem key={category.id}>
                {category.label}
              </ListGroupItem>
            ))}
          </ListGroup>
      </div>

      <div className="category-list-right">  
        <Link to="/createCategory">
          <Button color="primary">Create Category</Button>
        </Link>
      </div>
    </div>
  </div>

  );
};

export default CategoryList;