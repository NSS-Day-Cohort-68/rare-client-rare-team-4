import { useEffect, useState } from "react"
import { getAllPosts } from "../../../managers/postManager.js"
import "./Post.css"

export const UserPostList = ({ loggedInUser }) => {
  const [allPosts, setAllPosts] = useState([])
  const [showFilteredPosts, setShowFilteredPosts] = useState([])

  useEffect(() => {
    getAllPosts().then((postArray) => {
      setAllPosts(postArray)
    })
  }, [])

  useEffect(() => {
    if (loggedInUser) {
      getAllPosts().then((userPostArray) => {
        const userPosts = userPostArray.filter((post) => post.user_id === loggedInUser.id)
        userPosts.sort((a, b) => new Date(b.publication_date) - new Date(a.publication_date))
        setShowFilteredPosts(userPosts)
      })
    }
  }, [loggedInUser, allPosts])

  return (
    <>
      <div className="posts-list__container">
        <h1 className="posts-list__header">My Posts</h1>
        {showFilteredPosts.length > 0 ? (
          showFilteredPosts.map((post) => (
            <div key={post.id} className="post__container">
              <div className="post__content-a">
                <h2 className="post__title">{post.title}</h2>
                <div className="post__category">{post.category.label}</div>
              </div>
              <div className="post__username">
                By <i className="post__username-name">{post.user.username}</i>
              </div>
            </div>
          ))
        ) : (
          <p>No posts found for current user.</p>
        )}
      </div>
    </>
  )
}
