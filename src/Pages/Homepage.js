import MainLogo from "../components/branding/MainLogo";
import React from "react";

export default function HomePage() {
  return (
    <div className="Landing">
      <p className="LandingTitle">Woofr</p>
      <MainLogo />
      {/* want to implement navigation on Logo click */}
      <p className="SubTitle">Unleash Your Inner Dog</p>
    </div>
  );
}
