import React from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "./Modal";
import "../assets/hero.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  const location = useLocation();

  // Function to determine if the link is active
  const isActive = (path) => location.pathname === path;

  // Check if the current path is '/userProfile' or '/campaignDetails'
  const isUserProfile = isActive("/userProfile");
  const isCampaignDetails = isActive("/campaignDetails");
  const isSignIn = isActive("/signin");

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0 ${
          isUserProfile ? "user-profile-navbar" : ""
        } ${isSignIn ? "signin-navbar" : ""}`}
      >
        <Link
          to="/"
          className={`navbar-brand p-0 ${
            isCampaignDetails ? "campaign-details-logo" : ""
          }`}
        >
          <h1 className={` ${isSignIn ? "ddd" : ""}`}>
            <i className={`fa fa-user-tie me-2`}></i>
            BizBoost
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
                className={`nav-link ${isActive("/") ? "active" : ""} ${
                  isCampaignDetails ? "black-link" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about-pg"
                className={`nav-link ${isActive("/about-pg") ? "active" : ""} ${
                  isCampaignDetails ? "black-link" : ""
                }`}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/campaign-pg"
                className={`nav-link ${
                  isActive("/campaign-pg") ? "active" : ""
                } ${isCampaignDetails ? "black-link" : ""}`}
              >
                Campaigns
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className={`nav-link ${isCampaignDetails ? "black-link" : ""}`}
                href="#"
                id="navbarDropdown"
                role="button"
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
                className={`nav-link ${isCampaignDetails ? "black-link" : ""}`}
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
                className={`nav-link ${isActive("/contact") ? "active" : ""} ${
                  isCampaignDetails ? "black-link" : ""
                }`}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item"></li>
            <li className="nav-item">
              <Link
                to="/signin"
                className={`nav-link ${isActive("/signin") ? "active" : ""} ${
                  isCampaignDetails ? "black-link" : ""
                }`}
              >
                Sign In
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

      {/* Ensure Modal is at a higher level to be correctly displayed */}
      <Modal id="searchModal" title="Search">
        <div className="modal-body d-flex align-items-center justify-content-center">
          <div className="input-group" style={{ maxWidth: "600px" }}>
            <input
              type="text"
              className="form-control bg-transparent border-primary p-3"
              placeholder="Type search keyword"
            />
            <button className="btn btn-primary px-4">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
