import React from "react";
import "./cart-item.style.scss";

const CartItem = ({ imageUrl, price, name, quantity }) => {
  return (
    <div className="cart-item">
      <img className="image" src={imageUrl} alt="item" />
      <div className="details">
        <span className="name">{name}</span>
        <span className="price">
          {" "}
          {quantity} x ${quantity > 1 ? price * quantity : price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
