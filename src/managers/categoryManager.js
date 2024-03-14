import { apiUrl, fetchOptions } from "../helper"

export const createCategory = async (category) => {
  return await fetch(`${apiUrl}/categories`, fetchOptions("POST", category)).then((res) => res.json())
}

export const getAllCategories = async () => {
  return await fetch(`${apiUrl}/categories`).then((res) => res.json())
}

export const getCategory = async (categoryId) => {
  return await fetch(`${apiUrl}/categories/${categoryId}`).then((res) => res.json())
}

export const deleteCategory = async (category) => {
  return await fetch(`${apiUrl}/categories/${category.id}`, fetchOptions("DELETE")).then((res) => res.json())
}

export const updateCategory = async (category) => {
  return await fetch(`${apiUrl}/categories/${category.id}`, fetchOptions("PUT", category)).then((res) => res.json())
}
