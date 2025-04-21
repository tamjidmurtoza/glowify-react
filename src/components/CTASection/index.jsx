import React from "react";
import Spacing from "../Spacing";
import { Link } from "react-router-dom";

const CTASection = ({ data }) => {
  const { backgroundImage, linkUrl, buttonText } = data;

  return (
    <div className="container">
      <Spacing lg={40} md={120} />

      <Link
        to={linkUrl}
        className="cs_cta cs_style_1 cs_fs_54 cs_primary_font cs_center text-uppercase cs_white_color cs_radius_12 cs_semibold text-center cs_bg_filed"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        dangerouslySetInnerHTML={{ __html: buttonText }}
      ></Link>
    </div>
  );
};

export default CTASection;
