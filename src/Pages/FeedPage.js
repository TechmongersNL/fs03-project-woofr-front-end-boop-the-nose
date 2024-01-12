import React from "react";
import Postfeed from "../components/FeedComponents/Postfeed";
import Woofbar from "../components/FeedComponents/Woofbar";

export default function FeedPage() {
  return (
    <div>
      {/* Added a placeholder for titlebar and woofForm in Woofbar */}
      <Woofbar />
      <Postfeed />
    </div>
  );
}
