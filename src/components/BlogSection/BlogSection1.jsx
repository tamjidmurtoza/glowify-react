import React from "react";
import Spacing from "../Spacing";
import Button from "../Buttons";
import SectionHeading from "../Heading/SectionHeading";
import { FaClock, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogSection1 = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="cs_section_heading cs_style_1">
          <div className="cs_section_heading_in">
            <SectionHeading
              title={data.sectionTitle}
              variant={
                "cs_section_heading_title cs_fs_54 cs_semibold mb-0 d-flex align-items-center"
              }
            />
          </div>
          <div className="cs_section_heading_right">
            <Button
              btnText={data.buttonText}
              variant={"cs_text_btn cs_accent_color cs_semibold"}
              btnUrl={data.buttonUrl}
            />
          </div>
        </div>
        <Spacing lg={50} md={60} />
        <div className="cs_grid_style_1">
          {data.blogs.map((blog, index) => (
            <div className="cs_grid_col" key={index}>
              <div className="cs_post cs_style_2 cs_radius_8">
                <Link
                  to={blog.link}
                  className="cs_post_thumb cs_bg_filed cs_radius_10"
                >
                  <img src={blog.imgSrc} alt="Thumbnail" />
                </Link>
                <div className="cs_post_info">
                  <div className="cs_post_category text-uppercase cs_light cs_accent_bg cs_white_color">
                    {blog.category}
                  </div>
                  <h2 className="cs_post_title cs_fs_24 cs_medium cs_secondary_font">
                    <Link to={blog.link}>{blog.title}</Link>
                  </h2>
                  <p className="cs_post_subtitle cs_light">{blog.subtitle}</p>
                  <div className="cs_post_meta cs_light">
                    <span>
                      <i>
                        <FaClock />
                      </i>{" "}
                      {blog.date}
                    </span>
                    <span>
                      <i>
                        <FaUserCircle />
                      </i>{" "}
                      {blog.author}
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

export default BlogSection1;
