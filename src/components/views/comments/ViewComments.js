import { useEffect, useState } from "react"
import { getAllComments } from "../../../managers/commentManager.js"
import { useParams } from "react-router-dom"
import "./comments.css"

export const ViewComments = () => {
  const [postComments, setPostComments] = useState([])
  const { postId } = useParams()

  useEffect(() => {
    getAllComments().then((commentArray) => {
      const currentComments = commentArray.filter(
        (comment) => comment.post_id === parseInt(postId)
      )
      setPostComments(currentComments)
    })
  }, [postId])

  return (
    <>
      <h2 className="viewCommentsTitle">Comments for {postId}</h2>
      <section className="postComments">
        {postComments.length === 0 ? (
          <p>No comments available.</p>
        ) : (
          postComments.map((comment) => (
            <div className="comments" key={comment.id}>
              <div className="commentAuthorDate">
                Written by: {comment.user.first_name} on {comment.date}
              </div>
              <div className="commentContent">{comment.content}</div>
            </div>
          ))
        )}
      </section>
    </>
  )
}
