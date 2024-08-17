import React from "react";
import "./Main.css";
import WaveBackground from "./WaveBackground";
import ToggleButton from "./ToggleButton";
import CustomSVG from "./CustomSVG";

const Main = () => {
  return (
    <div className="main-content">
      <CustomSVG />
      <WaveBackground />
      <div className="toggle-button-container ">
        <ToggleButton />
      </div>
    </div>
  );
};

export default Main;
