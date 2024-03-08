export const getAllPosts = () => {
    return fetch(`http://localhost:8000/posts`).then((res)=>res.json())
}


export const getPostByUserId = (userId) => {
    return fetch(`http://localhost:8000/posts/${userId}`)
}