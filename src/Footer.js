import React from "react";
import { BsInstagram, BsHouse } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-white text-dark text-center py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Link to="/" className="text-dark me-3">
              <BsHouse size={24} />
            </Link>
            Home
          </div>
          <div className="col-lg-4">
            <a
              href="https://www.instagram.com/elegant_scribbles/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark me-3"
            >
              <BsInstagram size={24} />
            </a>
            Follow us on Instagram
          </div>
          <div className="col-lg-4">
            <p>
              Contact us:{" "}
              <a href="mailto:meghagupta31202@gmail.com" className="text-dark">
                meghagupta31202@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
