import { useEffect, useState } from "react"
import { getAllPosts } from "../../../managers/postManager"
import "./Post.css"

export const removeBadPosts = (posts) => {
  // removes unapproved posts, and posts with invalid dates
  return [...posts].filter((post) => !!post.approved && new Date(post.publication_date) <= new Date())
}

export const PostsList = () => {
  const [allPosts, setAllPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])

  useEffect(() => {
    getAllPosts().then(setAllPosts)
  }, [])

  useEffect(() => {
    setFilteredPosts(
      removeBadPosts(allPosts).sort((a, b) => new Date(b.publication_date) - new Date(a.publication_date))
    )
  }, [allPosts])

  return (
    <>
      <div className="posts-list__container">
        <h1 className="posts-list__header">All Posts</h1>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <ul key={post.id} className="post__container">
              <div className="post__content-a">
                <li className="post__title">{post.title}</li>
                <li className="post__category">{post.category.label}</li>
              </div>
              <li className="post__username">
                By <i className="post__username-name">{post.user.username}</i>
              </li>
            </ul>
          ))
        ) : (
          <div className="posts-list__message">No posts have been created yet.</div>
        )}
      </div>
    </>
  )
}
