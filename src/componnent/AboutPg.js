import React, { useEffect } from "react";
import About from "./About";
import team1 from "../img/team-1.jpg";
import team2 from "../img/team-2.jpg";
import team3 from "../img/team-3.jpg";
import VendorSlider from "./VendorSlider";
import AboutVid from "../videos/about.mp4";
import "animate.css/animate.min.css";

export const AboutPg = () => {
  const teamMembers = [
    {
      id: 1,
      imgSrc: team1,
      name: "Full Name",
      designation: "Designation",
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    {
      id: 2,
      imgSrc: team2,
      name: "Full Name",
      designation: "Designation",
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    {
      id: 3,
      imgSrc: team3,
      name: "Full Name",
      designation: "Designation",
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  ];

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
      <div
        className="container-fluid bg-primary py-5 bg-header position-relative"
        style={{ marginBottom: "90px" }}
      >
        <video
          autoPlay
          muted
          loop
          className="position-absolute w-100 h-100"
          style={{ top: 0, left: 0, objectFit: "cover", zIndex: 1 }}
        >
          <source src={AboutVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="row py-5 position-relative" style={{ zIndex: 2 }}>
          <div className="col-12 pt-lg-5 mt-lg-5 text-center text-dark">
            <h1 className="display-4 animated zoomIn text-dark">About Us</h1>
            <a href="#" className="h5 text-dark">
              Home
            </a>
            <i className="far fa-circle text-dark px-2"></i>
            <a href="#" className="h5 text-dark">
              About
            </a>
          </div>
        </div>
      </div>
      <div className="about-section">
        <About />
      </div>
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="fw-bold text-primary text-uppercase">
              Team Members
            </h5>
            <h1 className="mb-0">
              Professional Stuffs Ready to Help Your Business
            </h1>
          </div>
          <div className="row g-5">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="col-lg-4 wow slideInUp"
                data-wow-delay={`${0.3 + 0.3 * index}s`}
              >
                <div className="team-item bg-light rounded overflow-hidden">
                  <div className="team-img position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src={member.imgSrc}
                      alt={`Team Member ${member.id}`}
                    />
                    <div className="team-social">
                      <a
                        className="btn btn-lg btn-primary btn-lg-square rounded"
                        href={member.twitter}
                      >
                        <i className="fab fa-twitter fw-normal"></i>
                      </a>
                      <a
                        className="btn btn-lg btn-primary btn-lg-square rounded"
                        href={member.facebook}
                      >
                        <i className="fab fa-facebook-f fw-normal"></i>
                      </a>
                      <a
                        className="btn btn-lg btn-primary btn-lg-square rounded"
                        href={member.instagram}
                      >
                        <i className="fab fa-instagram fw-normal"></i>
                      </a>
                      <a
                        className="btn btn-lg btn-primary btn-lg-square rounded"
                        href={member.linkedin}
                      >
                        <i className="fab fa-linkedin-in fw-normal"></i>
                      </a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h4 className="text-primary">{member.name}</h4>
                    <p className="text-uppercase m-0">{member.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <VendorSlider />
    </div>
  );
};
