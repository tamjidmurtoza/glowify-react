import React from "react";
import Spacing from "../Spacing";

const FeatureSection1 = ({ data, variant }) => {
  return (
    <div className="container">
      {variant === "style-1" && <Spacing lg={30} md={30} />}
      <div
        className={`cs_grid_5_column ${
          variant === "style-2" ? "cs_type_1" : ""
        } 
        ${variant === "style-1" ? "cs_iconbox_style_1_wrap" : ""}
        `}
      >
        {data.map((feature, index) => (
          <div className="cs_grid_col" key={index}>
            <div
              className={`cs_iconbox cs_radius_6 ${
                variant === "style-2" ? "cs_style_2" : "cs_style_1 text-center"
              }`}
            >
              <img src={feature.iconUrl} alt={feature.title} />
              <p className="mb-0 cs_semibold">{feature.title}</p>
            </div>
          </div>
        ))}
      </div>

      {variant === "style-1" && <Spacing lg={70} md={140} />}
    </div>
  );
};

export default FeatureSection1;
