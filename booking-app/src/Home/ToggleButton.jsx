import React from "react";
import { useNavigate } from "react-router-dom";
import "./ToggleButton.css";

const ToggleButton = () => {
  const navigate = useNavigate();

  const handleGetBookingClick = () => {
    navigate("/booking-list"); // Navigate to the booking list page
  };

  return (
    <div className="d-flex justify-content-center align-items-center toggle-button-container">
      <button onClick={handleGetBookingClick} className="btn btn-primary custom-btn-size me-2">
        Get Booking
      </button>
      <a href="/cancel-booking" className="btn btn-danger custom-btn-size">
        Cancel Booking
      </a>
    </div>
  );
};

export default ToggleButton;
