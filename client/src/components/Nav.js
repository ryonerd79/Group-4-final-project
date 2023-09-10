import React from 'react';
import Auth from '../utils/auth';

export default function Navigation({ currentPage, handlePageChange }) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <ul className="nav nav-tabs">
       <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "active" : ""}
          id="homeId"
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "active" : ""}
          id="aboutId"
        >
          About Us
        </a>
      </li>

      {Auth.loggedIn() ? (
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
      ) : (
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
      )}

{Auth.loggedIn() ? (
        <li className="nav-item">
          <a
            href="#about"
            onClick={logout}
            className={currentPage === "Login" ? "active" : ""}
            id="aboutId"
          >
            Logout
          </a>
        </li>
      ) : (
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
      )}
    </ul>
  );
}
