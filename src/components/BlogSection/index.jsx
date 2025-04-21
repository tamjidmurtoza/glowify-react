import React from "react";
import { FaClock, FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionHeading from "../Heading/SectionHeading";
import Spacing from "../Spacing";
const BlogSection = ({ data }) => {
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
          {data.blogPosts.map((post, index) => (
            <div className="col-lg-4" key={index}>
              <div className="cs_post cs_style_1">
                <div className="cs_post_category text-uppercase cs_accent_color cs_light text-center cs_accent_light_bg">
                  {post.category}
                </div>
                <div className="cs_post_thumb_wrap">
                  <Link
                    to={post.link}
                    className="cs_post_thumb cs_bg_filed"
                    style={{ backgroundImage: `url(${post.imageUrl})` }}
                  />
                </div>
                <div className="cs_post_info">
                  <h2 className="cs_post_title cs_fs_24 cs_medium cs_secondary_font">
                    <Link to={post.link}>{post.title}</Link>
                  </h2>
                  <div className="cs_post_meta cs_light">
                    <span>
                      <i>
                        <FaClock />
                      </i>
                      {post.date}
                    </span>
                    <span>
                      <i>
                        <FaRegUserCircle />
                      </i>{" "}
                      {post.author}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogSection;
