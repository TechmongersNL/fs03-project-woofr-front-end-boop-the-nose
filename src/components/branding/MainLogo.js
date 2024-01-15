import React from "react";
import { PawIcon } from "./PawIcon";
import { useNavigate } from "react-router-dom";

export default function MainLogo() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    console.log("Logo Clicked - navigating to login");
    navigate("/login");
  };
  return (
    <div className="MainLogo">
      <PawIcon
        className="LandingLogo"
        color="primary"
        width={335}
        onClick={handleLogoClick}
      />
    </div>
  );
}
