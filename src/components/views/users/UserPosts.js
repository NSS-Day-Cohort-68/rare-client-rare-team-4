import { useEffect, useState } from "react"
import "./users.css"

import { getAllPosts } from "../../../managers/postManager.js"

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
        const userPosts = userPostArray.filter(
          (post) => post.user_id === loggedInUser.id
        )
        userPosts.sort(
          (a, b) => new Date(b.publication_date) - new Date(a.publication_date)
        )
        setShowFilteredPosts(userPosts)
      })
    }
  }, [loggedInUser, allPosts])

  return (
    <>
      <section className="userProfile">
        <h1 className="myPosts">My Posts</h1>
        {showFilteredPosts.length > 0 ? (
          showFilteredPosts.map((post) => (
            <div key={post.id} className="userPosts">
              <div className="userTitle">
                <h2>{post.title}</h2>
              </div>
              <div className="userAuthor">{post.user.username}</div>
              <div className="userDate">{post.publication_date}</div>
              <div className="userCategory">{post.category.label}</div>
              <div className="userContent">{post.content}</div>
            </div>
          ))
        ) : (
          <p>No posts found for current user.</p>
        )}
      </section>
    </>
  )
}
