import { apiUrl, fetchOptions } from "../helper"

export const createCategory = async (category) => {
  return await fetch(`${apiUrl}/categories`, fetchOptions("POST", category)).then((res) => res.json())
}

export const getAllCategories = async () => {
  return await fetch(`${apiUrl}/categories`).then((res) => res.json())
}

export const deleteCategory = async (category) => {
  return await fetch(`${apiUrl}/categories/${category.id}`, fetchOptions("DELETE")).then((res) => res.json())
}
