import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css"; // If you have custom CSS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Hero from "./componnent/Hero";
import Facts from "./componnent/Facts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import "animate.css/animate.min.css";
import About from "./componnent/About";
import Features from "./componnent/Features";
import Campaign from "./componnent/Campaign";
import Testimonial from "./componnent/Testimonials";
import VendorSlider from "./componnent/VendorSlider";
import Footer from "./componnent/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Facts />
      <About />
      <Features />
      <Campaign />
      <Testimonial />
      <VendorSlider />
      <Footer />
    </div>
  );
}

export default App;
