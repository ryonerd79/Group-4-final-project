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
          <div className='nav-img-alignment'>
            <img src={home} alt="" className="home-image" />
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
          <div className='nav-img-alignment'>
            <img src={about} alt="" className="about-image" />
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
            <div className='nav-img-alignment'>
              <img src={contact} alt="" className="contact-image" />
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
            <div className='nav-img-alignment'>
              <img src={signup} alt="" className="signup-image" />
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
            <div className='nav-img-alignment'>
              <img src={logoutImg} alt="" className="logout-image" />
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
            <div className='nav-img-alignment'>
              <img src={login} alt="" className="login-image" />
            </div>
            Login
          </a>
        </li>
      )}
    </ul>
  );
}
