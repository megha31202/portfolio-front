import React from "react";
import Carousel from "react-bootstrap/Carousel";

const testimonials = [
  {
    id: 1,
    text: "Elegant Scribbles transformed my workspace. The posters and notebooks are of top-notch quality!",
    author: "John Doe, USA",
  },
  {
    id: 2,
    text: "I love the customization options available. My personalized mug is my new favorite!",
    author: "Jane Smith, Australia",
  },
  {
    id: 3,
    text: "Excellent service and beautiful products. Highly recommend Elegant Scribbles!",
    author: "Sam Wilson, India",
  },
  {
    id: 4,
    text: "I just wanna say one thing about Elegant Scribbles...Siiiii",
    author: "Cristiano Ronaldo, KSA",
  },
];

const TestimonialCarousel = () => {
  const carouselStyle = {
    backgroundColor: "#f0f0f0", // Light gray background color
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Shadow
    padding: "20px",
    borderRadius: "8px",
  };

  const testimonialTextStyle = {
    fontSize: "1.2rem",
    fontStyle: "italic",
    textAlign: "center",
    margin: "20px 0",
  };

  const testimonialAuthorStyle = {
    fontSize: "1rem",
    fontWeight: "bold",
    textAlign: "center",
  };

  return (
    <Carousel style={carouselStyle}>
      {testimonials.map((testimonial) => (
        <Carousel.Item key={testimonial.id}>
          <div className="d-flex flex-column align-items-center">
            <p style={testimonialTextStyle}>{testimonial.text}</p>
            <h5 style={testimonialAuthorStyle}>- {testimonial.author}</h5>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default TestimonialCarousel;
