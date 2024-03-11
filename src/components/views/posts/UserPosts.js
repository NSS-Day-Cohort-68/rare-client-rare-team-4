import { useEffect, useState } from "react"
import { getAllPosts } from "../../../managers/postManager.js"
import { removeBadPosts } from "./PostsList.js"
import "./Post.css"

export const UserPostList = ({ loggedInUser }) => {
  const [allPosts, setAllPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])

  useEffect(() => {
    getAllPosts().then((postArray) => {
      setAllPosts(postArray)
    })
  }, [])

  useEffect(() => {
    if (loggedInUser) {
      const userPosts = [...allPosts].filter((post) => post.user_id === loggedInUser.id)
      userPosts.sort((a, b) => new Date(b.publication_date) - new Date(a.publication_date))
      setFilteredPosts(removeBadPosts(userPosts))
    }
  }, [loggedInUser, allPosts])

  return (
    <>
      <div className="posts-list__container">
        <h1 className="posts-list__header">My Posts</h1>
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
          <div className="posts-list__message">No posts found for current user.</div>
        )}
      </div>
    </>
  )
}
