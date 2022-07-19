import React, { useState, useEffect } from "react";
import "./Feed.styles.css";
import TweetBox from "./TweetBox.component";
import Posts from "../posts/Posts.component";
import db from "../../firebase";

function Feed() {
  const [tweets, setTweets] = useState([]);

  // useEffect(() => {
  //   db.collection("tweets").onSnapshot((snapshot) =>
  //     setTweets(snapshot.docs.map((doc) => doc.data()))
  //   );
  // }, []);

  return (
    <div className={"feed"}>
      <div className={"feed__header"}>
        {/*{tweets.map((tweet) => (*/}
        {/*  <Posts*/}
        {/*    displayName={tweet.displayName}*/}
        {/*    username={tweet.username}*/}
        {/*    // verified={tweet.verified}*/}
        {/*    text={tweet.text}*/}
        {/*    avatar={tweet.avatar}*/}
        {/*    image={tweet.image}*/}
        {/*  />*/}
        {/*))}*/}
        <Posts
          displayName={"Jason Breedlove"}
          username={"JBreedloveDev"}
          verified={true}
          text={"This is working"}
          avatar={
            "https://imgs.search.brave.com/9Wr-yBXvYvhITEBALrq9egm9qrBDp3BcaV_FW5Yuloo/rs:fit:300:300:1/g:ce/aHR0cDovL3dvcmto/b3VuZC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMDUv/cGxhY2Vob2xkZXIt/cHJvZmlsZS1waWMu/cG5n"
          }
          image={"https://via.placeholder.com/350x150"}
        />
      </div>
      <TweetBox />
    </div>
  );
}

export default Feed;
