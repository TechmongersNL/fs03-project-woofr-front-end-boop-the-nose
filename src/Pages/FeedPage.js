import React from "react";
import Postfeed from "../components/FeedComponents/Postfeed";
import Woofbar from "../components/FeedComponents/Woofbar";

export default function FeedPage() {
  return (
    <div>
      <Woofbar />
      <Postfeed />
    </div>
  );
}
