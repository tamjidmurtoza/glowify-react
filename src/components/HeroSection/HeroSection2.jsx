import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeroSection2 = ({ data }) => {
  const [timeRemaining, setTimeRemaining] = useState(
    data.cardSection.countdownDuration
  );

  useEffect(() => {
    // Parse the countdown duration (in the format "DD:HH:MM:SS")
    const [days, hours, minutes, seconds] = data.cardSection.countdownDuration
      .split(":")
      .map(Number);

    // Calculate total time in seconds
    let totalSeconds = days * 86400 + hours * 3600 + minutes * 60 + seconds;

    // Timer to decrease total seconds every second
    const countdownInterval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds -= 1;

        const updatedDays = Math.floor(totalSeconds / 86400);
        const updatedHours = Math.floor((totalSeconds % 86400) / 3600);
        const updatedMinutes = Math.floor((totalSeconds % 3600) / 60);
        const updatedSeconds = totalSeconds % 60;

        setTimeRemaining({
          days: updatedDays,
          hours: updatedHours,
          minutes: updatedMinutes,
          seconds: updatedSeconds,
        });
      } else {
        clearInterval(countdownInterval); // Stop the timer when it reaches 0
      }
    }, 1000);

    return () => clearInterval(countdownInterval); // Cleanup interval on unmount
  }, [data.cardSection.countdownDuration]);

  return (
    <section>
      {/* Hero Section */}
      <div
        className="cs_hero cs_style_3 cs_bg_filed cs_center"
        style={{ backgroundImage: `url(${data.heroSection.backgroundImage})` }}
      >
        <div className="container">
          <div className="cs_hero_text">
            <h1 className="cs_hero_title cs_fs_100">
              {data.heroSection.title}
            </h1>
            <p className="cs_hero_subtitle cs_fs_24">
              {data.heroSection.subtitle}
            </p>
            <Link
              to={data.heroSection.button.link}
              className="cs_btn cs_style_1 cs_fs_18 cs_medium"
            >
              {data.heroSection.button.text}
            </Link>
          </div>
        </div>
      </div>

      {/* Card Section with Countdown */}
      <div className="container">
        <div className="cs_card cs_style_1 cs_white_bg">
          <div className="cs_card_img">
            <img src={data.cardSection.imageSrc} alt="Thumb" />
          </div>
          <div className="cs_card_right">
            <h2 className="cs_card_title cs_fs_54 cs_semibold">
              {data.cardSection.title}
            </h2>
            <p className="cs_card_subtitle cs_fs_24">
              {data.cardSection.subtitle}
            </p>
            <div className="cs_countdown cs_style_1 cs_fs_36 cs_white_color cs_accent_bg cs_bold cs_radius_10 cs_center">
              <div
                className="cs_countdown_box cs_accent_bg cs_white_color cs_center"
                title="Day"
                style={{ borderLeftWidth: 0 }} // Left side width set to 0
              >
                <p className="cs_count_days mb-0 cs_countdown_number">
                  {timeRemaining.days}
                </p>
                <p className="cs_count_title cs_fs_16">Days</p>
              </div>

              <div
                className="cs_countdown_box cs_accent_bg cs_white_color cs_center"
                title="Hour"
                style={{ borderLeftWidth: 0 }} // Left side width set to 0
              >
                <p className="mb-0 cs_countdown_number">
                  {timeRemaining.hours}
                </p>
                <p className="cs_count_title cs_fs_16">Hours</p>
              </div>
              <div
                className="cs_countdown_box cs_accent_bg cs_white_color cs_center"
                title="Minute"
                style={{ borderLeftWidth: 0 }} // Left side width set to 0
              >
                <p className="mb-0 cs_countdown_number">
                  {timeRemaining.minutes}
                </p>
                <p className="cs_count_title cs_fs_16">Minutes</p>
              </div>
              <div
                className="cs_countdown_box cs_accent_bg cs_white_color cs_center"
                title="Second"
                style={{ borderLeftWidth: 0 }} // Left side width set to 0
              >
                <p className="mb-0 cs_countdown_number">
                  {timeRemaining.seconds}
                </p>
                <p className="cs_count_title cs_fs_16">Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
