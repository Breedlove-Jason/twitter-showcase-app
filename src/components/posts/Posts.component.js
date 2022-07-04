import React from "react";
import "./Posts.styles.css";
import Avatar from "@material-ui/core/Avatar";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

function Posts({ displayName, username, verified, text, image, avatar, time }) {
  return (
    <div className={"posts"}>
      <div className={"posts__avatar"}>
        <Avatar
          src={
            "https://imgs.search.brave.com/9Wr-yBXvYvhITEBALrq9egm9qrBDp3BcaV_FW5Yuloo/rs:fit:300:300:1/g:ce/aHR0cDovL3dvcmto/b3VuZC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMDUv/cGxhY2Vob2xkZXIt/cHJvZmlsZS1waWMu/cG5n"
          }
        />
      </div>
      <div className={"posts__body"}>
        <div className={"posts__header"}>
          <div className="posts_headerText">
            <h3>
              Jason Breedlove{" "}
              <span className={"posts__headerSpecial"}>
                <img
                  className={"verifiedButton"}
                  src={require("./icons8-verified-badge-100.png")}
                  alt={"Verified"}
                />
                @{"JBreedloveDev"}
              </span>
            </h3>
          </div>
          <div className="posts__headerDescription">
            <p>This is a sample tweet to test functionality</p>
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
