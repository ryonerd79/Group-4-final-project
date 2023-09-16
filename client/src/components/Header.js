import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import Navigation from './Nav';

const Header = ( ) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  
  return (
    <header className="header-background text-dark mb-4 py-3 border border-bottom border-1 border-dark">
      <div className="container d-flex flex-row justify-content-between align-items-center">
        <div>
          <Link className="text-dark text-decoration-none" to="/">
            <h1 className='fw-bold'>TeachTogether</h1>
          </Link>
          <p className="mb-0 fst-italic">Growing Young Minds, Hand in Hand!</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Navigation
              />
              <Link className="btn btn-sm btn-log btn-outline-dark text-decoration-none ms-4 mt-4" to="/me">
                {Auth.getProfile().data.username}'s Profile
              </Link>
            </>
          ) : (
            <Navigation
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;