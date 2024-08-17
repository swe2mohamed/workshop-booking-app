import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CancelBooking from "./Validation/CancelBooking";
import Booking from "./Validation/Booking";
import App from "./App";

const RouterDemo = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/home" element={<App />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/cancel-booking" element={<CancelBooking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

// 404 Not Found Component
const NotFound = () => (
  <div style={{ textAlign: "center", padding: "50px" }}>
    <h1>404 Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
);

export default RouterDemo;
