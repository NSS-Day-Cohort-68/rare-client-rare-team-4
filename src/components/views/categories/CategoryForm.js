import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { createCategory, getCategory, updateCategory } from "../../../managers/categoryManager"
import "./CategoryForm.css"
import { Button } from "reactstrap"

export const CategoryForm = ({ isEditing }) => {
  const [categoryLabel, setCategoryLabel] = useState("")
  const [placeholder, setPlaceholder] = useState("New Category")
  const { categoryId } = useParams()
  const navigate = useNavigate()

  const handleSaveCategory = async () => {
    const trimmedLabel = categoryLabel.trim()

    if (!!trimmedLabel) {
      if (!isEditing) {
        await createCategory({ label: trimmedLabel })
        navigate("/categories")
      } else {
        await updateCategory({ label: trimmedLabel, id: parseInt(categoryId) })
        navigate("/categories")
      }
    } else {
      window.alert("Category label is empty or contains only whitespaces")
    }
  }

  useEffect(() => {
    if (isEditing) {
      getCategory(parseInt(categoryId)).then((category) => {
        setCategoryLabel(category.label)
        setPlaceholder(category.label)
      })
    }
  }, [categoryId, isEditing])

  return (
    <div className="category-form__container">
      <div className="category-form__content">
        <div className="category-form__left">
          <label htmlFor="categoryLabel">{!isEditing ? "Create a" : "Edit"} Category:</label>
          <input
            type="text"
            id="categoryLabel"
            value={categoryLabel}
            onChange={(e) => setCategoryLabel(e.target.value)}
            className="category-form__input"
            placeholder={placeholder}
          />
          <div className="category-form__btn-container">
            <Button onClick={handleSaveCategory} className="category-form__save-btn" color="primary">
              Save
            </Button>
            {isEditing && (
              <Button onClick={() => navigate("/categories")} className="category-form__cancel-btn" color="danger">
                Cancel
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
