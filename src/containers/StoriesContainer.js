import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/hnAPI";
import { Story } from "../components/Story";

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => {
      setStoryIds(data);
    });
  }, []);

  return (
    <React.Fragment>
      {storyIds.map(item => {
        return <Story key={item} storyID={item} />;
      })}
    </React.Fragment>
  );
};
