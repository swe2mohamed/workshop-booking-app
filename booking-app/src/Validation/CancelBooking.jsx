import React from "react";
import Navbar from "../Home/Navbar";

const CancelBooking = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="container mt-3">
          <div className="container p-5 my-5 bg-danger text-white text-center rounded">
            <h1>Cancel Booking</h1>
          </div>

          <form action="/action_page.php" className="was-validated">
            <div className="mb-3 mt-3">
              <label htmlFor="uname" className="form-label">
                Booking ID:
              </label>
              <input
                type="text"
                className="form-control"
                id="uname"
                placeholder="Enter Booking ID"
                name="uname"
                required
              />
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="pwd" className="form-label">
                Email:
              </label>
              <input
                type="text"
                className="form-control"
                id="pwd"
                placeholder="Enter Email"
                name="pswd"
                required
              />
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
            <button type="submit" className="btn btn-danger">
              Cancel Booking
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CancelBooking;
