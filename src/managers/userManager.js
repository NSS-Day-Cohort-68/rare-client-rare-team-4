import { apiUrl, fetchOptions } from "../helper"

export const getUsers = async () => {
  return await fetch(`${apiUrl}/users`).then((res) => res.json())
}

export const getUserById = async (id) => {
  return await fetch(`${apiUrl}/users/${id}`).then((res) => res.json())
}

export const getUserByEmail = async (email) => {
  return await fetch(`${apiUrl}/users?email=${email}`).then((res) => res.json())
}

export const createUser = async (user) => {
  return await fetch(`${apiUrl}/users`, fetchOptions("POST", user)).then(
    (res) => res.json()
  )
}

export const userExists = async (user) => {
  return await fetch(`${apiUrl}/login`, fetchOptions("POST", user)).then(
    (res) => res.json()
  )
}
