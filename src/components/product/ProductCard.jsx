import { Link } from "react-router-dom";
import "./productcard.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Productcard = ({ product }) => {
  const discountPercent = Math.round(
    ((product.mrp - product.salePrice) / product.mrp) * 100
  );
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
     <Link to={`/product/${product.slug}`}>
      <img src={product.image} alt={product.name} />

      {product.status !== "Sold Out" && (
        <span className="discount">{discountPercent}% Off</span>
      )}

      <span className="brand-name">{product.brand}</span>

      <h3>{product.name}</h3>

      <p className="price">
        ₹{product.salePrice}
      </p>
      <p> MRP : ₹
        <span className="mrp"> {product.mrp}</span>
      </p>
</Link>
      <button
  onClick={() => addToCart(product)}
  disabled={product.status === "Sold Out"}
>
  Add to Cart
</button>
      
    </div>
  );
};

export default Productcard;