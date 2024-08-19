import axios from "axios";
import React, { useState } from "react";
import Navbar from "./Navbar";
import "./AxiosDemo.css"; 

const AxiosDemo = () => {
  const [bookings, setBookings] = useState([]);
  const baseUrl = "http://localhost:8080";

  const bookBookingClickHandler = async (id, email) => {
    await axios
      .post(baseUrl + "/api/v1/booking/book", { id, email })
      .then((response) => {
        console.log("Response: ", response);
      })
      .catch((error) => console.log("Error: ", error));
    console.log("End");
  };

  const getBookingsClickHandler = async () => {
    console.log("Start");
    await axios
      .get(baseUrl + "/api/v1/booking/from/2024-08-18/to/2024-08-22")
      .then((response) => {
        console.log("Response: ", response);
        if (response.status === 200) {
          console.log("Data: ", response.data);
          setBookings(response.data);
        }
      })
      .catch((error) => console.log("Error: ", error));
    console.log("End");
  };

  return (
    <>
      <Navbar />
      <div className="center-content">
        <button
          className="btn btn-info"
          type="button"
          onClick={getBookingsClickHandler}
        >
          Get Booking
        </button>
      </div>
      <div className="container mt-5">
        <div className="row">
          {bookings && bookings.length !== 0 && (
            <h2 className="mb-4"> Booking List</h2>
          )}
          <div className="row">
            {bookings.map((booking) => (
              <div key={booking.id} className="card mb-4 col-md-3">
                <div className="card-body">
                  <h5 className="card-title">{booking.dateTime}</h5>
                </div>
                <div className="d-grid card-footer">
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      bookBookingClickHandler(booking.id, "test@test.com")
                    }
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AxiosDemo;
