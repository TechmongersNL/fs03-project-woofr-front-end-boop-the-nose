import React from "react";
import { PawIcon } from "../branding/PawIcon.jsx";

export default function TitleBar() {
  return (
    <>
      {/* Placeholder for actual feature */}
      <div className="TitleBar">
        <h1>
          <PawIcon />
          Woofr
        </h1>
        <p className="LogOut">Logout 🐕</p>
        {/* <img src="./src/components/branding/logDog.png"></img> */}
      </div>
    </>
  );
}
