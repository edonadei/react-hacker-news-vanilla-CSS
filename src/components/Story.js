import React, { useState, useEffect } from "react";
import { getStory } from "../services/hnAPI";
import {
  StoryWrapper,
  StoryTitle,
  StoryMetaElement,
  StoryMeta
} from "../styles/StoryStyles";

export const Story = ({ storyID }) => {
  const [story, setStory] = useState({});
  // we're checking if data exists && data.url exists
  useEffect(() => {
    getStory(storyID).then(data => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <StoryWrapper>
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>
      <StoryMeta>
        <span className="story_by" data-testid="story-by">
          <StoryMetaElement color="#000">By:</StoryMetaElement> {story.by}
        </span>
      </StoryMeta>
      <StoryMeta>
        <span className="story_time" data-testid="story-time">
          <StoryMetaElement color="#000">Posted:</StoryMetaElement>
          {` `} {story.time}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null ;
};
