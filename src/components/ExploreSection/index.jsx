import React from "react";
import SectionHeading from "../Heading/SectionHeading";
import { Link } from "react-router-dom";
import Spacing from "../Spacing";

const ExploreSection = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center cs_gap_y_30">
          <div className="col-lg-4">
            <div className="cs_section_heading cs_style_1 position-relative">
              <div className="cs_section_heading_in">
                <SectionHeading
                  title={data.sectionTitle}
                  variant={
                    "cs_section_heading_title cs_fs_54 cs_semibold mb-0 d-flex align-items-center"
                  }
                />
              </div>
              <div className="cs_heading_animation_1 cs_accent_strong_color">
                <div className="cs_heading_animation_1_in">
                  <svg
                    width={35}
                    height={35}
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.669529 16.5742L5.69086 15.1361C7.95209 14.4973 10.0119 13.2875 11.6732 11.6226C13.3344 9.95778 14.5416 7.89352 15.1791 5.62738L16.614 0.595182C16.6862 0.419123 16.8089 0.268537 16.9667 0.16256C17.1244 0.0565833 17.3101 0 17.5 0C17.6899 0 17.8756 0.0565833 18.0333 0.16256C18.1911 0.268537 18.3138 0.419123 18.386 0.595182L19.8209 5.62738C20.4584 7.89352 21.6656 9.95778 23.3268 11.6226C24.9881 13.2875 27.0479 14.4973 29.3091 15.1361L34.3305 16.5742C34.5233 16.629 34.693 16.7454 34.8138 16.9056C34.9346 17.0659 35 17.2613 35 17.4621C35 17.663 34.9346 17.8583 34.8138 18.0186C34.693 18.1788 34.5233 18.2952 34.3305 18.35L29.3091 19.7881C27.0479 20.427 24.9881 21.6367 23.3268 23.3016C21.6656 24.9664 20.4584 27.0307 19.8209 29.2968L18.386 34.329C18.3313 34.5222 18.2152 34.6923 18.0553 34.8134C17.8954 34.9345 17.7004 35 17.5 35C17.2996 35 17.1046 34.9345 16.9447 34.8134C16.7848 34.6923 16.6687 34.5222 16.614 34.329L15.1791 29.2968C14.5416 27.0307 13.3344 24.9664 11.6732 23.3016C10.0119 21.6367 7.95209 20.427 5.69086 19.7881L0.669529 18.35C0.476727 18.2952 0.307037 18.1788 0.186207 18.0186C0.0653763 17.8583 0 17.663 0 17.4621C0 17.2613 0.0653763 17.0659 0.186207 16.9056C0.307037 16.7454 0.476727 16.629 0.669529 16.5742Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    width={43}
                    height={43}
                    viewBox="0 0 43 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.822559 20.3626L6.99162 18.5958C9.76971 17.8109 12.3003 16.3246 14.3413 14.2792C16.3823 12.2338 17.8653 9.69775 18.6486 6.91364L20.4115 0.731224C20.5001 0.514922 20.651 0.329917 20.8448 0.199717C21.0386 0.0695166 21.2667 0 21.5 0C21.7333 0 21.9614 0.0695166 22.1552 0.199717C22.349 0.329917 22.4999 0.514922 22.5885 0.731224L24.3514 6.91364C25.1347 9.69775 26.6177 12.2338 28.6587 14.2792C30.6997 16.3246 33.2303 17.8109 36.0084 18.5958L42.1774 20.3626C42.4143 20.4299 42.6228 20.5729 42.7712 20.7698C42.9197 20.9667 43 21.2067 43 21.4534C43 21.7002 42.9197 21.9402 42.7712 22.1371C42.6228 22.334 42.4143 22.4769 42.1774 22.5443L36.0084 24.3111C33.2303 25.096 30.6997 26.5822 28.6587 28.6276C26.6177 30.673 25.1347 33.2091 24.3514 35.9932L22.5885 42.1757C22.5213 42.413 22.3786 42.622 22.1822 42.7707C21.9857 42.9195 21.7462 43 21.5 43C21.2538 43 21.0143 42.9195 20.8178 42.7707C20.6214 42.622 20.4787 42.413 20.4115 42.1757L18.6486 35.9932C17.8653 33.2091 16.3823 30.673 14.3413 28.6276C12.3003 26.5822 9.76971 25.096 6.99162 24.3111L0.822559 22.5443C0.58569 22.4769 0.377213 22.334 0.228764 22.1371C0.0803146 21.9402 0 21.7002 0 21.4534C0 21.2067 0.0803146 20.9667 0.228764 20.7698C0.377213 20.5729 0.58569 20.4299 0.822559 20.3626Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <Spacing lg={20} md={60} />
          </div>
          {data.products.map((product, index) => (
            <div className="col-lg-4" key={index}>
              <div
                className="cs_product_card cs_style_8 cs_bg_filed cs_radius_10"
                style={{
                  backgroundImage: `url(${product.backgroundImg})`,
                }}
              >
                <h2 className="cs_product_heading cs_semibold cs_fs_54">
                  {product.heading}{" "}
                  {product.headingHighlight && (
                    <span className="cs_white_color">
                      {product.headingHighlight}
                    </span>
                  )}
                </h2>
                <div className="cs_product_info">
                  <div className="cs_product_info_in">
                    <div className="cs_product_category text-uppercase cs_fs_14 cs_light">
                      <Link to={product.shopLink}>{product.category}</Link>
                    </div>
                    <h2 className="cs_product_title cs_fs_18 cs_normal cs_secondary_font">
                      <Link to={product.detailsLink}>{product.title}</Link>
                    </h2>
                    <p className="cs_product_price cs_fs_24 cs_primary_color cs_medium">
                      {product.price}
                    </p>
                  </div>
                  <div className="cs_product_btn">
                    <button className="cs_btn cs_style_1 cs_medium cs_size_md">
                      <img src={product.buttonIcon} alt="Cart Icon" />
                      <span>{product.buttonText}</span>
                    </button>
                  </div>
                </div>
                <Link
                  to={product.detailsLink}
                  className="cs_product_link"
                ></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExploreSection;
