import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createCategory } from "../../../managers/categoryManager"
import "./CategoryForm.css"
import { Button } from "reactstrap"

export const CategoryForm = () => {
  const [categoryLabel, setCategoryLabel] = useState("")
  const navigate = useNavigate()

  const handleSaveCategory = async () => {
    const trimmedLabel = categoryLabel.trim()

    if (trimmedLabel) {
      const newCategory = {
        label: trimmedLabel,
      }

      await createCategory(newCategory)
      navigate("/categories")
    } else {
      window.alert("Category label is empty or contains only whitespaces")
    }
  }

  return (
    <div className="category-form__container">
      <div className="category-form__content">
        <div className="category-form__left">
          <label htmlFor="categoryLabel">Create a Category:</label>
          <input
            type="text"
            id="categoryLabel"
            value={categoryLabel}
            onChange={(e) => setCategoryLabel(e.target.value)}
            className="category-form__input"
          />
          <Button onClick={handleSaveCategory} className="category-form__btn" color="primary">
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}
