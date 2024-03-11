import { apiUrl } from "../helper"

export const getPosts = async () => {
  return await fetch(`${apiUrl}/posts`).then((res) => res.json())
}

export const getPostById = async (id) => {
  return await fetch(`${apiUrl}/posts/${id}`).then((res) => res.json())
}
