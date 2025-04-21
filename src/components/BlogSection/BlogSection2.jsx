import React from "react";
import SectionHeading from "../Heading/SectionHeading";
import { Link } from "react-router-dom";
import Spacing from "../Spacing";

const BlogSection2 = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="cs_section_heading cs_style_1 justify-content-center">
          <div className="cs_section_heading_in">
            <SectionHeading
              title={data.sectionTitle}
              variant={
                "cs_section_heading_title cs_fs_54 cs_semibold mb-0 d-flex align-items-center"
              }
            />
          </div>
        </div>
        <Spacing lg={50} md={60} />
        <div className="row cs_gap_y_30">
          {data.blogData.map((post, index) => (
            <div className="col-lg-4" key={index}>
              <div className="cs_post cs_style_2 cs_type_1 cs_radius_8">
                <Link
                  to={post.link}
                  className="cs_post_thumb cs_bg_filed cs_radius_8"
                >
                  <img src={post.image} alt="Thumbnail" />
                </Link>
                <div className="cs_post_info">
                  <div className="cs_post_category text-uppercase cs_light cs_accent_bg cs_white_color">
                    {post.category}
                  </div>
                  <div className="cs_post_meta cs_light cs_primary_color">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="cs_post_title cs_fs_24 cs_medium cs_secondary_font">
                    <Link to={post.link}>{post.title}</Link>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogSection2;
