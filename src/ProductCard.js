import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: "20rem", margin: "10px" }}>
      <Card.Img
        variant="top"
        src={product.image}
        style={{ height: "300px", width: "100%" }}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>Price: ${product.price}</Card.Text>
        <Card.Text>
          <small className="text-muted">{product.description}</small>
        </Card.Text>
        <Link to={`/product/${product.id}`}>
          <Button variant="outline-dark">View</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
