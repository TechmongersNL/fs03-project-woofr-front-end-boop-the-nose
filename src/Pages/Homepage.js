import { PawIcon } from "../components/branding/PawIcon";
import React from "react";
import WoofForm from "../components/WoofForm";

export default function HomePage() {
  return (
    <div>
      <WoofForm />

      <div style={{ backgroundColor: "#000" }}>
        <PawIcon color="white" width={300} />
        <PawIcon color="primary" width={500} />
      </div>
    </div>
  );
}
