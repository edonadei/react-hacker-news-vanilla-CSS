import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/hnAPI";
import { Story } from "../components/Story";
import {
  GlobalStyle,
  StoriesContainerWrapper
} from "../styles/StoryContainerStyles";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => {
      setStoryIds(data);
    });
  }, []);

  return (
    <React.Fragment>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hacker News Digest</h1>
        {storyIds.map(item => {
          return <Story key={item} storyID={item} />;
        })}
      </StoriesContainerWrapper>
    </React.Fragment>
  );
};
