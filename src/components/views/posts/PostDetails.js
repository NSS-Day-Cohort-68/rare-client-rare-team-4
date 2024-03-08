import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getPostById } from "../../../managers/postManager"
import { formatDate, isEmptyObject } from "../../../helper"
import "./PostDetails.css"

export const PostDetails = () => {
  const [post, setPost] = useState(null)
  const { postId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getPostById(parseInt(postId)).then(setPost)
  }, [postId])

  useEffect(() => {
    if (isEmptyObject(post)) {
      navigate("/")
    }
  }, [navigate, post])

  return (
    <div className="post-details__container">
      {!isEmptyObject(post) && post && (
        <>
          <h1 className="post-details__title">{post.title}</h1>
          {/* <div className="post-details__img">Image: {post.image_url}</div> */}
          <h3 className="post-details__date">Published on {formatDate(post.publication_date)}</h3>
          <h3 className="post-details__username">
            By <i className="post-details__username-name">{post.user.username}</i>
          </h3>
          <p className="post-details__content">{post.content}</p>
        </>
      )}
    </div>
  )
}
