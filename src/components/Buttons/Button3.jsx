import React from "react";

const Button3 = ({ variant }) => {
  return (
    <button className={variant}>
      <img src="/assets/images/icons/cart_white.svg" alt="card-icon" />
      <span>Add To Bag</span>
    </button>
  );
};

export default Button3;
