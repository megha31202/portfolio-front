import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  return (
    <div className="container mt-5">
      <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Price: ${product.price}</Card.Text>
          <Card.Text>Available: {product.quantity}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
          <Link to={`/customize/${product.id}`}>
            <Button variant="outline-dark">Customize</Button>
          </Link>
          <Link
            to="/"
            className="btn btn-outline-danger"
            style={{ marginLeft: "5px" }}
          >
            Home
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetail;
