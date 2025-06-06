import React from "react";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container-fluid py-2">
        <button 
          type="button" 
          className="navbar-brand btn btn-link" 
          style={{ padding: 0, border: 'none', background: 'none', textAlign: 'left' }}
          onClick={() => navigate('/')}
        >
          <img
            src="/media/logo.svg"
            style={{ width: "131.25px" }}
            alt="Zerodha logo"
          />
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                type="button"
                className="nav-link text-muted btn btn-link"
                style={{ fontSize: "0.9rem", marginRight: "15px", textDecoration: "none" }}
                onClick={() => navigate('/signup')}
              >
                Signup
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="nav-link text-muted btn btn-link"
                style={{ fontSize: "0.9rem", marginRight: "15px", textDecoration: "none" }}
                onClick={() => navigate('/about')}
              >
                About
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="nav-link text-muted btn btn-link"
                style={{ fontSize: "0.9rem", marginRight: "15px", textDecoration: "none" }}
                onClick={() => navigate('/product')}
              >
                Products
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="nav-link text-muted btn btn-link"
                style={{ fontSize: "0.9rem", marginRight: "15px", textDecoration: "none" }}
                onClick={() => navigate('/pricing')}
              >
                Pricing
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="nav-link text-muted btn btn-link"
                style={{ fontSize: "0.9rem", marginRight: "25px", textDecoration: "none" }}
                onClick={() => navigate('/support')}
              >
                Support
              </button>
            </li>
          </ul>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
