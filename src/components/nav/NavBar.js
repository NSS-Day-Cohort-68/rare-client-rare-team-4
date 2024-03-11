import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = ({ loggedInUser, setLoggedInUser }) => {
  const navigate = useNavigate();
  const url = useLocation().pathname;

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
          to="/bruh"
          className="navbar-link"
          id={url === "/bruh" ? "selected" : ""}
        >
          [example link]
        </Link>
      </li>
      <li className="navbar-item">
        {loggedInUser && (
          <Link
            to="/tags"
            className="navbar-link"
            id={url === "/tags" ? "selected" : ""}
          >
            Tags
          </Link>
        )}
      </li>

      {/*//* add more navbar items here */}

      {localStorage.getItem("rare_user") ? (
        <li className="navbar-item navbar-logout">
          <Link
            to=""
            onClick={() => {
              localStorage.removeItem("rare_user");
              setLoggedInUser(null);
              navigate("/login", { replace: true });
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
  );
};
