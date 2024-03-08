import "./App.css"
import { ApplicationViews } from "./components/views/ApplicationViews"
import { UserPostList } from "./components/views/users/UserPosts.js"
import { useEffect, useState } from "react"

export const App = () => {
  return (
    <div className="app-container">
      <ApplicationViews />
    </div>
  )
}
