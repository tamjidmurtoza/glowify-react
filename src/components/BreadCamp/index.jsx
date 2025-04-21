import React from "react";
import Spacing from "../Spacing";
import HeadingPath from "../Heading/HeadingPath";

const BreadCamp = ({ backgroundImage, title, breadcrumbItems, type }) => {
  return (
    <>
      <Spacing lg={30} md={40} />
      <div className="container">
        <div
          className={`cs_breadcamp_wrap cs_style_1 cs_accent_light_bg cs_bg_filed cs_radius_8 ${
            !type ? "cs_type_1" : ""
          }`}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div>
            <h1
              className="cs_breadcamp_title cs_fs_54 cs_semibold"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <ol className="breadcrumb cs_fs_18 mb-0">
              {breadcrumbItems.map((item, index) => (
                <HeadingPath
                  key={index}
                  active={item.active}
                  label={item.label}
                  url={item.url}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadCamp;
