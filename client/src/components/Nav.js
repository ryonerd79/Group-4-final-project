import React from 'react';
import Auth from '../utils/auth';
import home from '../assets/home.png';
import about from '../assets/about.png';
import contact from '../assets/contact.png';
import signup from '../assets/signup.png';
import login from '../assets/login.png';
import logoutImg from '../assets/logout.png';

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
          <div>
            <img src={home} alt="Link to home page"/>
          </div>
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
          <div>
            <img src={about} alt="Link to about us page"/>
          </div>
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
            <div>
              <img src={contact} alt="Link to contact us page"/>
            </div>
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
            <div>
              <img src={signup} alt="Link to sign up page"/>
            </div>
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
            <div>
              <img src={logoutImg} alt="Link to logout us page"/>
            </div>
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
            <div>
              <img src={login} alt="Link to login page"/>
            </div>
            Login
          </a>
        </li>
      )}
    </ul>
  );
}
