import React from "react";
import "./Widgets.styles.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className={"widgets"}>
      <div className="widgets__input">
        <SearchIcon className={"widgets__searchIcon"} />
        <input placeholder={"Search Twitter"} type={"text"} />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="JBreedloveDev"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.twitter.com/JBreedloveDev"}
          options={{ text: "reactjs is awesome", via: "JBreedloveDev" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
