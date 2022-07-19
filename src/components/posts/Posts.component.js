import React from "react";
import "./Posts.styles.css";
import Avatar from "@material-ui/core/Avatar";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

function Posts({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className={"posts"}>
      <div className={"posts__avatar"}>
        <Avatar src={avatar} />
      </div>
      <div className={"posts__body"}>
        <div className={"posts__header"}>
          <div className="posts_headerText">
            <h3>
              {displayName}{" "}
              <span className={"posts__headerSpecial"}>
                {verified && (
                  <img
                    className={"verifiedButton"}
                    src={require("./twitterVerified.png")}
                    alt={"Verified"}
                  />
                )}{" "}
                @{username}
              </span>
            </h3>
          </div>
          <div className="posts__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={"https://via.placeholder.com/350x150"} alt={"Placeholder"} />
        <div className="posts__footer">
          <ChatBubbleOutlineIcon fontSize={"small"} />
          <RepeatIcon fontSize={"small"} />
          <FavoriteBorderIcon fontSize={"small"} />
          <PublishIcon fontSize={"small"} />
        </div>
      </div>
    </div>
  );
}

export default Posts;
