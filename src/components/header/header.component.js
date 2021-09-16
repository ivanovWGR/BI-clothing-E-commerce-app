import React from "react";
import "./header.component.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utills";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectHidden } from "../../redux/cart/carthidde.selector";

import CartIcon from "../cart-icon.component/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown";

const Header = () => {
  const currUser = useSelector((state) => selectCurrentUser(state));
  const hidden = useSelector((state) => selectHidden(state));

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>

        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currUser ? (
          <Link className="option" to="" onClick={() => auth.signOut()}>
            SIGN OUT
          </Link>
        ) : (
          <Link className="option" to="/signIn">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
