import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; // Optional: use your clinic logo here

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          {/* Use your logo or clinic name */}
          <img
            src={logo}
            alt="Prasanna Clinic"
            width="40"
            height="40"
            className="d-inline-block align-text-top me-2"
          />
          Prasanna Clinic
        </NavLink>

        {/* Hamburger toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink exact="true" to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/doctors" className="nav-link">
                Doctors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/patients" className="nav-link">
                Patients
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/appointments" className="nav-link">
                Appointments
              </NavLink>
            </li>
            {/* No Contact link anymore, as per your request */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
