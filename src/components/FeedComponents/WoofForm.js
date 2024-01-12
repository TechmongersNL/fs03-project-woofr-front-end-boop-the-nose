import React, { useState } from "react";

import { PawIcon } from "../branding/PawIcon";

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
    <div className="InputField">
      <input
        type="text"
        value={woofText}
        onChange={handleWoofChange}
        placeholder="What's up, Dawg?"
      />
      <br></br>
      <button className="WoofButton" onClick={handleWoofSubmit}>
        <PawIcon width={20} />
        Woof!
      </button>
    </div>
  );
}

// Making a woof form with an text input field and a 'woof' button below + styling
