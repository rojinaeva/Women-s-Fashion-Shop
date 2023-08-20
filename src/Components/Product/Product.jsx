import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
 console.log(props.product);
 const {image,productName,price,ratings}=props.product;
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product-info">
         <h6>{productName}</h6>
         <p>Price:${price}</p>
         <p>Ratings:{ratings} star</p>
      </div>
      <button className="cart-btn">Add To Cart
      <FontAwesomeIcon icon={faCartPlus} /></button>
    </div>
  );
};

export default Product;
