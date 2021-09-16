import React from "react";
import "./cart-dropdown.style.scss";
import CustomButton from "../custom-button.component/custom.button";
import CartItem from "../cart-item/cart-item.component";
import toogleCartHidden from "../../redux/cart/cart.actions";
import { useSelector, useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";

const CartDropdown = ({ history }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <CartItem {...cartItem} key={cartItem.id} />
          ))
        ) : (
          <span className="message-cart">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toogleCartHidden())
        }}
      >
        Go to CheckOut
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
