import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselComponent from "./CarouselComponent";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import Description from "./Description";
import ProductDetail from "./ProductDetail";
import CustomizeProduct from "./CustomizeProduct";
import PosterImage from "./components/poster.jpeg";
import NotebookImage from "./components/notebookA5.jpg";
import Notebook2 from "./components/carouselImage1.jpg";
import CoffeeMug from "./components/coffeeMug.jpg";
import ThankYou from "./ThankYou";
import AboutUs from "./AboutUs";
import CustomImage from "./components/custom.jpg";
import TestimonialCarousel from "./TestimonialCarousel"; // Import your TestimonialsCarousel component

const products = [
  {
    id: 1,
    name: "Kitchen Poster",
    image: PosterImage,
    price: 15,
    description: "Decorate your kitchen with this beautiful poster.",
  },
  {
    id: 2,
    name: "Notebook (A5)",
    image: NotebookImage,
    price: 10,
    description: "A customized A5 notebook for your daily notes.",
  },
  {
    id: 3,
    name: "Notebook (A4)",
    image: Notebook2,
    price: 15,
    description: "A customized A4 notebook for your detailed notes.",
  },
  {
    id: 4,
    name: "Coffee Mug",
    image: CoffeeMug,
    price: 15,
    description: "A customized coffee mug to start your day.",
  },
  {
    id: 5,
    name: "Create a custom design",
    image: CustomImage,
    price: 5,
    description:
      "Unlock your creativity with our custom design service! Perfect for stunning wallpapers, elegant invitations, and so much more. ",
  },
  // Add more products as needed
];

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CarouselComponent />
                <Description />
                <div>
                  <h1
                    style={{
                      textAlign: "center",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    Our Products
                  </h1>
                </div>
                <div className="container">
                  <div className="row">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className="col-lg-3 col-md-4 col-sm-6"
                      >
                        <ProductCard product={product} />
                      </div>
                    ))}
                  </div>
                </div>
                <TestimonialCarousel />{" "}
                {/* Add TestimonialCarousel component */}
              </>
            }
          />
          <Route
            path="/product/:id"
            element={<ProductDetail products={products} />}
          />
          <Route
            path="/customize/:id"
            element={<CustomizeProduct products={products} />}
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/thanks" element={<ThankYou />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
