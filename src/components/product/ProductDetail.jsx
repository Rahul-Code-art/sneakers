import React, { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProductData from "../../data/ProductData"; // adjust path
import "./productdetail.css"
import { CartContext } from "../../context/CartContext";


const ProductDetail = () => {
  const { slug } = useParams();
const { addToCart } = useContext(CartContext);
  // find product by id
  const product = ProductData.find(
    (item) => item.slug === slug
  );

const discountPercent = Math.round(
    ((product.mrp - product.salePrice) / product.mrp) * 100
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <section className="product-detail ">
      <Container>
        <Row>
          <Col md={6}>
           <div className="image-holder">
             <img
              src={product.image}
              alt={product.name}
              className="img-fluid"
            />
             {product.status !== "Sold Out" && (
        <span className="discount">{discountPercent}% Off</span>
      )}
           </div>
          </Col>

          <Col md={6}>
           <span className="brand-name">{product.brand}</span>
            <h2>{product.name}</h2>
            <h4>₹{product.salePrice}</h4>
           <p> MRP : ₹
        <span className="mrp"> {product.mrp}</span>
      </p>
            <p>{product.description}</p>
             <Button
              variant="dark"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetail;