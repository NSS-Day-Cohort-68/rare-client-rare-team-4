import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { deleteCategory, getAllCategories } from "../../../managers/categoryManager"
import "./CategoryList.css"
import { Button, ListGroup, ListGroupItem } from "reactstrap"
import { sortAlphabetically } from "../../../helper"

export const CategoryList = () => {
  const [allCategories, setAllCategories] = useState([])
  const navigate = useNavigate()

  const getAndSetCategories = () => {
    getAllCategories().then((categoriesArr) => {
      const sortedCategories = sortAlphabetically(categoriesArr, "label")
      setAllCategories(sortedCategories)
    })
  }

  const handleDelete = (e, category) => {
    e.preventDefault()
    if (window.confirm(`Are you sure you want to delete the "${category.label}" category?`)) {
      deleteCategory(category).then(getAndSetCategories)
    }
  }

  useEffect(() => {
    getAndSetCategories()
  }, [])

  return (
    <div className="category-list__container">
      <div className="category-list__content">
        <div className="category-list__left">
          <h2>Categories:</h2>
          <ListGroup className="category-list">
            {allCategories.map((category) => (
              <ListGroupItem key={category.id} className="category">
                <i
                  className="fa-solid fa-trash category__delete-btn"
                  onClick={(e) => {
                    handleDelete(e, category)
                  }}
                />
                &emsp;{category.label}
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>

        <div>
          <Button onClick={() => navigate("/categories/create")} color="primary">
            Create Category
          </Button>
        </div>
      </div>
    </div>
  )
}
