// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
            <Link to="/" className="nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/campaign" className="nav-link">
              Campaigns
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
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
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Businesses
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
              <li>
                <Link to="/price" className="dropdown-item">
                  Pricing Plan
                </Link>
              </li>
              <li>
                <Link to="/features" className="dropdown-item">
                  Our Features
                </Link>
              </li>
              <li>
                <Link to="/team" className="dropdown-item">
                  Team Members
                </Link>
              </li>
              <li>
                <Link to="/testimonial" className="dropdown-item">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/quote" className="dropdown-item">
                  Free Quote
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
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
