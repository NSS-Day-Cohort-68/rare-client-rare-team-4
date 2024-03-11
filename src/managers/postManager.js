export const getAllPosts = () => {
  return fetch(
    `http://localhost:8000/posts?_expand=author_id?_expand=category_id`
  ).then((res) => res.json())
}

export const getPostByUserId = (userId) => {
  return fetch(`http://localhost:8000/posts/${userId}`)
}
