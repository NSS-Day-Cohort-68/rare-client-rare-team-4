import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"


export const ApplicationViews = () => {
  const [loggedInUser, setLoggedInUser] = useState(null)

  useEffect(() => {
    // check if user is logged in
    const user = localStorage.getItem("rare_user")
    if (!!user) {
      // user exists in local storage
      setLoggedInUser(JSON.parse(user))
    } else {
      // user does not exist in local storage
      setLoggedInUser(null)
    }
  }, [])

  return (
    <Routes>
      <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
      <Route path="/register" element={<Register setLoggedInUser={setLoggedInUser} />} />
    </Routes>
  )
}
