import React from "react";
import { Link } from "react-router-dom";
import Spacing from "../Spacing";

const HeroSection = ({ data }) => {
  return (
    <div className="container">
      <div
        className="cs_hero cs_style_1 cs_bg_filed cs_radius_30"
        style={{ backgroundImage: `url(${data.backgroundImage})` }}
      >
        <div className="cs_hero_text">
          <h1 className="cs_hero_title cs_white_color cs_fs_100">
            {data.title}
          </h1>
          <p className="cs_hero_subtitle cs_fs_24">{data.subtitle}</p>
          <Link
            to={data.shopLink}
            className="cs_btn cs_style_1 cs_fs_18 cs_medium"
          >
            {data.buttonText}
          </Link>
        </div>
        <div className="cs_hero_mini_img">
          <img src={data.miniImage} alt="Hero Mini" />
        </div>
      </div>
      <Spacing lg={40} md={60} />
      <div className="cs_moving_container cs_style_1 overflow-hidden">
        <div className="cs_moving_container_in cs_slide_left">
          <div className="cs_moving_content">
            <div className="cs_brand cs_style_1">
              {data.brands.map((brand, index) => (
                <div className="cs_brand cs_center" key={index}>
                  <img src={brand.image} alt={`brand-${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          {/* Repeat the moving content for continuous scrolling */}
          <div className="cs_moving_content">
            <div className="cs_brand cs_style_1">
              {data.brands.map((brand, index) => (
                <div className="cs_brand cs_center" key={index}>
                  <img src={brand.image} alt={`brand-${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
