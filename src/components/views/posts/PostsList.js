import { useEffect, useState } from "react"
import { getAllPosts } from "../../../managers/postManager"
import "./Post.css"

export const PostsList = () => {
  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {
    getAllPosts().then(setAllPosts)
  }, [])

  return (
    <>
      <div className="posts-list__container">
        <h1 className="posts-list__header">All Posts</h1>
        {allPosts.length > 0 ? (
          allPosts.map((post) => (
            <ul key={post.id} className="post__container">
              <li className="post__title">{post.title}</li>
              <li className="post__author">{post.user.username}</li>
              <li className="post__date">{post.publication_date}</li>
              <li className="post__category">{post.category.label}</li>
              <li className="post__body">{post.content}</li>
            </ul>
          ))
        ) : (
          <>No posts have been created yet.</>
        )}
      </div>
    </>
  )
}
