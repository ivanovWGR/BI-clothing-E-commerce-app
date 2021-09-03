import React from "react";
import "./header.component.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utills";
import setCurrentUser from "../../redux/user/user.actions";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const currUser = useSelector((state) => state.user.currentUser);
  return (
    <div className="header">
      <Link to="/" className="logo-container">
      {console.log(currUser,"header comp 14")}
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
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signIn">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
