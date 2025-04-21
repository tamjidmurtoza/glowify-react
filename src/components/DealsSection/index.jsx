import { useEffect, useState } from "react";
import SectionHeading from "../Heading/SectionHeading";
import Spacing from "../Spacing";
import { Link } from "react-router-dom";

import ProductCard3 from "../ProductCard/ProductCard3";

const DealsSection = ({ data }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
            <SectionHeading
              title={data.sectionTitle}
              variant={
                "cs_section_heading_title cs_fs_54 cs_semibold mb-0 d-flex align-items-center"
              }
            />
            <div className="cs_countdown_wrap">
              <p className="cs_countdown_title mb-0">{data.countdownTitle}</p>
              <div className="cs_countdown cs_style_1 cs_fs_24 cs_medium">
                <div
                  className="cs_countdown_box cs_accent_color cs_center"
                  title="Hour"
                >
                  <p className="cs_count_hours mb-0 cs_countdown_number">
                    {timeRemaining.hours.toString().padStart(2, "0")}
                  </p>
                </div>
                <div
                  className="cs_countdown_box cs_accent_color cs_center"
                  title="Minute"
                >
                  <p className="cs_count_minutes mb-0 cs_countdown_number">
                    {timeRemaining.minutes.toString().padStart(2, "0")}
                  </p>
                </div>
                <div
                  className="cs_countdown_box cs_accent_color cs_center"
                  title="Second"
                >
                  <p className="cs_count_seconds mb-0 cs_countdown_number">
                    {timeRemaining.seconds.toString().padStart(2, "0")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_section_heading_right">
            <Link
              className="cs_text_btn cs_accent_color cs_medium cs_fs_24"
              to={data.viewAllLink}
            >
              <span>{data.viewAllText}</span>
            </Link>
          </div>
        </div>
        <Spacing lg={50} md={60} />
        <div className="cs_grid_style_2">
          {data.products.map((product, index) => (
            <div className="cs_grid_col" key={index}>
              <ProductCard3 {...product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DealsSection;
