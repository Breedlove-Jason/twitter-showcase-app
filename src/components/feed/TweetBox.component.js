import React from "react";
import "./TweetBox.styles.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className={"tweetBox"}>
      <form>
        <div className="tweetBox__input">
          <Avatar src={require("./profilePic.jpg")} />
          <input placeholder={"What's happening?"} type={"text"} />
        </div>
        <input
          className={"tweetBox__inputImage"}
          placeholder={"Optional: Enter image URL"}
          type={"text"}
        />

        <Button className={"tweetBox__tweetButton"}>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
