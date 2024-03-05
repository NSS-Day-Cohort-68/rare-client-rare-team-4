import { useEffect, useState } from "react"
import { getAllPosts, getPostByUserId } from "../../managers/postManager.js"


export const UserPostList = ({currentUser}) => {
    const [allPosts, setAllPosts] = useState([])
    const [showFilteredPosts, setShowFilteredPosts] = useState([])
    


    useEffect(()=>{
        if (currentUser){
            getAllPosts().then(postArray=>{
                const userPosts = postArray.filter(post=>post.userId===currentUser.id)
                userPosts.sort((a,b)=>a.date - b.date)
                setShowFilteredPosts(userPosts)
            })
        }
    },[currentUser, allPosts])




    return (
        <>
        <h1>My Posts</h1>
        {showFilteredPosts.length > 0 ? (
            showFilteredPosts.map(post=>(
                <div className="userPosts">
                    <div className="userTitle">{post.title}</div>
                    <div className="userAuthor">{post.userId}</div>
                    <div className="userDate">{post.date}</div>
                    <div className="userCategory">{post.categoryId}</div>
                </div>
            ))
        ): (
            <p>No posts found for current user.</p>
        )}
        </>
    )
}