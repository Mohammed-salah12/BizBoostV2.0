import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import Hero from "./componnent/Hero"; // Updated path
import Facts from "./componnent/Facts";
import About from "./componnent/About";
import Features from "./componnent/Features";
import Campaign from "./componnent/Campaign";
import Testimonial from "./componnent/Testimonials";
import VendorSlider from "./componnent/VendorSlider";
import Footer from "./componnent/Footer";
import Contact from "./componnent/Contact"; // Updated path
import Navbar from "./componnent/Navbar"; // Updated path
import CampaignPg from "./componnent/CampaignPg"; // Import the CampaignPg component
import { AboutPg } from "./componnent/AboutPg";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Add Navbar here */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Facts />
                <About />
                <Features />
                <Campaign />
                <Testimonial />
                <VendorSlider />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/campaign-pg" element={<CampaignPg />} />{" "}
          <Route path="/About-pg" element={<AboutPg />} />{" "}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
