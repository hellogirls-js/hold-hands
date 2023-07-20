import React from "react";
import { useParams } from "react-router-dom";
import { TWEETS } from "../data/tweets";
import PageHeader from "../components/PageHeader";
import TimelineTweet from "../components/TimelineTweet";

export default function QuoteRetweetsPage() {
  const { tweet_id } = useParams();
  const qrtList = TWEETS.filter(t => tweet_id && t.original_tweetid === parseInt(tweet_id) && t.is_qrt);

  return (
    <>
      <PageHeader title="Quote Tweets" />
      <div id="qrt-page" style={{paddingBottom: "12vh"}}>
        {qrtList.map(q => <TimelineTweet tweet={q} key={q.tweet_id} />)}
      </div>
    </>
  )
}