import { useEffect, useState } from "react"
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"
import { AuthorizedRoute } from "../auth/AuthorizedRoute"
import { NavBar } from "../nav/NavBar"
import { PostDetails } from "./posts/PostDetails"
import { UserPostList } from "./posts/UserPosts.js"
import { PostsList } from "./posts/PostsList.js"
import { CreateTagForm } from "../tags/CreateTagForm.js"
import { TagList } from "../tags/TagList.js"

export const ApplicationViews = () => {
  const [loggedInUser, setLoggedInUser] = useState(null)
  const location = useLocation()

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
          <AuthorizedRoute url={location.pathname}>
            <NavBar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
            <Outlet />
          </AuthorizedRoute>
        }>
        <Route index element={<>Rare - Home Page</>} /> {/* home page will go here */}
        <Route path="/posts" element={<PostsList />} />
        <Route path="/userPosts" element={<UserPostList loggedInUser={loggedInUser} />} />
        <Route path="/tags" element={<TagList />} />
        <Route path="/tags/create" element={<CreateTagForm />} />
        <Route path="/post-details">
          <Route index element={<Navigate to={"/"} state={{ from: location }} replace />} />
          <Route path=":postId" element={<PostDetails />} />
        </Route>
      </Route>

      <Route
        path="/login"
        element={
          <AuthorizedRoute isPublicOnly={true}>
            <Login setLoggedInUser={setLoggedInUser} />
          </AuthorizedRoute>
        }
      />
      <Route
        path="/register"
        element={
          <AuthorizedRoute isPublicOnly={true}>
            <Register setLoggedInUser={setLoggedInUser} />
          </AuthorizedRoute>
        }
      />
      <Route
        path="/h"
        element={
          <AuthorizedRoute isPublicOnly={true}>
            <NavBar setLoggedInUser={setLoggedInUser} />
            <>Rare - Home Page</> {/* home page will go here, too */}
          </AuthorizedRoute>
        }
      />

      <Route path="*" element={<Navigate to={"/"} state={{ from: location }} replace />} />
    </Routes>
  )
}
