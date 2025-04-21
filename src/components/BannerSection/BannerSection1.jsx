import React from "react";
import { Link } from "react-router-dom";

const BannerSection1 = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="row cs_gap_y_20">
          {data.map((banner, index) => (
            <div key={index} className="col-lg-6">
              <Link
                to={banner.link}
                className={`cs_banner ${banner.style} cs_accent_light_bg cs_radius_10 overflow-hidden position-relative cs_bg_filed`}
                style={{ backgroundImage: `url(${banner.imageUrl})` }}
              >
                <div className="cs_banner_text">
                  <p className="cs_fs_24 cs_white_color cs_medium">
                    {banner.offerText}
                  </p>
                  <h2
                    className="cs_fs_54 cs_white_color mb-0 cs_normal cs_secondary_font"
                    dangerouslySetInnerHTML={{ __html: banner.title }}
                  />
                  {banner.label && (
                    <span className="cs_banner_lavel cs_accent_strong_bg cs_white_color cs_fs_18 cs_radius_5">
                      {banner.label}
                    </span>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BannerSection1;
