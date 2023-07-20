import React from "react";
import PageHeader from "../components/PageHeader";
import { useParams } from "react-router";
import { USERS } from "../data/users";
import { TWEETS } from "../data/tweets";
import "./styles/tweet_page.css";
import Avatar from "../components/Avatar";
import TimelineTweet from "../components/TimelineTweet";
import dayjs from "dayjs";
import { IconHeart, IconMessageCircle, IconRepeat, IconShare2 } from "@tabler/icons-react";
import QuoteRetweet from "../components/QuoteRetweet";
import { useNavigate } from "react-router-dom";

export default function TweetPage() {
  const { username, tweet_id } = useParams();
  const navigate = useNavigate();
  const user = USERS.filter(u => u.username === username)[0];
  const tweet = TWEETS.filter(t => tweet_id && t.tweet_id === parseInt(tweet_id))[0];
  const replies = TWEETS.filter(t => t.is_reply && t.original_tweetid === tweet.tweet_id);
  const qrtCount = TWEETS.filter(t => t.is_qrt && t.original_tweetid === tweet.tweet_id).length + tweet.private_qrts;

  return (
    <>
      <PageHeader title="Tweet" />
      <div id="tweet-page">
        <div id="tweet-page-content">
          <div id="tweet-page-header">
            <div id="tweet-page-header-icon">
              <Avatar user={user} />
            </div>
            <div id="tweet-page-header-info">
              <div id="tweet-page-header-dn">
                {user.display_name}
              </div>
              <div id="tweet-page-header-un">
                @{user.username}
              </div>
            </div>
          </div>
          <div id="tweet-page-goods">
            <div className="timeline-tweet-content-html" dangerouslySetInnerHTML={{ __html: tweet.tweet_content}}/>
            {tweet.media && tweet.media.map((m, i) => { 
              return m.split('.')[2] === "mp4" ? (<video key={i} controls playsInline><source src={m} type="video/mp4" /></video>) : ""; 
            })}
          </div>
          {tweet.original_tweetid !== undefined && tweet.is_qrt && <QuoteRetweet tweetId={tweet.original_tweetid} />}
          <div id="tweet-page-timestamp">
            {`${dayjs(tweet.created_at).format("H:MMA · MMM D, YYYY")}`}
          </div>
          <div id="tweet-page-stats">
            {
              tweet.retweet_count > 0 && 
              <div className="tweet-page-stat">
                <div className="tweet-page-stat-number">
                  {tweet.retweet_count}
                </div>
                <div className="tweet-page-stat-label">
                  Retweets
                </div>
              </div>
            }
            {
              qrtCount > 0 && 
              <div className="tweet-page-stat" onClick={() => navigate("retweets/with_comments")}>
                <div className="tweet-page-stat-number">
                  {qrtCount}
                </div>
                <div className="tweet-page-stat-label">
                  Quotes
                </div>
              </div>
            }
            {
              tweet.like_count > 0 && 
              <div className="tweet-page-stat">
                <div className="tweet-page-stat-number">
                  {tweet.like_count}
                </div>
                <div className="tweet-page-stat-label">
                  Likes
                </div>
              </div>
            }
          </div>
          <div id="tweet-page-options">
            <IconMessageCircle size={30} />
            <IconRepeat size={30} />
            <IconHeart size={30} />
            <IconShare2 size={30} />
          </div>
          <div id="tweet-page-reply">
            <div id="tweet-page-reply-icon">
              <Avatar user={USERS[0]} />
            </div>
            <textarea id="tweet-page-reply-text" placeholder="Tweet your reply!" maxLength={280}></textarea>
            <div id="tweet-page-reply-button-container">
              <input type="button" id="tweet-page-reply-button" value="Tweet" disabled />
            </div>
          </div>
        </div>
        <div id="tweet-page-replies">
          {replies.map(r => <TimelineTweet key={r.tweet_id} tweet={r} />)}
        </div>
      </div>
    </>
  )
}