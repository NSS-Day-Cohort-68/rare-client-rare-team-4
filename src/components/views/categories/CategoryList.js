import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllCategories } from "../../../managers/categoryManager"
import "./CategoryList.css"
import { Button, ListGroup, ListGroupItem } from "reactstrap"

export const CategoryList = () => {
  const [allCategories, setAllCategories] = useState([])

  const handleDelete = (e, category) => {
    e.preventDefault()
    if (window.confirm(`Are you sure you want to delete the "${category}" category?`)) {
      //!
    }
  }

  useEffect(() => {
    getAllCategories().then((categoriesArr) => {
      const sortedCategories = categoriesArr.sort((a, b) => a.label.localeCompare(b.label))
      setAllCategories(sortedCategories)
    })
  }, [])

  return (
    <div className="category-list__container">
      <h1>Category List Page</h1>

      <div className="category-list__content">
        <div className="category-list__left">
          <h2>Existing Categories:</h2>
          <ListGroup className="category-list">
            {allCategories.map((category) => (
              <ListGroupItem key={category.id} className="category">
                <i
                  className="fa-solid fa-trash category__delete-btn"
                  onClick={(e) => {
                    handleDelete(e, category.label)
                  }}
                />
                &emsp;{category.label}
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>

        <Link to="/createCategory">
          <Button color="primary">Create Category</Button>
        </Link>
      </div>
    </div>
  )
}
