import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createCategory } from "../../../managers/categoryManager"

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
      navigate("/category-list")
    } else {
      window.alert("Category label is empty or contains only whitespaces")
    }
  }

  return (
    <div>
      <h1>Create a New Category</h1>
      <label htmlFor="categoryLabel">Create a Category:</label>
      <input type="text" id="categoryLabel" value={categoryLabel} onChange={(e) => setCategoryLabel(e.target.value)} />
      <button onClick={handleSaveCategory}>Save</button>
    </div>
  )
}
