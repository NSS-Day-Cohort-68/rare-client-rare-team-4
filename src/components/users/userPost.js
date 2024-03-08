import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getAllPosts, getPostByUserId } from "../../managers/postManager.js"


export const UserPostList = ({currentUser}) => {
    const [allPosts, setAllPosts] = useState([])
    const [showFilteredPosts, setShowFilteredPosts] = useState([])
    



    useEffect(()=>{
        if (currentUser){
            getAllPosts().then(postArray=>{
                const userPosts = postArray.filter(post=>post.userId===currentUser.id)
                // userPosts.sort((a,b)=>a.date - b.date)
                setShowFilteredPosts(userPosts)
            })
        }
    },[currentUser, allPosts])

    // useEffect(()=>{
    //     getAllPosts().then(postArray=>{
    //         setAllPosts(postArray)
    //     })
    // },[])


    return (
        <>
        <h1>My Posts</h1>
        {allPosts.length > 0 ? (
            allPosts.map(post=>(
                <div className="userPosts">
                    <div className="userTitle">{post.title}</div>
                    <div className="userAuthor">{post.user_id}</div>
                    <div className="userDate">{post.publication_date}</div>
                    <div className="userCategory">{post.category_id}</div>
                    <div className="userContent">{post.content}</div>
                </div>
            ))
        ): (
            <p>No posts found for current user.</p>
        )}
        </>
    )
}