import React, { useState, useEffect } from "react";
import { getStory } from "../services/hnAPI";

export const Story = ({ storyID }) => {
  const [story, setStory] = useState({});
  // we're checking if data exists && data.url exists
  useEffect(() => {
    getStory(storyID).then(data => data && data.url && setStory(data));
  }, []);

  return (
    <React.Fragment>
      <a href={story.url}>
        <p>
          {story.title}
        </p>
      </a>
      <p>By: {story.by}</p>
      <p>Posted: {story.time}</p>
    </React.Fragment>
  );
};
