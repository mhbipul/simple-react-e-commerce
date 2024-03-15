// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";
const Product = (props) => {
  
  // eslint-disable-next-line react/prop-types
  const { img, name, seller, ratings, price } = props.product;
  // eslint-disable-next-line react/prop-types
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name"> {name} </h6>
        <p>Price: ${price} </p>
        <p>Manufacturer: {seller} </p>
        <p>Rating: {ratings} Stars </p>
      </div>

      <button
        // eslint-disable-next-line react/prop-types
        onClick={() => handleAddToCart(props.product)}
        className="btn-cart"
      >
        Add to Cart
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
