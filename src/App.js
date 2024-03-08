import "./App.css";
import { ApplicationViews } from "./components/views/ApplicationViews";
import { UserPostList } from "./components/views/users/UserPosts.js";
import { useEffect, useState } from "react";

export const App = () => {
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    const localRareUser = localStorage.getItem("rare_user");
    const rareUserObject = JSON.parse(localRareUser);

    setCurrentUser(rareUserObject);
  }, []);

  return (
    <div className="app-container">
      <ApplicationViews currentUser={currentUser} />
    </div>
  );
};
