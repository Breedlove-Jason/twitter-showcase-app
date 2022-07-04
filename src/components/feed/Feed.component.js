import React from "react";
import "./Feed.styles.css";
import TweetBox from "./TweetBox.component";
import Posts from "../posts/Posts.component";
function Feed() {
  return (
    <div className={"feed"}>
      <div className={"feed__header"}>
        <h2>Home</h2>
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </div>
      <TweetBox />
    </div>
  );
}

export default Feed;
