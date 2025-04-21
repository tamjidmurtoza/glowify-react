import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Button from "../Buttons";
import Spacing from "../Spacing";
import ProductCard from "../ProductCard";

const SaleSection = ({ data }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
          slidesToShow: 2,
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

  useEffect(() => {
    // Parse the countdown duration (in the format "HH:MM:SS")
    const [hours, minutes, seconds] = data.countdownDuration
      .split(":")
      .map(Number);

    // Calculate total time in seconds
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    // Timer to decrease total seconds every second
    const countdownInterval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds -= 1;

        const updatedHours = Math.floor(totalSeconds / 3600);
        const updatedMinutes = Math.floor((totalSeconds % 3600) / 60);
        const updatedSeconds = totalSeconds % 60;

        setTimeRemaining({
          hours: updatedHours,
          minutes: updatedMinutes,
          seconds: updatedSeconds,
        });
      } else {
        clearInterval(countdownInterval); // Stop the timer when it reaches 0
      }
    }, 1000);

    return () => clearInterval(countdownInterval); // Cleanup interval on unmount
  }, [data.countdownDuration]);

  return (
    <>
      <div className="container">
        <div className="cs_section_heading cs_style_1">
          <div className="cs_section_heading_in">
            <h3 className="cs_section_heading_title cs_fs_54 cs_semibold mb-0 d-flex align-items-center">
              {data.headingTitle.textStart}
              <svg
                width={31}
                height={52}
                viewBox="0 0 31 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0632 51.8766C10.7511 52.1706 11.5509 51.9252 11.9527 51.2905L30.2339 22.2436C30.53 21.7735 30.5479 21.1798 30.28 20.6949C30.0122 20.2084 29.5004 19.9063 28.9455 19.9063H16.7446L21.2822 1.89838C21.4652 1.17089 21.0947 0.419528 20.4059 0.123473C19.7216 -0.171058 18.9167 0.0758405 18.5164 0.709591L0.235189 29.7565C-0.0608663 30.2266 -0.0787415 30.8202 0.189079 31.3052C0.456899 31.7917 0.968673 32.0937 1.52361 32.0937H13.7245L9.18691 50.1017C9.0039 50.8293 9.3743 51.5806 10.0632 51.8766Z"
                  fill="currentColor"
                />
              </svg>
              {data.headingTitle.textEnd}
            </h3>
          </div>
          <div className="cs_section_heading_right">
            <h3 className="cs_fs_16 mb-0 cs_normal cs_secondary_font">
              {data.saleEndText}
            </h3>
            <div className="cs_countdown cs_style_1 cs_fs_36">
              <div
                className="cs_countdown_box cs_accent_bg cs_white_color cs_center"
                title="Hour"
              >
                <p className="cs_count_hours mb-0 cs_countdown_number">
                  {timeRemaining.hours.toString().padStart(2, "0")}
                </p>
              </div>
              <div
                className="cs_countdown_box cs_accent_bg cs_white_color cs_center"
                title="Minute"
              >
                <p className="cs_count_minutes mb-0 cs_countdown_number">
                  {timeRemaining.minutes.toString().padStart(2, "0")}
                </p>
              </div>
              <div
                className="cs_countdown_box cs_accent_bg cs_white_color cs_center"
                title="Second"
              >
                <p className="cs_count_seconds mb-0 cs_countdown_number">
                  {timeRemaining.seconds.toString().padStart(2, "0")}
                </p>
              </div>
            </div>
            <Button
              btnText={data.buttonText}
              variant={"cs_text_btn cs_accent_color cs_medium cs_fs_24"}
              btnUrl={data.buttonLink}
            />
          </div>
        </div>
        <Spacing lg={50} md={60} />

        <div className="cs_slider cs_style_1 cs_slider_gap_20 cs_show_arrow_hover">
          <Slider {...settings} ref={sliderRef}>
            {data.products.map((product, index) => (
              <div className="cs_slider" key={index}>
                <ProductCard {...product} />
              </div>
            ))}
          </Slider>

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

export default SaleSection;
