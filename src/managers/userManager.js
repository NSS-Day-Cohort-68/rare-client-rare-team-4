import { apiUrl, fetchOptions } from "../helper"

export const getUsers = async () => {
  return await fetch(`${apiUrl}/users`).then((res) => res.json())
}

export const getUserById = async (id) => {
  return await fetch(`${apiUrl}/users/${id}`).then((res) => res.json())
}

export const createUser = async (user) => {
  return await fetch(`${apiUrl}/users`, fetchOptions("POST", user)).then((res) => res.json())
}

export const userExists = async (user) => {
  return await fetch(`${apiUrl}/login`, fetchOptions("GET", user)).then((res) => res.json())
}
