import { useRef } from "react";
import SectionHeading from "../Heading/SectionHeading";
import Spacing from "../Spacing";
import Slider from "react-slick";
import ProductCard2 from "../ProductCard/ProductCard2";
const SaleSection1 = ({ data }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container">
        <div className="cs_section_heading cs_style_1">
          <div className="cs_section_heading_in">
            <SectionHeading
              title={data.sectionHeading}
              variant={
                "cs_section_heading_title cs_fs_54 cs_semibold mb-0 d-flex align-items-center"
              }
            />
          </div>
        </div>
        <Spacing lg={50} md={60} />

        <div className="cs_slider cs_style_1 cs_slider_gap_20 cs_show_arrow_hover cs_shadow_slider">
          <Slider {...settings} ref={sliderRef}>
            {data.productSliderData.map((productData, index) => (
              <div className="cs_slider" key={index}>
                <ProductCard2 {...productData} variant={"style-1"} />
              </div>
            ))}
          </Slider>
          <div className="cs_pagination cs_style_1 cs_mobile_show" />
          <div className="cs_slider_arrows cs_style_1 cs_mobile_hide">
            <div
              className="cs_left_arrow cs_center"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <svg
                width={6}
                height={12}
                viewBox="0 0 6 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-4.76837e-07 6.00003C-4.76837e-07 5.87216 0.0488744 5.74416 0.146499 5.64653L5.1465 0.646531C5.34187 0.451156 5.65825 0.451156 5.8535 0.646531C6.04875 0.841906 6.04887 1.15828 5.8535 1.35353L1.207 6.00003L5.8535 10.6465C6.04887 10.8419 6.04887 11.1583 5.8535 11.3535C5.65812 11.5488 5.34175 11.5489 5.1465 11.3535L0.146499 6.35353C0.0488744 6.25591 -4.76837e-07 6.12791 -4.76837e-07 6.00003Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div
              className="cs_right_arrow cs_center"
              onClick={() => sliderRef.current.slickNext()}
            >
              <svg
                width={6}
                height={12}
                viewBox="0 0 6 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.00003 6.00003C6.00003 5.87216 5.95116 5.74416 5.85353 5.64653L0.853531 0.646531C0.658156 0.451156 0.341781 0.451156 0.146531 0.646531C-0.0487188 0.841906 -0.0488437 1.15828 0.146531 1.35353L4.79303 6.00003L0.146531 10.6465C-0.0488437 10.8419 -0.0488437 11.1583 0.146531 11.3535C0.341906 11.5488 0.658281 11.5489 0.853531 11.3535L5.85353 6.35353C5.95116 6.25591 6.00003 6.12791 6.00003 6.00003Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaleSection1;
