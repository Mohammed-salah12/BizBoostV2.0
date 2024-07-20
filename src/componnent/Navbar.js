// Navbar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Function to determine if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
      <Link to="/" className="navbar-brand p-0">
        <h1 className="m-0">
          <i className="fa fa-user-tie me-2"></i>BizBoost
        </h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ms-auto py-0">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link ${isActive("/about") ? "active" : ""}`}
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/campaign"
              className={`nav-link ${isActive("/campaign") ? "active" : ""}`}
            >
              Campaigns
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link " href="#" id="navbarDropdown" role="button">
              Volunteers
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link to="/blog" className="dropdown-item">
                  Blog Grid
                </Link>
              </li>
              <li>
                <Link to="/detail" className="dropdown-item">
                  Blog Detail
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link "
              href="#"
              id="navbarDropdown2"
              role="button"
            >
              Businesses
            </a>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-link ${isActive("/contact") ? "active" : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="btn text-primary ms-3"
          data-bs-toggle="modal"
          data-bs-target="#searchModal"
        >
          <i className="fa fa-search"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
