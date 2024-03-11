import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const TagList = () => {
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/tags")
      .then((response) => response.json())
      .then((data) => setTags(data));
  }, []);

  return (
    <div>
      <h2>Tags</h2>
      <button onClick={() => navigate("/tags/create")}>Create Tag</button>
      <ul>
        {tags.map((tag) => (
          <li key={tag.id}>{tag.name}</li>
        ))}
      </ul>
    </div>
  );
};
