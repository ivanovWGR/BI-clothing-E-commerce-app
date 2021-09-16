import React from "react";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/carthidde.selector";
import { useSelector } from "react-redux";
import "./checkout.styles.scss";

//components
import CheckoutItem from "../../components/checkoutItem/checkitem.component";

const CheckOutPage = () => {
  const { cartItems, selectTotal } = useSelector((state) => {
    return {
      cartItems: selectCartItems(state),
      selectTotal: selectCartTotal(state),
    };
  });
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="checkout-block">
          <span>Product</span>
        </div>
        <div className="checkout-block">
          <span>Description</span>
        </div>
        <div className="checkout-block">
          <span>Quantity</span>
        </div>
        <div className="checkout-block">
          <span>Price</span>
        </div>
        <div className="checkout-block">
          <span>Remove</span>
        </div>
      </div>

      <div>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <span className="total">Total : {selectTotal}</span>
    </div>
  );
};
export default CheckOutPage;
