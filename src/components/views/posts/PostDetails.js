import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getPostById } from "../../../managers/postManager"
import { isEmptyObject } from "../../../helper"

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
          <div className="post-details__title">Title: {post.title}</div>
          <div className="post-details__img">Image: {post.image_url}</div>
          <div className="post-details__content">Content:</div>
          <div className="post-details__date">Date (MM/DD/YYYY):</div>
          <div className="post-details__username">Username:</div>
        </>
      )}
    </div>
  )
}
