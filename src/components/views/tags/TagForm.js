import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { createTag, getTag, updateTag } from "../../../managers/tagManager"
import { Button } from "reactstrap"
import "./TagForm.css"

export const TagForm = ({ isEditing }) => {
  const [tagLabel, setTagLabel] = useState("")
  const [placeholder, setPlaceholder] = useState("New Tag")
  const { tagId } = useParams()
  const navigate = useNavigate()

  const handleSaveTag = async () => {
    const trimmedTag = tagLabel.trim()

    if (!!trimmedTag) {
      if (!isEditing) {
        await createTag({ label: trimmedTag })
      } else {
        await updateTag({ label: trimmedTag, id: parseInt(tagId) })
      }

      navigate("/tags")
    } else {
      window.alert("Tag label is empty or contains only whitespaces")
    }
  }

  useEffect(() => {
    if (isEditing && !!tagId) {
      getTag(parseInt(tagId)).then((tag) => {
        setTagLabel(tag.label)
        setPlaceholder(tag.label)
      })
    }
  }, [tagId, isEditing])

  return (
    <div className="tag-form__container">
      <div className="tag-form__content">
        <div className="tag-form__left">
          <label htmlFor="tagName">{!isEditing ? "Create a" : "Edit"} Tag:</label>
          <input
            type="text"
            id="tagName"
            value={tagLabel}
            onChange={(e) => setTagLabel(e.target.value)}
            className="tag-form__input"
            placeholder={placeholder}
          />
          <Button onClick={handleSaveTag} className="tag-form__btn" color="primary">
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}
