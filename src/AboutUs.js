import React from "react";
import CarouselComponent from "./CarouselComponent";
import FounderImage from "./components/myImage.jpg"; // Make sure to add the founder's image in the components folder

const AboutUs = () => {
  const cont = {
    fontFamily: "'Playfair Display', serif",
  };
  return (
    <div>
      <CarouselComponent />
      <div className="container mt-5" style={cont}>
        <h2 className="text-center">About Us</h2>
        <div className="row mt-4">
          <div className="col-md-4 text-center">
            <img
              src={FounderImage}
              alt="Founder"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="col-md-8">
            <h3>From The Founder</h3>
            <p>
              My journey began during the third year of my undergraduate studies
              when I realized that I wanted to create something that embodied
              uniqueness, individuality, and elegance. This epiphany led to the
              birth of Elegant Scribbles.
            </p>
            <p>
              From a young age, I was passionate about calligraphy. I honed my
              skills from the 4th grade, never knowing that one day they would
              become the cornerstone of my dream venture. With Elegant
              Scribbles, I found a way to channel my creativity and passion into
              a business that truly represents who I am.
            </p>
            <p>
              At Elegant Scribbles, we offer a wide range of products, from
              posters to notebooks, mugs to personalized designs. Each item is
              crafted with the utmost care and precision, reflecting my
              dedication to quality and customer satisfaction. My goal is to
              bring joy and uniqueness to everyday items, making them special
              for each individual.
            </p>
            <p>
              I invite you to explore our collection and experience the elegance
              and creativity that Elegant Scribbles has to offer. Thank you for
              supporting my journey and being a part of our story. Together, we
              can make everyday items a little more special and a lot more
              elegant.
            </p>
            <p>
              <b>- Megha Gupta</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
