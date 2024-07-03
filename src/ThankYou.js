import React from "react";
import CarouselComponent from "./CarouselComponent";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <CarouselComponent />
      <div className="thank-you-message">
        <h1>Thank You for Your Purchase!</h1>
        <p>
          We sincerely appreciate your business and we're delighted to have you
          as our customer. Your order is being processed, and we will contact
          you regarding payment and shipping details shortly. If you have any
          questions or need further assistance, please do not hesitate to
          contact us.
        </p>
        <p>
          Thank you for choosing us for your personalized products. We hope to
          serve you again in the future!
        </p>
        <Link to="/" className="btn btn-outline-dark">
          View More Products
        </Link>
      </div>

      <style jsx>{`
        .thank-you-container {
          text-align: center;
          margin: 50px auto;
          padding: 20px;
          max-width: 800px;
        }
        .thank-you-message {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .thank-you-message h1 {
          font-family: "Dancing Script", cursive;
          font-size: 3rem;
          color: #333;
          margin-bottom: 20px;
        }
        .thank-you-message p {
          font-family: "'Playfair Display', serif",
          font-size: 1.2rem;
          color: #555;
          line-height: 1.5;
          margin: 10px 0;
        }
      `}</style>
    </div>
  );
};

export default ThankYou;
