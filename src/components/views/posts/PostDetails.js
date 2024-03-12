import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getPostById } from "../../../managers/postManager"
import { formatDate, isEmptyObject } from "../../../helper"
import "./Post.css"

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
          <div className="post-details__content-a">
            <h1 className="post__title">{post.title}</h1>
            {post.image_url && <img className="post__img" alt="header" src={post.image_url} />}
          </div>
          <div className="post-details__content-b">
            <h3 className="post__date">Published on {formatDate(post.publication_date)}</h3>
            <h3 className="post__username">
              By <i className="post__username-name">{post.user.username}</i>
            </h3>
          </div>
          <p className="post__body">{post.content}</p>
        </>
      )}
    </div>
  )
}
