import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "animate.css/animate.min.css"; // Import animate.css
import CarasoleImg1 from "../img/carousel-1.jpg";
import CarasoleImg2 from "../img/carousel-2.jpg";
import "../assets/hero.css";
import Modal from "./Modal";
import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure Bootstrap Icons is imported

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    // Simulate an API call or data fetch
    setTimeout(() => {
      setLoading(false);
    }, 300); // Adjust this duration based on your actual loading time
  }, []);

  useEffect(() => {
    // Add animation classes when the component mounts
    setAnimationClass("animate__animated animate__zoomIn");

    // Trigger animation by temporarily removing and re-adding the class
    const elements = document.querySelectorAll(".animate-on-load");
    elements.forEach((el) => {
      el.classList.remove("animate__animated", "animate__zoomIn");
      void el.offsetWidth; // Trigger reflow to restart the animation
      el.classList.add("animate__animated", "animate__zoomIn");
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        document
          .querySelector(".navbar")
          .classList.add("sticky-top", "shadow-sm");
      } else {
        document
          .querySelector(".navbar")
          .classList.remove("sticky-top", "shadow-sm");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        document
          .querySelector(".dropdown")
          .addEventListener("mouseenter", handleMouseEnter);
        document
          .querySelector(".dropdown")
          .addEventListener("mouseleave", handleMouseLeave);
      } else {
        document
          .querySelector(".dropdown")
          .removeEventListener("mouseenter", handleMouseEnter);
        document
          .querySelector(".dropdown")
          .removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize listeners

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {loading && (
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div className="spinner"></div>
        </div>
      )}
      <div className="container-fluid position-relative p-0 bg-navbar">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
          <a href="index.html" className="navbar-brand p-0">
            <h1 className="m-0">
              <i className="fa fa-user-tie me-2"></i>BizBoost
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a href="index.html" className="nav-item nav-link active">
                Home
              </a>
              <a href="about.html" className="nav-item nav-link">
                About Us
              </a>
              <a href="service.html" className="nav-item nav-link">
                Campaigns
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Volunteers
                </a>
                <div className="dropdown-menu m-0">
                  <a href="blog.html" className="dropdown-item">
                    Blog Grid
                  </a>
                  <a href="detail.html" className="dropdown-item">
                    Blog Detail
                  </a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Businesses
                </a>
                <div className="dropdown-menu m-0">
                  <a href="price.html" className="dropdown-item">
                    Pricing Plan
                  </a>
                  <a href="feature.html" className="dropdown-item">
                    Our Features
                  </a>
                  <a href="team.html" className="dropdown-item">
                    Team Members
                  </a>
                  <a href="testimonial.html" className="dropdown-item">
                    Testimonials
                  </a>
                  <a href="quote.html" className="dropdown-item">
                    Free Quote
                  </a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">
                Contact
              </a>
            </div>
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

        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={CarasoleImg1} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5
                    className={`text-white text-uppercase mb-3 animate-on-load ${animationClass}`}
                  >
                    Creative & Innovative
                  </h5>
                  <h1
                    className={`display-1 text-white mb-md-4 w-100 animate-on-load ${animationClass}`}
                  >
                    Empowering new businesses with support and connections
                  </h1>
                  <a
                    href="quote.html"
                    className={`btn btn-primary py-md-3 px-md-5 me-3 animate-on-load ${animationClass}`}
                  >
                    Start Your Campaign
                  </a>
                  <a
                    href="#"
                    className={`btn btn-outline-light py-md-3 px-md-5 animate-on-load ${animationClass}`}
                  >
                    Need Volunteers?
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src={CarasoleImg2} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5
                    className={`text-white text-uppercase mb-3 animate-on-load ${animationClass}`}
                  >
                    Creative & Innovative
                  </h5>
                  <h1
                    className={`display-1 text-white mb-md-4 animate-on-load ${animationClass}`}
                  >
                    Empowering new businesses with support and connections
                  </h1>
                  <a
                    href="quote.html"
                    className={`btn btn-primary py-md-3 px-md-5 me-3 animate-on-load ${animationClass}`}
                  >
                    Start Your Campaign
                  </a>
                  <a
                    href="#"
                    className={`btn btn-outline-light py-md-3 px-md-5 animate-on-load ${animationClass}`}
                  >
                    Need Volunteers?
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <Modal id="searchModal" title="Search">
          <form>
            <div className="mb-3">
              <label htmlFor="searchQuery" className="form-label">
                Search Query
              </label>
              <input
                type="text"
                className="form-control"
                id="searchQuery"
                placeholder="Enter your query here"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="searchCategory" className="form-label">
                Category
              </label>
              <select id="searchCategory" className="form-select">
                <option value="">Select Category</option>
                <option value="1">Category 1</option>
                <option value="2">Category 2</option>
                <option value="3">Category 3</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default Hero;
