import React from "react";
import HeadingPath from "../Heading/HeadingPath";

const BreadCamp1 = ({ backgroundImage, title, breadcrumbItems }) => {
  return (
    <>
      <div
        className="cs_breadcamp_wrap cs_style_1 cs_accent_light_bg cs_bg_filed"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container">
          <h1 className="cs_breadcamp_title cs_fs_54 cs_semibold">{title}</h1>
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
    </>
  );
};

export default BreadCamp1;
