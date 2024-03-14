import { apiUrl, fetchOptions } from "../helper"

export const getAllTags = async () => {
  return await fetch(`${apiUrl}/tags`).then((res) => res.json())
}

export const createTag = async (tag) => {
  return await fetch(`${apiUrl}/tags`, fetchOptions("POST", tag)).then((res) => res.json())
}

export const deleteTag = async (tag) => {
  return await fetch(`${apiUrl}/tags/${tag.id}`, fetchOptions("DELETE")).then((res) => res.json())
}
