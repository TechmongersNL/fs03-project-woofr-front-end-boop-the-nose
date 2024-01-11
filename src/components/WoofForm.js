import "./woofFrom.css";

import React, { useState } from "react";

import { PawIcon } from "./branding/PawIcon";

export default function WoofForm() {
  const [woofText, setWoofText] = useState("");
  //Added the above line

  const handleWoofChange = (event) => {
    setWoofText(event.target.value);
  };

  const handleWoofSubmit = () => {
    console.log(`Woof: ${woofText}`);
    setWoofText("");
  };

  return (
    <div>
      <input
        className="woofForm"
        type="text"
        value={woofText}
        onChange={handleWoofChange}
        placeholder="What's up dawg..."
      />
      <br></br>
      <button onClick={handleWoofSubmit} className="postButton">
        <PawIcon />
        <span className="buttonTextColour">Woof!</span>
      </button>
    </div>
  );
}

// Making a woof form with an text input field and a 'woof' button below + styling
