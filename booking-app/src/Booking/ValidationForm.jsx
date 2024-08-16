import React from "react";

const ValidationForm = () => {
  return (
    <div className="container mt-3">
      <h3>Booking</h3>
      <form action="/action_page.php" className="was-validated">
        <div className="mb-3 mt-3">
          <label htmlFor="uname" className="form-label">
            Email:
          </label>
          <input
            type="text"
            className="form-control"
            id="uname"
            placeholder="Enter username"
            name="uname"
            required
          />
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        <button type="submit" className="btn btn-primary">
          Book
        </button>
      </form>
    </div>
  );
};

export default ValidationForm;
