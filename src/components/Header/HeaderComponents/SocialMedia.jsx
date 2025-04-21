import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
const SocialMedia = ({ facebookLink, twitterLink, instagramLink, variant }) => {
  return (
    <div className={`cs_header_social ${variant ? variant : ""}`}>
      <Link to={facebookLink}>
        <i>
          <FaFacebookF />
        </i>
      </Link>
      <Link to={twitterLink}>
        <i>
          <FaXTwitter />
        </i>
      </Link>
      <Link to={instagramLink}>
        <i>
          <FaInstagram />
        </i>
      </Link>
    </div>
  );
};

export default SocialMedia;
