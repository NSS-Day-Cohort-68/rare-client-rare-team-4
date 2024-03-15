import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { deleteTag, getAllTags } from "../../../managers/tagManager.js"
import { sortAlphabetically } from "../../../helper.js"
import "./TagList.css"
import { Button, ListGroup, ListGroupItem } from "reactstrap"

export const TagList = () => {
  const [allTags, setAllTags] = useState([])
  const navigate = useNavigate()

  const getAndSetTags = () => {
    getAllTags().then((tagsArray) => {
      const sortedTags = sortAlphabetically(tagsArray, "label")
      setAllTags(sortedTags)
    })
  }

  const handleDelete = (e, tag) => {
    e.preventDefault()
    if (window.confirm(`Are you sure you want to delete the "${tag.label}" tag?`)) {
      deleteTag(tag).then(getAndSetTags)
    }
  }

  useEffect(() => {
    getAndSetTags()
  }, [])

  return (
    <div className="tag-list__container">
      <div className="tag-list__content">
        <div className="tag-list__left">
          <h2>Tags:</h2>
          <ListGroup className="tag-list">
            {allTags.map((tag) => (
              <ListGroupItem key={tag.id} className="tag">
                <i className="fa-solid fa-gear tag__edit-btn" onClick={() => navigate(`/tags/edit/${tag.id}`)} />
                &ensp;
                <i
                  className="fa-solid fa-trash tag__delete-btn"
                  onClick={(e) => {
                    handleDelete(e, tag)
                  }}
                />
                &emsp;{tag.label}
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>

        <div>
          <Button onClick={() => navigate("/tags/create")} color="primary">
            Create Tag
          </Button>
        </div>
      </div>
    </div>
  )
}
