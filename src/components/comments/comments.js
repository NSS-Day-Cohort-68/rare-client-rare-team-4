import React from "react"
import { useState, useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { SaveComment } from "../../managers/commentManager.js"

// TODO: Write code to get all comments for specific post
// will need to bring the post_id from the post details page.

export const NewComments = ({ loggedInUser, postId }) => {
  const navigate = useNavigate()
  const [comment, setComment] = useState({
    post_id: postId,
    author_id: loggedInUser,
    content: "",
  })

  const NewCommentCreated = (evt) => {
    const { id, value } = evt.target
    const parsedValue = id === "author_id" ? parseInt(value, 10) : value.trim()
    setComment((prevComment) => ({
      ...prevComment,
      [id]: parsedValue,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    SaveComment(comment).then(() => {
      navigate("/post-details")
    })
  }

  return (
    <>
      <form className="comment-form">
        <h1> New Comment</h1>
        <fieldset>
          <div>
            <input
              onChange={NewCommentCreated}
              type="text"
              id="content"
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
