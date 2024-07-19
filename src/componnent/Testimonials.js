import React from "react";
import Slider from "react-slick";

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    text: "This is an amazing platform that really helped our business!",
    name: "John Doe",
    position: "CEO, Company A",
    image: "path_to_image1.jpg", // Replace with actual image path
  },
  {
    id: 2,
    text: "Fantastic experience and great support from the team.",
    name: "Jane Smith",
    position: "Founder, Startup B",
    image: "path_to_image2.jpg", // Replace with actual image path
  },
  {
    id: 3,
    text: "Highly recommended for anyone looking to grow their business.",
    name: "Michael Johnson",
    position: "Manager, Business C",
    image: "path_to_image3.jpg", // Replace with actual image path
  },
];

const Testimonials = () => {
  const settings = {
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    centerMode: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="testimonial-carousel">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-img"
            />
            <p className="testimonial-text">{testimonial.text}</p>
            <h5 className="testimonial-name">{testimonial.name}</h5>
            <p className="testimonial-position">{testimonial.position}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
