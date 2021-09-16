import React from "react";
import "./checkout.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart/carthidde.selector";
import { clearItemFromCart,addItemInCart,removeItem } from "../../redux/cart/cart.actions";
const CheckoutItem = ({ cartItem }) => {
  const {name,id,imageUrl,price,quantity} = cartItem ;
  const cartItems = useSelector((state) => selectCartItems(state));
  const dispatch = useDispatch();
  const handleRemoveItems = () => {
    dispatch(clearItemFromCart(id));
  };
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt={name} src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={()=>dispatch(removeItem(cartItem))}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={()=>dispatch(addItemInCart(cartItem))}>&#10095;</div>
      </span>
      <span className="price">{price*quantity}$ </span>
      <div className="remove-button" onClick={handleRemoveItems}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
