import React from "react";

function Trend({ title, tweetCount }: { title: string; tweetCount: number }) {
  const formatter = Intl.NumberFormat('en', { notation: "compact" });
  return (
    <div className="current-trend">
      <div className="trend-name">{title}</div>
      <div className="trend-count">{formatter.format(tweetCount)} Tweets</div>
    </div>
  )
}

export default function RightMenu() {
  return (
    <div id="right-menu">
      <div className="right-section">
        <h3>What&apos;s happening</h3>
        <div id="trends">
          <Trend title="RINNE" tweetCount={30459} />
          <Trend title="Eden deez nuts" tweetCount={10343} />
        </div>
      </div>
    </div>
  );
}