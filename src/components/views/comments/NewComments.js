import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { SaveComment } from "../../../managers/commentManager.js"

export const NewComments = ({ loggedInUser }) => {
  const navigate = useNavigate()
  const [content, setContent] = useState("")
  const { postId } = useParams()

  const today = () => {
    const thisDay = new Date()
    const month = thisDay.getMonth() + 1
    const year = thisDay.getFullYear()
    const date = thisDay.getDate()
    return `${month}/${date}/${year}`
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const parsedContent = content.trim()

    if (parsedContent !== "") {
      SaveComment({
        author_id: loggedInUser.id,
        content,
        post_id: postId,
        date: today(),
      }).then(() => {
        setContent("")
        navigate(`/${postId}/view-comments`)
      })
    } else {
      window.alert("Cannot be empty comment")
    }
  }

  return (
    <>
      <form className="comment-form">
        <h1> New Comment</h1>
        <fieldset>
          <div>
            <input
              onChange={(e) => setContent(e.target.value)}
              type="text"
              id="content"
              value={content}
              placeholder="What is your comment?"
              required
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <button
              className="comment-save"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  )
}
