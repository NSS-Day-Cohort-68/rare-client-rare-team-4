import { useEffect, useState } from "react";
import { getAllTags } from "../../../managers/tagManager.js";

export const Tags = () => {
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    getAllTags().then((tagsArray) => {
      setAllTags(tagsArray);
    }, []);
  });
  return (
    <div className="tags-container">
      <h2> Tags</h2>
      <article className="tags">
        {allTags.map((tag) => {
          return (
            <section className="tag" key={tag.id}>
              <header className="tag-info">{tag.id}</header>
              <div className="tag-name">{tag.label}</div>
            </section>
          );
        })}
      </article>
    </div>
  );
};
