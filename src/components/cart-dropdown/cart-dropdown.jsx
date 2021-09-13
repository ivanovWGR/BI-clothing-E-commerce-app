import React from "react";
import "./cart-dropdown.style.scss";
import CustomButton from "../custom-button.component/custom.button";
import CartItem from "../cart-item/cart-item.component";
import { useSelector, useDispatch } from "react-redux";

const CartDropdown = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem=>(
         <CartItem {...cartItem} key={cartItem.id}/> 
        ))}
      </div>
      <CustomButton>Go to CheckOut</CustomButton>
    </div>
  );
};

export default CartDropdown;
