import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { SaveComment } from "../../../managers/commentManager.js"

export const NewComments = ({ loggedInUser, postId }) => {
  const navigate = useNavigate()
  const [content, setContent] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    const parsedContent = content.trim()

    if (parsedContent !== "") {
      SaveComment({
        author_id: loggedInUser.id,
        content,
        post_id: postId,
      }).then(() => {
        setContent("")
        navigate(`/post-details/${postId}`)
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
