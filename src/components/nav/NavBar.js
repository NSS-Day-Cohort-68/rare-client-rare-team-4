import { Link, useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = ({ loggedInUser, setLoggedInUser }) => {
  const navigate = useNavigate()
  const url = useLocation().pathname

  return (
    <ul className="navbar">
      <li className="navbar-item">
        {loggedInUser ? (
          <Link
            to="/"
            className="navbar-link"
            id={url === "/" ? "selected" : ""}
          >
            Home
          </Link>
        ) : (
          <Link
            to="/h"
            className="navbar-link"
            id={url === "/h" ? "selected" : ""}
          >
            Home
          </Link>
        )}
      </li>

      <li className="navbar-item">
        <Link
          to="/userPosts"
          className="navbar-link"
          id={url === "/userPosts" ? "selected" : ""}
        >
          User Posts
        </Link>
      </li>

      {/*//* add more navbar items here */}
      <li className="navbar-item">
        <Link to="/category-list" className="navbar-link" id={url === "/category-list" ? "selected" : ""}>
          Category Management
        </Link>
      </li>
      
      {localStorage.getItem("rare_user") ? (
        <li className="navbar-item navbar-logout">
          <Link
            to=""
            onClick={() => {
              localStorage.removeItem("rare_user")
              setLoggedInUser(null)
              navigate("/login", { replace: true })
            }}
            className="navbar-link"
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  )
}
