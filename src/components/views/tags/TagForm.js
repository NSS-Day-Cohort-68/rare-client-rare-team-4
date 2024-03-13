import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createTag } from "../../../managers/tagManager"
import { Button } from "reactstrap"
import "./TagForm.css"

export const CreateTagForm = () => {
  const [tagLabel, setTagLabel] = useState("")
  const navigate = useNavigate()

  const handleSaveTag = async () => {
    const trimmedTag = tagLabel.trim()

    if (trimmedTag) {
      const newTag = {
        label: trimmedTag,
      }

      await createTag(newTag)
      navigate("/tags")
    } else {
      window.alert("Tag label is empty or contains only whitespaces")
    }
  }

  return (
    <div className="tag-form__container">
      <div className="tag-form__content">
        <div className="tag-form__left">
          <label htmlFor="tagName">Create a Tag:</label>
          <input
            type="text"
            id="tagName"
            value={tagLabel}
            onChange={(e) => setTagLabel(e.target.value)}
            className="tag-form__input"
          />
          <Button onClick={handleSaveTag} className="tag-form__btn" color="primary">
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}
