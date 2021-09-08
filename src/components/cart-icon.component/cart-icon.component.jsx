import React from "react";
import "./cart-icon.style.scss";
import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import toogleCartHidden from "../../redux/cart/cart.actions";
import { useSelector, useDispatch } from "react-redux";

const CartIcon = () => {
  const toogleHidden = useSelector((state) => {
    return state.cart.hidden;
  });
  const dispatch = useDispatch();

  return (
    <div className="cart-icon" onClick={() => dispatch(toogleCartHidden())}>
      <ShopingIcon className="shoping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
