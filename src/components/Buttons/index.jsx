import React from "react";
import { Link } from "react-router-dom";

const Button = ({ btnUrl = "/", btnText, variant }) => {
  return (
    <>
      <Link to={btnUrl} className={variant}>
        <span>{btnText}</span>
        {/* {btnIcons && <i>{btnIcons}</i>} */}
      </Link>
    </>
  );
};

export default Button;
