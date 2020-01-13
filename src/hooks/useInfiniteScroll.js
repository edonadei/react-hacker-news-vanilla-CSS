import { useState, useEffect } from "react";
import { STORY_INCREMENT, MAX_STORIES } from "../constants";

export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(STORY_INCREMENT)

  const handleScroll = () => {
      console.log('window')
  }
};
