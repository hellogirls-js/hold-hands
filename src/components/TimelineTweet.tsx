import React from "react";
import Avatar from "./Avatar";
import { USERS } from "../data/users";
import { IconChartBar, IconDots, IconHeart, IconMessageCircle, IconRepeat, IconShare2 } from "@tabler/icons-react";
import { TWEETS } from "../data/tweets";
import QuoteRetweet from "./QuoteRetweet";
import { useNavigate } from "react-router";



export default function TimelineTweet({ tweet }: { tweet: Tweet }) {
  const formatter = Intl.NumberFormat('en', { notation: "compact" });
  const navigate = useNavigate();

  const user: User = USERS.filter(u => u.user_id === tweet.author)[0];
  const replyCount = TWEETS.filter(t => t.is_reply && t.original_tweetid === tweet.tweet_id).length;
  const retweetCount = TWEETS.filter(t => t.is_qrt && t.original_tweetid === tweet.tweet_id).length + tweet.retweet_count + tweet.private_qrts;

  return (
    <div className="timeline-tweet" onClick={() => { navigate(`${user.username}/status/${tweet.tweet_id}`, { replace: true })}}>
      <div className="timeline-tweet-icon">
        <Avatar user={user} />
      </div>
      <div className="timeline-tweet-content">
        <div className="timeline-tweet-content-header">
          <div className="timeline-tweet-display-name">{user.display_name}</div>
          <div className="timeline-tweet-username">@{user.username}</div>
          <div className="timeline-tweet-time-passed">·</div>
          <div className="timeline-tweet-time-passed">2h</div>
        </div>
        <div className="timeline-tweet-content-container">
          <p>{tweet.tweet_content}</p>
          {tweet.media && tweet.media.map((m, i) => { 
            console.log(m);
            return m.split('.')[2] === "mp4" ? (<video key={i} controls><source src={m} type="video/mp4" /></video>) : ""; 
          })}
          {tweet.original_tweetid !== undefined && tweet.is_qrt ? <QuoteRetweet tweetId={tweet.original_tweetid} /> : null}
          <div className="timeline-tweet-content-footer">
            <div className="timeline-tweet-content-stat">
              <div className="timeline-tweet-content-stat-icon">
                <IconMessageCircle size={20} />
              </div>
              <div className="timeline-tweet-content-stat-number">
                {replyCount > 0 && formatter.format(replyCount)}
              </div>
            </div>
            <div className="timeline-tweet-content-stat">
              <div className="timeline-tweet-content-stat-icon">
                <IconRepeat size={20} />
              </div>
              <div className="timeline-tweet-content-stat-number">
                {retweetCount > 0 && formatter.format(retweetCount)}
              </div>
            </div>
            <div className="timeline-tweet-content-stat">
              <div className="timeline-tweet-content-stat-icon">
                <IconHeart size={20} />
              </div>
              <div className="timeline-tweet-content-stat-number">
                {tweet.like_count > 0 && formatter.format(tweet.like_count)}
              </div>
            </div>
            <div className="timeline-tweet-content-stat">
              <div className="timeline-tweet-content-stat-icon">
                <IconChartBar size={20} />
              </div>
              <div className="timeline-tweet-content-stat-number">
                {tweet.views > 0 && formatter.format(tweet.views)}
              </div>
            </div>
            <div className="timeline-tweet-content-stat">
              <div className="timeline-tweet-content-stat-icon">
                <IconShare2 size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="timeline-tweet-settings">
        <IconDots size={20} />
      </div>
    </div>
  )
}