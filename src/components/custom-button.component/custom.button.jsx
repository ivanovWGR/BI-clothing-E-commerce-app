import React from "react";
import "./custom.button.styles.scss";

const CustomButton = ({ children, inverted, googleLogIn, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={`${inverted ? "inverted" : ""}  ${
        googleLogIn ? "google-sign-in" : ""
      } custom-button`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
