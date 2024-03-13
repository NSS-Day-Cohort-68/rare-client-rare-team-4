import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllTags } from "../../../managers/tagManager.js"
import { sortAlphabetically } from "../../../helper.js"
import "./TagList.css"
import { Button, ListGroup, ListGroupItem } from "reactstrap"

export const TagList = () => {
  const [allTags, setAllTags] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getAllTags().then((tagsArray) => {
      const alphabetizedTags = sortAlphabetically(tagsArray, "label")
      setAllTags(alphabetizedTags)
    })
  }, [])

  return (
    <div className="tag-list__container">
      <div className="tag-list__content">
        <div className="tag-list__left">
          <h2>Tags:</h2>
          <ListGroup className="tag-list">
            {allTags.map((tag) => (
              <ListGroupItem key={tag.id} className="tag">
                {tag.label}
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
