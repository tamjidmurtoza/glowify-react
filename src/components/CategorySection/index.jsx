import React from "react";
import { Link } from "react-router-dom";

const CategorySection = ({ data }) => {
  return (
    <div className="container">
      <div className="row cs_gap_y_30">
        {data.map((category, index) => (
          <div className="col-lg-4" key={index}>
            <div
              className="cs_category cs_style_1 cs_bg_filed"
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <div className="cs_category_info text-center">
                <h2 className="cs_category_title cs_fs_54 cs_semibold">
                  {category.title}
                </h2>
                <p className="cs_category_subtitle cs_light mb-0">
                  {category.subtitle}
                </p>
                <div className="cs_category_btn">
                  <Link
                    to={category.link}
                    className="cs_btn cs_style_1 cs_fs_18 cs_medium"
                  >
                    {category.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
