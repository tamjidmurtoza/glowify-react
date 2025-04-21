import React from "react";
import SectionHeading from "../Heading/SectionHeading";
import Spacing from "../Spacing";

const BannerSection2 = ({ data, ctaSection }) => {
  return (
    <>
      <section>
        <div className="container">
          {ctaSection && (
            <>
              <div className="cs_banner cs_style_6 cs_accent_bg cs_radius_16">
                <SectionHeading
                  title={data.heading}
                  variant={"cs_fs_72 mb-0 cs_white_color cs_semibold"}
                />

                <div className="cs_banner_img">
                  <img src={data.bannerImage} alt="Banner" />
                </div>
                <div className="cs_banner_shape">
                  <svg
                    width={731}
                    height={711}
                    viewBox="0 0 731 711"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_75_1278"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x={0}
                      y={0}
                      width={731}
                      height={711}
                    >
                      <rect width={731} height={711} rx={16} fill="#E61F7F" />
                    </mask>
                    <g mask="url(#mask0_75_1278)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M448.845 17.169C566.525 50.3903 596.462 204.114 694.192 277.578C789.14 348.951 970.933 320.748 1004.31 434.711C1037.99 549.72 881.029 630.565 829.218 738.633C787.458 825.734 806.345 942.85 731.436 1003.86C655.656 1065.59 541.084 1080.81 448.845 1048.45C364.021 1018.7 335.878 917.12 281.093 845.88C244.673 798.52 216.43 750.659 182.19 701.702C128.222 624.54 39.2826 569.512 22.9541 476.791C0.590876 349.801 -10.8515 197.892 76.8075 103.29C165.474 7.60086 323.269 -18.281 448.845 17.169Z"
                        fill="#FAEFF2"
                      />
                    </g>
                  </svg>
                </div>

                <div className="cs_banner_line_shape">
                  <img src={data.lineShape} alt="Line" />
                </div>
                <div className="cs_star_shape_1">
                  <svg
                    width={29}
                    height={29}
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.55475 13.7329L4.71528 12.5414C6.58887 12.012 8.29557 11.0096 9.67204 9.63019C11.0485 8.25073 12.0487 6.54034 12.5769 4.66269L13.7659 0.493151C13.8257 0.347273 13.9274 0.222502 14.0581 0.134693C14.1888 0.0468833 14.3426 0 14.5 0C14.6574 0 14.8112 0.0468833 14.9419 0.134693C15.0726 0.222502 15.1743 0.347273 15.2341 0.493151L16.4231 4.66269C16.9513 6.54034 17.9515 8.25073 19.328 9.63019C20.7044 11.0096 22.4111 12.012 24.2847 12.5414L28.4452 13.7329C28.605 13.7783 28.7456 13.8748 28.8457 14.0075C28.9458 14.1403 29 14.3022 29 14.4686C29 14.635 28.9458 14.7969 28.8457 14.9297C28.7456 15.0624 28.605 15.1589 28.4452 15.2043L24.2847 16.3958C22.4111 16.9252 20.7044 17.9276 19.328 19.307C17.9515 20.6865 16.9513 22.3969 16.4231 24.2745L15.2341 28.444C15.1888 28.6041 15.0926 28.7451 14.9601 28.8454C14.8276 28.9457 14.6661 29 14.5 29C14.3339 29 14.1724 28.9457 14.0399 28.8454C13.9074 28.7451 13.8112 28.6041 13.7659 28.444L12.5769 24.2745C12.0487 22.3969 11.0485 20.6865 9.67204 19.307C8.29557 17.9276 6.58887 16.9252 4.71528 16.3958L0.55475 15.2043C0.395 15.1589 0.2544 15.0624 0.154284 14.9297C0.0541668 14.7969 0 14.635 0 14.4686C0 14.3022 0.0541668 14.1403 0.154284 14.0075C0.2544 13.8748 0.395 13.7783 0.55475 13.7329Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <div className="cs_star_shape_2">
                  <svg
                    width={29}
                    height={29}
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.55475 13.7329L4.71528 12.5414C6.58887 12.012 8.29557 11.0096 9.67204 9.63019C11.0485 8.25073 12.0487 6.54034 12.5769 4.66269L13.7659 0.493151C13.8257 0.347273 13.9274 0.222502 14.0581 0.134693C14.1888 0.0468833 14.3426 0 14.5 0C14.6574 0 14.8112 0.0468833 14.9419 0.134693C15.0726 0.222502 15.1743 0.347273 15.2341 0.493151L16.4231 4.66269C16.9513 6.54034 17.9515 8.25073 19.328 9.63019C20.7044 11.0096 22.4111 12.012 24.2847 12.5414L28.4452 13.7329C28.605 13.7783 28.7456 13.8748 28.8457 14.0075C28.9458 14.1403 29 14.3022 29 14.4686C29 14.635 28.9458 14.7969 28.8457 14.9297C28.7456 15.0624 28.605 15.1589 28.4452 15.2043L24.2847 16.3958C22.4111 16.9252 20.7044 17.9276 19.328 19.307C17.9515 20.6865 16.9513 22.3969 16.4231 24.2745L15.2341 28.444C15.1888 28.6041 15.0926 28.7451 14.9601 28.8454C14.8276 28.9457 14.6661 29 14.5 29C14.3339 29 14.1724 28.9457 14.0399 28.8454C13.9074 28.7451 13.8112 28.6041 13.7659 28.444L12.5769 24.2745C12.0487 22.3969 11.0485 20.6865 9.67204 19.307C8.29557 17.9276 6.58887 16.9252 4.71528 16.3958L0.55475 15.2043C0.395 15.1589 0.2544 15.0624 0.154284 14.9297C0.0541668 14.7969 0 14.635 0 14.4686C0 14.3022 0.0541668 14.1403 0.154284 14.0075C0.2544 13.8748 0.395 13.7783 0.55475 13.7329Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <Spacing lg={60} md={95} />
            </>
          )}
          {!ctaSection && (
            <>
              <hr />
              <Spacing lg={30} md={30} />
            </>
          )}
          <div className="cs_moving_container cs_style_1 overflow-hidden">
            <div className="cs_moving_container_in cs_slide_left">
              <div className="cs_moving_content">
                <div className="cs_brand cs_style_1">
                  {data.brands.map((brand, index) => (
                    <div className="cs_brand cs_center" key={index}>
                      <img src={brand} alt={`brand-img-${index}`} />
                    </div>
                  ))}
                </div>
              </div>
              {/* Repeat the same content for the second set of brands */}
              <div className="cs_moving_content">
                <div className="cs_brand cs_style_1">
                  {data.brands.map((brand, index) => (
                    <div className="cs_brand cs_center" key={index}>
                      <img src={brand} alt={`brand-img-${index}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerSection2;
