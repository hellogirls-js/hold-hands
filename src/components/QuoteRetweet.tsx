import React from "react";
import { TWEETS } from "../data/tweets";
import Avatar from "./Avatar";
import { USERS } from "../data/users";
import "./styles/QuoteRetweet.css"
import { useNavigate } from "react-router-dom";

export default function QuoteRetweet({ tweetId }: { tweetId: number }) {
  const navigate = useNavigate();
  const tweet = TWEETS.filter(t => t.tweet_id === tweetId)[0];
  const user = USERS.filter(u => u.user_id === tweet.author)[0];

  return (
    <div className="quote-retweet" onClick={() => navigate(`/${user.username}/status/${tweetId}`)}>
      <div className="quote-retweet-header">
        <div className="quote-retweet-icon">
          <Avatar size={24} user={user} />
        </div>
        <div className="quote-retweet-display-name">
          {user.display_name}
        </div>
        <div className="quote-retweet-username">
          @{user.username}
        </div>
        <div className="quote-retweet-time-passed">·</div>
        <div className="quote-retweet-time-passed">2h</div>
      </div>
      <div className="quote-retweet-content">
        <p>{tweet.tweet_content}</p>
      </div>
    </div>
  );
}