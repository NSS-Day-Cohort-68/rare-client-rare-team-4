import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllTags } from "../../managers/tagManager.js"

export const TagList = () => {
  const [allTags, setAllTags] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getAllTags().then((tagsArray) => {
      setAllTags(tagsArray)
    }, [])
  })
  return (
    <div className="tags-container">
      <h2> Tags</h2>
      <button onClick={() => navigate("/tags/create")}>Create Tag</button>
      <article className="tags">
        {allTags.map((tag) => {
          return (
            <section className="tag" key={tag.id}>
              <div className="tag-name">{tag.label}</div>
            </section>
          )
        })}
      </article>
    </div>
  )
}
