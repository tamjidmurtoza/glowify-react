import React from "react";
import { Link } from "react-router-dom";

const ProductSection = ({ data }) => {
  return (
    <div>
      <div className="container">
        <div className="row cs_gap_y_20">
          {data.map((banner) => (
            <div className="col-lg-6" key={banner.id}>
              <Link
                to={banner.linkUrl}
                className="d-block cs_radius_10 overflow-hidden cs_zoom"
              >
                <img
                  src={banner.imageUrl}
                  alt={banner.altText}
                  className="cs_zoom_in w-100"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
