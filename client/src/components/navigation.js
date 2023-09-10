import React from 'react';

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "active" : ""}
          id="aboutId"
        >
          About me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "active" : ""}
          id="contactId"
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#signup"
          onClick={() => handlePageChange("Signup")}
          className={currentPage === "Signup" ? "active" : ""}
          id="signupId"
        >
          Signup
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#login"
          onClick={() => handlePageChange("Login")}
          className={currentPage === "Login" ? "active" : ""}
          id="loginId"
        >
          Login
        </a>
      </li>
    </ul>
  );
}
