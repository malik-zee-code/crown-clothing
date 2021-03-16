import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignin,inverted, ...otherProps }) => (
  <button
    className={`${inverted ? "inverted" : ""} custom-button ${isGoogleSignin ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);
export default CustomButton;
