import React from "react";
import { Link } from "react-router-dom";

const Description = () => {
  const containerStyle = {
    padding: "2rem",
    backgroundColor: "#f8f9fa",
    fontFamily: "'Playfair Display', serif",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "1rem",
  };

  const paragraphStyle = {
    fontSize: "1.25rem",
    lineHeight: "1.6",
    marginBottom: "1rem",

    color: "#343a40",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to Elegant Scribbles</h1>
      <p style={paragraphStyle}>
        At Elegant Scribbles, we believe in the power of creativity and personal
        expression. We offer a unique collection of beautifully designed
        posters, notebooks, mugs, and personalized items that are perfect for
        gifts or for treating yourself. Each item is crafted with care and
        designed to inspire and bring joy to your daily life.
      </p>
      <p style={paragraphStyle}>
        Whether you're looking for a thoughtful gift or something to brighten up
        your own space, Elegant Scribbles has something special for you. Explore
        our collection and discover the perfect piece that speaks to you.
      </p>
      <Link to="/about-us" className="btn btn-outline-dark">
        About Us
      </Link>
    </div>
  );
};

export default Description;
