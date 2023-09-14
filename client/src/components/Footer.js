import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto p-4 border border-top border-dark border-1">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="handshake"
            aria-hidden="false"
          >
            🤝
          </span>{' '}
          <span
            className="emoji"
            role="img"
            aria-label="rocket"
            aria-hidden="false"
          >
            🚀
          </span>{' '}
          <span
            className="emoji"
            role="img"
            aria-label="computer"
            aria-hidden="false"
          >
            💻
          </span>{' '}
          by the TeachTogether team.
        </h4>
      </div>
    </footer>

  );
};

export default Footer;