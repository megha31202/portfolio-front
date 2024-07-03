import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import carouselImage1 from "./components/carouselImage1.jpg";
import carouselImage2 from "./components/carouselImage2.jpg";
import carouselImage3 from "./components/carouselImage3.jpg";
import carouselImage4 from "./components/carouselImage4.jpg";
import carouselImage5 from "./components/carouselImage5.jpg";
import carouselImage6 from "./components/carouselImage6.jpg";
import carouselImage7 from "./components/carouselImage7.jpg";
const CarouselComponent = () => {
  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    maxHeight: "500px",
    objectFit: "cover",
  };

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselImage1}
          alt="First slide"
          style={imageStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselImage2}
          alt="Second slide"
          style={imageStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselImage3}
          alt="Third slide"
          style={imageStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselImage4}
          alt="Fourth slide"
          style={imageStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselImage5}
          alt="Fifth slide"
          style={imageStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselImage6}
          alt="Sixth slide"
          style={imageStyle}
        />
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImage7}
            alt="Seventh slide"
            style={imageStyle}
          />
        </Carousel.Item>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
