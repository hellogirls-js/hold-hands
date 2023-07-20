import React from "react";
import Avatar from "../components/Avatar";
import { USERS } from "../data/users";
import { IconCalendarTime, IconCheckbox, IconGif, IconMapPin, IconMoodSmile, IconPhoto } from "@tabler/icons-react";
import "./styles/index.css";
import Timeline from "../components/Timeline";
import { TWEETS } from "../data/tweets";
import TimelineTweet from "../components/TimelineTweet";
import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import PageHeader from "../components/PageHeader";

dayjs.extend(isSameOrBefore);

function PostEditor({ user }: { user: User }) {
  return (
    <div id="post-editor">
      <div id="post-editor-icon">
        <Avatar user={user} />
      </div>
      <div id="post-editor-area">
        <textarea id="post-editor-textarea" maxLength={280} placeholder="What is happening?"></textarea>
        <div id="post-editor-settings">
          <div id="post-editor-icons">
            <IconPhoto />
            <IconGif />
            <IconCheckbox />
            <IconMoodSmile />
            <IconCalendarTime />
            <IconMapPin />
          </div>
          <input type="button" id="post-editor-button" value="Tweet" disabled />
        </div>
      </div>
    </div>
  );
}

function mapTimelineTweets() {
  const noReplies: Tweet[] = TWEETS.sort((a, b) => { return dayjs(a.created_at).isSameOrBefore(dayjs(b.created_at)) ? 1 : -1 }).filter(tweet => !tweet.is_reply);
  return noReplies.map((tweet) => <TimelineTweet key={tweet.tweet_id} tweet={tweet} />)
}

export default function Index() {
  return (
    <>
      <PageHeader title="Home" />
      <PostEditor user={USERS[0]} />
      <Timeline>
        {mapTimelineTweets()}
      </Timeline>
    </>
  );
}