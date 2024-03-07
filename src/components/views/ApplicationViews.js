import { useEffect, useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"
import { AuthorizedRoute } from "../auth/AuthorizedRoute"

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
      <Route
        path="/"
        element={
          <AuthorizedRoute loggedInUser={loggedInUser}>
            <Outlet />
          </AuthorizedRoute>
        }>
        <Route index element={<>[insert home page here]</>} />

        {/*//* add more application routes here */}
      </Route>

      <Route
        path="/login"
        element={
          <AuthorizedRoute loggedInUser={loggedInUser} isPublicOnly={true}>
            <Login setLoggedInUser={setLoggedInUser} />
          </AuthorizedRoute>
        }
      />
      <Route
        path="/register"
        element={
          <AuthorizedRoute loggedInUser={loggedInUser} isPublicOnly={true}>
            <Register setLoggedInUser={setLoggedInUser} />
          </AuthorizedRoute>
        }
      />
    </Routes>
  )
}
