import React from "react";
import './Navbar.css'; // Import the custom CSS

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/booking">
                  Booking List
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cancel-booking">
                  Cancel Booking
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
