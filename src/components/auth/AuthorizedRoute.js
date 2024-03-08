import { Navigate, useLocation } from "react-router-dom";

export const AuthorizedRoute = ({ children, isPublicOnly = false, url }) => {
  const location = useLocation();
  const localUser = localStorage.getItem("rare_user");

  if (!isPublicOnly) {
    // if the route requires authorization
    if (!!localUser) {
      // and the user is logged in, allow entry
      return children;
    } else {
      // if the user is not logged in, do not allow entry
      if (url === "/") {
        return <Navigate to="/h" state={{ from: location }} replace />;
      }
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  } else {
    // if the route does not require authorization
    if (!localUser) {
      // and the user is not logged in, allow entry
      return children;
    } else {
      // if the user is logged in, do not allow entry
      return <Navigate to="/" state={{ from: location }} replace />;
    }
  }
};
