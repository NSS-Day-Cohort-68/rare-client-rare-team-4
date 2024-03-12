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
          <Link to="/" className="navbar-link" id={url === "/" ? "selected" : ""}>
            Home
          </Link>
        ) : (
          <Link to="/h" className="navbar-link" id={url === "/h" ? "selected" : ""}>
            Home
          </Link>
        )}
      </li>

      <li className="navbar-item">
        <Link to="/posts" className="navbar-link" id={url === "/posts" ? "selected" : ""}>
          All Posts
        </Link>
      </li>

      <li className="navbar-item">
        <Link to="/userPosts" className="navbar-link" id={url === "/userPosts" ? "selected" : ""}>
          My Posts
        </Link>
      </li>

      <li className="navbar-item">
        <Link to="/category-list" className="navbar-link" id={url === "/category-list" ? "selected" : ""}>
          Category Manager
        </Link>
      </li>

      <li className="navbar-item">
        {loggedInUser && (
          <Link to="/tags" className="navbar-link" id={url === "/tags" ? "selected" : ""}>
            Tag Manager
          </Link>
        )}
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
            className="navbar-link">
            Logout
          </Link>
        </li>
      ) : (
        <li className="navbar-item navbar-logout">
          <Link to="/login" className="navbar-link">
            Login
          </Link>
        </li>
      )}
    </ul>
  )
}
