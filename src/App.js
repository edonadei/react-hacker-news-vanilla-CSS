import React, { useEffect, useState } from "react";
import "./App.css";
import { getStoryIds } from "./services/hnAPI";

function App() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => {
      setStoryIds(data);
    });
  }, []);

  return (
    <React.Fragment>
      {storyIds.map((item) => {
        return item + " "
      })}
    </React.Fragment>
  );
}

export default App;
