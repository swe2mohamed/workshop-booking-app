import React from "react";

const CancelBooking = () => {
  return (
    <div>
      <div className="container mt-3">
        <h3>Cancel Booking</h3>
        <p>Try to submit the form.</p>

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
            <div className="invalid-feedback">Please fill out this field.</div>
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
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <button type="submit" className="btn btn-primary">
            Cancel Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default CancelBooking;
