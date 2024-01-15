import React from "react";
import Postfeed from "../components/FeedComponents/Postfeed";
import WoofForm from "../components/FeedComponents/WoofForm";
import TitleBar from "../components/FeedComponents/TitleBar";

export default function FeedPage() {
  return (
    <div>
      <TitleBar />
      {/* Added a placeholder for titlebar */}
      <WoofForm />
      <Postfeed />
    </div>
  );
}
