import { useEffect, useState } from "react"
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"
import { AuthorizedRoute } from "../auth/AuthorizedRoute"
import { NavBar } from "../nav/NavBar"
import { TagList } from "./tags/TagList.js"
import { PostDetails } from "./posts/PostDetails"
import { UserPostList } from "./posts/UserPosts.js"
import { CategoryList } from "./categories/CategoryList.js"
import { CategoryForm } from "./categories/CategoryForm.js"
import { PostsList } from "./posts/PostsList.js"
import { NewComments } from "./comments/NewComments.js"
import { ViewComments } from "./comments/ViewComments.js"
import { CreateTagForm } from "./tags/TagForm.js"

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
            <NavBar
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
            />
            <Outlet />
          </AuthorizedRoute>
        }
      >
        <Route index element={<>Rare - Home Page</>} />{" "}
        {/* home page will go here */}
        <Route path="/categories">
          <Route index element={<CategoryList />} />
          <Route path="create" element={<CategoryForm />} />
          <Route path="edit">
            <Route index element={<Navigate to={"/categories"} state={{ from: location }} replace />} />
            <Route path=":categoryId" element={<CategoryForm isEditing={true} />} />
          </Route>
        </Route>
        <Route path="/posts" element={<PostsList />} />
        <Route path="/tags">
          <Route index element={<TagList />} />
          <Route path="create" element={<CreateTagForm />} />
        </Route>
        <Route
          path="/userPosts"
          element={<UserPostList loggedInUser={loggedInUser} />}
        />
        <Route path="/post-details">
          <Route
            index
            element={<Navigate to={"/"} state={{ from: location }} replace />}
          />
          <Route
            path=":postId"
            element={<PostDetails loggedInUser={loggedInUser} />}
          />
        </Route>
        <Route
          path=":postId/add-comment"
          element={<NewComments loggedInUser={loggedInUser} />}
        />
        <Route
          path=":postId/view-comments"
          element={<ViewComments loggedInUser={loggedInUser} />}
        />
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

      <Route
        path="*"
        element={<Navigate to={"/"} state={{ from: location }} replace />}
      />
    </Routes>
  )
}
