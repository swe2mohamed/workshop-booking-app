import React from "react";
import './ToggleButton.css'; // Assuming you have a separate CSS file for custom styles

const ToggleButton = () => {
  return (
    <div className="d-flex justify-content-center align-items-center toggle-button-container">
      <a href="#" className="btn btn-primary custom-btn-size me-2">
        Booking
      </a>
      <a href="#" className="btn btn-danger custom-btn-size">
        Cancel Booking
      </a>
    </div>
  );
};

export default ToggleButton;
