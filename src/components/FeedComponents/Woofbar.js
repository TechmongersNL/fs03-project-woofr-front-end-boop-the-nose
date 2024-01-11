import React from "react";
import TitleBar from "./TitleBar";

export default function Woofbar() {
  return (
    <>
      <TitleBar />
      <div className="InputField">
        <input type="text" placeholder="What's up, Dawg?"></input>
        <button className="WoofButton">🐾Woof!</button>
      </div>
    </>
  );
}
