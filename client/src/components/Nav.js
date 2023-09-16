import React from 'react';
import Auth from '../utils/auth';
import home from '../assets/home.png';
import about from '../assets/about.png';
import contact from '../assets/contact.png';
import signup from '../assets/signup.png';
import login from '../assets/login.png';
import logoutImg from '../assets/logout.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navigation() {
  const navigate = useNavigate();
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    navigate('/');
  };

  const location = useLocation();

  const currentPath = location.pathname;

  return (
    <ul className="nav nav-tabs mt-2">
      <style>
        {`
          .nav-item.active .nav-link,
          .nav-item.active .nav-link:hover {
            color: deepskyblue !important;
            background-color: lightgrey !important;
          }
        `}
      </style>
      <li className={`nav-item ${currentPath === "/" ? "active" : ""}`}>
        <Link to="/" className="nav-link" id="homeId">
          <div>
            <img src={home} alt="Link to home page" />
          </div>
          Home
        </Link>
      </li>
      <li className={`nav-item ${currentPath === "/about" ? "active" : ""}`}>
        <Link to="/about" className="nav-link" id="aboutId">
          <div>
            <img src={about} alt="Link to about us page" />
          </div>
          About Us
        </Link>
      </li>
      {Auth.loggedIn() ? (
        <li className={`nav-item ${currentPath === "/contact" ? "active" : ""}`}>
          <Link to="/contact" className="nav-link" id="contactId">
            <div>
              <img src={contact} alt="Link to contact us page" />
            </div>
            Contact
          </Link>
        </li>
      ) : null}
      {Auth.loggedIn() ? (
        <li className={`nav-item ${currentPath === "/logout" ? "active" : ""}`}>
          <a href="#about" onClick={logout} className="nav-link" id="logoutId">
            <div>
              <img src={logoutImg} alt="Link to logout us page" />
            </div>
            Logout
          </a>
        </li>
      ) : (
        <li className={`nav-item ${currentPath === "/login" ? "active" : ""}`}>
          <Link to="/login" className="nav-link" id="loginId">
            <div>
              <img src={login} alt="Link to login page" />
            </div>
            Login
          </Link>
        </li>
      )}
      {Auth.loggedIn() ? null : (
        <li className={`nav-item ${currentPath === "/signup" ? "active" : ""}`}>
          <Link to="/signup" className="nav-link" id="signupId">
            <div>
              <img src={signup} alt="Link to sign up page" />
            </div>
            Signup
          </Link>
        </li>
      )}
    </ul>
  );
}
