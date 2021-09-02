import React from "react";
import "./custom.button.styles.scss";

const CustomButton = ({ children, googleLogIn, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={`${googleLogIn ? "google-sign-in" : ""} custom-button`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
