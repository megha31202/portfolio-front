import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Card, Button, Form } from "react-bootstrap";
import axios from "axios";
import GothicImage from "./components/gothic.jpeg"; // Import your font image
import Bouncy from "./components/bouncy.jpeg";
import Copperplate from "./components/copperplate.jpeg";
import TypeWriter from "./components/typewriter.jpeg";

const CustomizeProduct = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((product) => product.id === parseInt(id));
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [selectedFont, setSelectedFont] = useState("");
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [customText, setCustomText] = useState("");
  const [instructions, setInstructions] = useState("");
  const [showCustomerForm, setShowCustomerForm] = useState(false);

  const handleColorChange = (e) => setSelectedColor(e.target.value);
  const handleFontChange = (e) => setSelectedFont(e.target.value);
  const handlePictureChange = (e) => setSelectedPicture(e.target.files[0]);
  const handleTextChange = (e) => {
    const { id, value } = e.target;
    if (id === "formCustomText") setCustomText(value);
    if (id === "formInstructions") setInstructions(value);
  };

  const handleSubmit = () => setShowCustomerForm(true);

  const handleCustomerFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productId", id);
    formData.append("productType", product.name);
    formData.append("selectedColor", selectedColor);
    formData.append("selectedFont", selectedFont);
    formData.append("selectedPicture", selectedPicture);
    formData.append("customText", customText);
    formData.append("instructions", instructions);
    formData.append("customerName", e.target.formName.value);
    formData.append("customerPhone", e.target.formPhoneNumber.value);
    formData.append("customerEmail", e.target.formEmail.value);

    axios
      .post("https://porfolio-liard-theta.vercel.app/customizations", formData)
      .then((response) => {
        console.log("Customization saved:", response.data);
        setShowCustomerForm(false);
        navigate("/thanks");
      })
      .catch((error) => {
        console.error("There was an error saving the customization!", error);
        alert(
          "An error occurred while saving your customization. Please try again."
        );
      });
  };

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container mt-5">
      <Card>
        <Card.Img
          variant="top"
          src={product.image}
          style={{ width: "100%", height: "700px", margin: "0 auto" }}
        />
        <Card.Body>
          <Card.Title className="text-center mb-4">{product.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-center">
            {product.productType}
          </Card.Subtitle>
          <Form encType="multipart/form-data">
            <Form.Group controlId="formColor">
              <Form.Label>Select Color</Form.Label>
              <Form.Control
                type="color"
                value={selectedColor}
                onChange={handleColorChange}
              />
            </Form.Group>
            <Form.Group controlId="formFont" className="mt-3">
              <Form.Label>Select Font</Form.Label>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <label className="font-option">
                  <input
                    type="radio"
                    name="font"
                    value="Font1"
                    onChange={handleFontChange}
                  />
                  <h5>Bouncy</h5>
                  <img
                    src={Bouncy}
                    alt="Bouncy Font"
                    className="font-img"
                    style={{ width: "100px", height: "auto" }}
                  />
                </label>
                <label className="font-option">
                  <input
                    type="radio"
                    name="font"
                    value="Font2"
                    onChange={handleFontChange}
                  />
                  <h5>Gothic</h5>
                  <img
                    src={GothicImage}
                    alt="Gothic Font"
                    className="font-img"
                    style={{ width: "100px", height: "auto" }}
                  />
                </label>
                <label className="font-option">
                  <input
                    type="radio"
                    name="font"
                    value="Font3"
                    onChange={handleFontChange}
                  />
                  <h5>Copperplate</h5>
                  <img
                    src={Copperplate}
                    alt="Copperplate Font"
                    className="font-img"
                    style={{ width: "100px", height: "auto" }}
                  />
                </label>
                <label className="font-option">
                  <input
                    type="radio"
                    name="font"
                    value="Font4"
                    onChange={handleFontChange}
                  />
                  <h5>Typewriter</h5>
                  <img
                    src={TypeWriter}
                    alt="Typewriter Font"
                    className="font-img"
                    style={{ width: "100px", height: "auto" }}
                  />
                </label>
              </div>
            </Form.Group>
            <Form.Group controlId="formPicture" className="mt-3">
              <Form.Label>Add Pictures</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handlePictureChange}
              />
            </Form.Group>
            <Form.Group controlId="formCustomText" className="mt-3">
              <Form.Label>Custom Text</Form.Label>
              <Form.Control
                type="text"
                value={customText}
                onChange={handleTextChange}
                placeholder="Enter custom text"
                required
              />
            </Form.Group>
            <Form.Group controlId="formInstructions" className="mt-3">
              <Form.Label>Add Instructions (Type 'None' if None)</Form.Label>
              <Form.Control
                type="text"
                value={instructions}
                onChange={handleTextChange}
                placeholder="Enter instructions"
                required
              />
            </Form.Group>
            <div className="d-flex justify-content-center align-items-center">
              <Button
                variant="outline-dark"
                className="mt-3"
                onClick={handleSubmit}
                disabled={showCustomerForm}
              >
                Submit Customization
              </Button>
              <Link to="/" className="btn btn-outline-danger mt-3 ml-2">
                Home
              </Link>
            </div>
          </Form>
          {showCustomerForm && (
            <Form onSubmit={handleCustomerFormSubmit} className="mt-3">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
              <div className="d-flex justify-content-center align-items-center">
                <Button variant="dark" type="submit" className="mt-3">
                  Submit
                </Button>
                <Button
                  variant="outline-primary"
                  type="button"
                  className="mt-3 ml-2"
                  onClick={() => setShowCustomerForm(false)}
                >
                  Edit Details
                </Button>
                <Button
                  variant="outline-danger"
                  type="button"
                  className="mt-3 ml-2"
                  onClick={() => setShowCustomerForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomizeProduct;
