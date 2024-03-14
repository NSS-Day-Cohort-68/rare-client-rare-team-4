import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate, useParams } from "react-router-dom"
import { getPostById } from "../../../managers/postManager"
import { formatDate, isEmptyObject } from "../../../helper"
import "./Post.css"

export const PostDetails = ({ loggedInUser }) => {
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
            <h1 className="post-details__title">{post.title}</h1>
            {post.image_url && (
              <img
                className="post-details__img"
                alt="header"
                src={post.image_url}
              />
            )}
            <h1 className="post__title">{post.title}</h1>
            {post.image_url && (
              <img className="post__img" alt="header" src={post.image_url} />
            )}
          </div>
          <div className="post-details__content-b">
            <h3 className="post-details__date">
              Published on {formatDate(post.publication_date)}
            </h3>
            <h3 className="post-details__username">
              By{" "}
              <i className="post-details__username-name">
                {post.user.username}
              </i>
            </h3>
            <h3 className="post__date">
              Published on {formatDate(post.publication_date)}
            </h3>
            <h3 className="post__username">
              By <i className="post__username-name">{post.user.username}</i>
            </h3>
          </div>
          <p className="post__body">{post.content}</p>
        </>
      )}

      <div className="Comments">
        <Link to={`/${postId}/view-comments`}>
          <button>View Comments</button>
        </Link>
        <Link to={`/${postId}/add-comment`}>
          <button>Add Comment</button>
        </Link>
      </div>
    </div>
  )
}
