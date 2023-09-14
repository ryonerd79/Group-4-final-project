import React from 'react';
import Auth from '../utils/auth';
import home from '../assets/home.png';
import about from '../assets/about.png';
import contact from '../assets/contact.png';
import signup from '../assets/signup.png';
import login from '../assets/login.png';
import logoutImg from '../assets/logout.png';
import { Link } from 'react-router-dom';

export default function Navigation({ currentPage }) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  
  return (
    <ul className="nav nav-tabs mt-2">
      <li className={`nav-item ${currentPage === "Home" ? "active" : ""}`}>
        <Link
          to="/"
          className="nav-link"
          id="homeId"
        >
          <div>
            <img src={home} alt="Link to home page"/>
          </div>
          Home
        </Link>
      </li>
      <li className={`nav-item ${currentPage === "About" ? "active" : ""}`}>
        <Link
          to="/about"
          className="nav-link"
          id="aboutId"
        > 
          <div>
            <img src={about} alt="Link to about us page"/>
          </div>
          About Us
        </Link>
      </li>
      {Auth.loggedIn() ? (
        <li className={`nav-item ${currentPage === "Contact" ? "active" : ""}`}>
          <Link
            to="/contact"
            className="nav-link"
            id="contactId"
          >
            <div>
              <img src={contact} alt="Link to contact us page"/>
            </div>
            Contact
          </Link>
        </li>
      ) : null} {/* You can remove the Contact link if the user is not logged in */}
      {Auth.loggedIn() ? (
        <li className={`nav-item ${currentPage === "Logout" ? "active" : ""}`}>
          <a
            href="#about"
            onClick={logout}
            className="nav-link"
            id="logoutId"
          >
            <div>
              <img src={logoutImg} alt="Link to logout us page"/>
            </div>
            Logout
          </a>
        </li>
      ) : (
        <li className={`nav-item ${currentPage === "Login" ? "active" : ""}`}>
          <Link
            to="/login"
            className="nav-link"
            id="loginId"
          >
            <div>
              <img src={login} alt="Link to login page"/>
            </div>
            Login
          </Link>
        </li>
      )}
      {Auth.loggedIn() ? null : (
        <li className={`nav-item ${currentPage === "Signup" ? "active" : ""}`}>
          <Link
            to="/signup"
            className="nav-link"
            id="signupId"
          >
            <div>
              <img src={signup} alt="Link to sign up page"/>
            </div>
            Signup
          </Link>
        </li>
      )}
    </ul>

  );
  
}