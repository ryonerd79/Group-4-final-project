import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import home from '../assets/home.png';
import about from '../assets/about.png';
import contact from '../assets/contact.png';
import signup from '../assets/signup.png';
import login from '../assets/login.png';
import logoutImg from '../assets/logout.png';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="text-dark mb-4 py-3">
      <div className="container d-flex flex-row justify-content-between align-items-center">
        <div>
          <Link className="text-dark text-decoration-none" to="/">
            <h1>TeachTogether</h1>
          </Link>
          <p className="mb-0 fst-italic">Growing Young Minds, Hand in Hand!</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/">
            <div>
              <img src={home} alt="Link to home page" />
            </div>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about">
            <div>
              <img src={about} alt="Link to about us page" />
            </div>
            About Us
          </Link>
        </li>
        {Auth.loggedIn() ? (
          <li className="nav-item">
            <Link to="/contact">
              <div>
                <img src={contact} alt="Link to contact us page" />
              </div>
              Contact
            </Link>
          </li>
        ) : (
          <li className="nav-item">
            <Link to="/signup">
              <div>
                <img src={signup} alt="Link to sign up page" />
              </div>
              Signup
            </Link>
          </li>
        )}
        {Auth.loggedIn() ? (
          <li className="nav-item">
            <a
              href="#about"
              onClick={logout}
            >
              <div>
                <img src={logoutImg} alt="Link to logout us page" />
              </div>
              Logout
            </a>
          </li>
        ) : (
          <li className="nav-item">
            <Link to="/login">
              <div>
                <img src={login} alt="Link to login page" />
              </div>
              Login
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
