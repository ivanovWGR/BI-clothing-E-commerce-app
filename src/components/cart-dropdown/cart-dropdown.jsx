import React from "react";
import "./cart-dropdown.style.scss";
import CustomButton from "../custom-button.component/custom.button";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>Go to CheckOut</CustomButton>
    </div>
  );
};

export default CartDropdown;
