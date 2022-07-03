import React from "react";
import "./TweetBox.styles.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className={"tweetBox"}>
      <form>
        <div className="tweetBox__input">
          <Avatar
            src={
              "https://imgs.search.brave.com/9Wr-yBXvYvhITEBALrq9egm9qrBDp3BcaV_FW5Yuloo/rs:fit:300:300:1/g:ce/aHR0cDovL3dvcmto/b3VuZC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMDUv/cGxhY2Vob2xkZXIt/cHJvZmlsZS1waWMu/cG5n"
            }
          />
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
