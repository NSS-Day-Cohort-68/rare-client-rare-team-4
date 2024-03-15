import { useEffect, useState } from "react"
import { getAllComments } from "../../../managers/commentManager.js"
import { Link, useParams } from "react-router-dom"
import { getPostById } from "../../../managers/postManager.js"
import "./comments.css"

export const ViewComments = () => {
  const [postTitle, setPostTitle] = useState("")
  const [postComments, setPostComments] = useState([])
  const { postId } = useParams()

  const parsedPostId = parseInt(postId)

  useEffect(() => {
    getPostById(parsedPostId).then((post) => {
      if (post && post.id === parsedPostId) {
        setPostTitle(post.title)
      }
    })
  }, [postId])

  useEffect(() => {
    getAllComments().then((commentArray) => {
      const currentComments = commentArray.filter(
        (comment) => comment.post_id === parseInt(postId)
      )
      setPostComments(currentComments.reverse())
    })
  }, [postId])

  return (
    <>
      <h2 className="viewCommentsTitle">Comments for {postTitle}</h2>
      <section className="return-btn">
        <Link to={`/post-details/${postId}`}>
          <button>Return to Post</button>
        </Link>
      </section>
      <section>
        {postComments.length === 0 ? (
          <p>No comments available.</p>
        ) : (
          postComments.map((comment) => (
            <div className="postComments" key={comment.id}>
              <div className="commentAuthorDate">
                Written by: {comment.user.first_name} {comment.user.last_name}{" "}
                on {comment.date}
              </div>
              <div className="commentContent">{comment.content}</div>
            </div>
          ))
        )}
      </section>
    </>
  )
}
