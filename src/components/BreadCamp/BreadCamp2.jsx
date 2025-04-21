import React from "react";
import HeadingPath from "../Heading/HeadingPath";

const BreadCamp2 = ({ data }) => {
  return (
    <>
      <div className="cs_breadcamp_wrap cs_style_2 cs_accent_strong_bg cs_bg_filed">
        <div className="container">
          <div className="cs_breadcamp_in">
            <h1 className="cs_breadcamp_title cs_fs_36 cs_semibold cs_white_color">
              {data.title}
            </h1>
            <ol className="breadcrumb cs_fs_18 mb-0 cs_white_color">
              {data.locationPath.map((item, index) => (
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

export default BreadCamp2;
