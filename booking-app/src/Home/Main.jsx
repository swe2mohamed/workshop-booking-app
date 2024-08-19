import React from "react";
import "./Main.css";
import ToggleButton from "./ToggleButton";
import { useLottie } from "lottie-react";
import travelAnimation from "./Animation-booking.json";

const Main = () => {
  const options = {
    animationData: travelAnimation,
    loop: true, // Set to true if you want the animation to loop
    autoplay: true, // Set to true if you want the animation to start automatically
  };

  const { View } = useLottie(options);

  return (
    <div className="main-content">
      <div className="animation-container">
        {View}
      </div>
      <div className="toggle-button-container ">
        <ToggleButton />
      </div>
    </div>
  );
};

export default Main;
