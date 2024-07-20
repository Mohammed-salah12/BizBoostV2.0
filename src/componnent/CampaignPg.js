import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "animate.css"; // Import animate.css for animations
import VendorSlider from "./VendorSlider"; // Import the VendorSlider component
import Footer from "./Footer"; // Import the Footer component
import Navbar from "./Navbar"; // Import the Navbar component
import CampaignPic from "../img/blog-1.jpg"; // Import the Campaign image
import funds from "../videos/funds.mp4"; // Import the video
import "animate.css/animate.min.css";

const CampaignPg = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading by using setTimeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); // Adjust time as needed

    // Clean up timeout on component unmount
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 45) {
        navbar.classList.add("sticky-top", "shadow-sm");
      } else {
        navbar.classList.remove("sticky-top", "shadow-sm");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      {/* Spinner Start */}
      {loading && (
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div className="spinner"></div>
        </div>
      )}
      {/* Spinner End */}

      {/* Header Start */}
      <div
        className="position-relative"
        style={{ height: "500px" }} // Adjust the height as needed
      >
        <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src={funds} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="container-fluid py-5 text-center"
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center text-white">
              <h1 className="display-4 animated zoomIn">Campaigns</h1>
              <a href="#" className="h5 text-white">
                Home
              </a>
              <i className="far fa-circle text-white px-2"></i>
              <a href="#" className="h5 text-white">
                Campaigns
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}

      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row g-5">
            {/* Blog List Start */}
            <div className="col-lg-8">
              <div className="row g-5">
                {[...Array(8).keys()].map((_, index) => (
                  <div
                    className="col-md-6 wow slideInUp"
                    data-wow-delay={`${index % 2 === 0 ? "0.1s" : "0.6s"}`}
                    key={index}
                  >
                    <div className="blog-item bg-light rounded overflow-hidden">
                      <div className="blog-img position-relative overflow-hidden">
                        <img className="img-fluid" src={CampaignPic} alt="" />
                        <a
                          className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                          href=""
                        >
                          Web Design
                        </a>
                      </div>
                      <div className="p-4">
                        <div className="d-flex mb-3">
                          <small className="me-3">
                            <i className="far fa-user text-primary me-2"></i>
                            John Doe
                          </small>
                          <small>
                            <i className="far fa-calendar-alt text-primary me-2"></i>
                            01 Jan, 2045
                          </small>
                        </div>
                        <h4 className="mb-3">How to build a website</h4>
                        <p>
                          Dolor et eos labore stet justo sed est sed sed sed
                          dolor stet amet
                        </p>
                        <a className="text-uppercase" href="">
                          Read More <i className="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Pagination Start */}
                <div className="col-12 wow slideInUp" data-wow-delay="0.1s">
                  <nav aria-label="Page navigation">
                    <ul className="pagination pagination-lg m-0">
                      <li className="page-item disabled">
                        <a
                          className="page-link rounded-0"
                          href="#"
                          aria-label="Previous"
                        >
                          <span aria-hidden="true">
                            <i className="bi bi-arrow-left"></i>
                          </span>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">
                            <i className="bi bi-arrow-right"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* Pagination End */}
              </div>
            </div>
            {/* Blog List End */}

            {/* Sidebar Start */}
            <div className="col-lg-4">
              {/* Search Form Start */}
              <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control p-3"
                    placeholder="Keyword"
                  />
                  <button className="btn btn-primary px-4">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>
              {/* Search Form End */}

              {/* Category Start */}
              <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 className="mb-0">Categories</h3>
                </div>
                <div className="link-animated d-flex flex-column justify-content-start">
                  <a
                    className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2"
                    href="#"
                  >
                    <i className="bi bi-arrow-right me-2"></i>Web Design
                  </a>
                  <a
                    className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2"
                    href="#"
                  >
                    <i className="bi bi-arrow-right me-2"></i>Web Development
                  </a>
                  <a
                    className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2"
                    href="#"
                  >
                    <i className="bi bi-arrow-right me-2"></i>Keyword Research
                  </a>
                  <a
                    className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2"
                    href="#"
                  >
                    <i className="bi bi-arrow-right me-2"></i>Email Marketing
                  </a>
                </div>
              </div>
              {/* Category End */}

              {/* Recent Post Start */}
              <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 className="mb-0">Recent Post</h3>
                </div>
                <div className="d-flex rounded overflow-hidden mb-3">
                  <img
                    className="img-fluid"
                    src={CampaignPic}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                    alt=""
                  />
                  <a
                    href=""
                    className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0"
                  >
                    Lorem ipsum dolor sit amet adipis elit
                  </a>
                </div>
                <div className="d-flex rounded overflow-hidden mb-3">
                  <img
                    className="img-fluid"
                    src={CampaignPic}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                    alt=""
                  />
                  <a
                    href=""
                    className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0"
                  >
                    Lorem ipsum dolor sit amet adipis elit
                  </a>
                </div>
                <div className="d-flex rounded overflow-hidden mb-3">
                  <img
                    className="img-fluid"
                    src={CampaignPic}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                    alt=""
                  />
                  <a
                    href=""
                    className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0"
                  >
                    Lorem ipsum dolor sit amet adipis elit
                  </a>
                </div>
              </div>
              {/* Recent Post End */}

              {/* Tag Cloud Start */}
              <div className="wow slideInUp" data-wow-delay="0.1s">
                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 className="mb-0">Tag Cloud</h3>
                </div>
                <div className="d-flex flex-wrap m-n1">
                  <a href="#" className="btn btn-light m-1">
                    Design
                  </a>
                  <a href="#" className="btn btn-light m-1">
                    Development
                  </a>
                  <a href="#" className="btn btn-light m-1">
                    Marketing
                  </a>
                  <a href="#" className="btn btn-light m-1">
                    SEO
                  </a>
                  <a href="#" className="btn btn-light m-1">
                    Branding
                  </a>
                  <a href="#" className="btn btn-light m-1">
                    Research
                  </a>
                </div>
              </div>
              {/* Tag Cloud End */}
            </div>
            {/* Sidebar End */}
          </div>
        </div>
      </div>
      <VendorSlider />
    </div>
  );
};

export default CampaignPg;
