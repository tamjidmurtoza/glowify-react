import { useRef } from "react";
import BreadCamp from "../../components/BreadCamp";
import Slider from "react-slick";
import BlogCta from "../BlogPage/BlogCta";
import Spacing from "../../components/Spacing";
import { PageTitle } from "../../Helper/PageTitle";

const breadcrumbData = [
  { label: "Home", url: "/home-v2", active: false },
  { label: "About", url: "about", active: true },
];

const aboutData = {
  imageUrl: "/assets/images/about_img_1.jpeg",
  title: "ABOUT RADIANT JOURNEY",
  description: `We're more than just a beauty e-commerce platform; we're your
  trusted partner on your journey to radiance. Our mission is to empower every
  individual, regardless of age, background, or gender, to embrace their unique
  beauty, rediscover their inner glow, and feel confident in their skin. We believe
  that beauty is not one-size-fits-all, and our diverse range of curated products
  caters to your distinct needs and preferences.
<br>
<br>
  With our carefully selected products and expert guidance, we're here to support
  you at every step, so you can truly shine and radiate with the confidence that
  comes from embracing your own, one-of-a-kind beauty.`,
  sliderData: [
    {
      icon: "/assets/images/icons/value_icon_1.svg",
      title: "Quality Assurance",
      subtitle:
        "We're committed to delivering beauty products of the highest quality, rigorously tested for safety and effectiveness.",
    },
    {
      icon: "/assets/images/icons/value_icon_1.svg",
      title: "Customer Satisfaction",
      subtitle:
        "Your happiness is our success. We prioritize your satisfaction and continuously seek ways to enhance your experience.",
    },
    {
      icon: "/assets/images/icons/value_icon_1.svg",
      title: "Trust and Reliability",
      subtitle:
        "We've built a reputation for trustworthiness and reliability. Count on us for your beauty needs.",
    },
    {
      icon: "/assets/images/icons/value_icon_1.svg",
      title: "Personalization",
      subtitle:
        "Beauty is personal. We believe in tailoring our offerings to meet your unique preferences and needs.",
    },
  ],

  ctaData: {
    title: "Your beauty journey is our journey",
    subtitle:
      "Join us, explore our handpicked selection of products, and let's embark on a radiant experience together.",
    buttonText: "JOIN THE GLOWIFY COMMUNITY",
    buttonLink: "#",
    imageUrl: "/assets/images/cta_img_1.png",
  },
  milestonesData: [
    {
      year: "2010",
      title: "Inception",
      description:
        "Glowify's humble beginnings, starting as a small online store with a passion for beauty.",
    },
    {
      year: "2015",
      title: "Expansion",
      description:
        "We expanded our product range, focusing on curating premium beauty products.",
    },
    {
      year: "2018",
      title: "Brand Launch",
      description:
        "Glowify launched its own brand, ensuring quality and affordability.",
    },
    {
      year: "2020",
      title: "1M Customers",
      description:
        "We hit 1 million satisfied customers, a testament to our commitment to excellence.",
    },
    {
      year: "2022",
      title: "Eco Packaging",
      description:
        "Introduction of eco-friendly packaging, contributing to a sustainable future.",
    },
  ],
};

const About = () => {
  PageTitle("About");
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
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

  return (
    <>
      {/* Start Breadcamp */}
      <BreadCamp
        backgroundImage="/assets/images/breadcamp_bg_5.jpeg"
        title="About Glowify"
        breadcrumbItems={breadcrumbData}
        type={true}
      />
      {/* End Breadcamp */}
      {/* Start About Section */}
      <section>
        <Spacing lg={70} md={120} />
        <div className="container">
          <div className="cs_about">
            <div className="cs_about_left">
              <img
                src={aboutData.imageUrl}
                alt="About Us"
                className="cs_radius_7"
              />
            </div>
            <div className="cs_about_right">
              <h2 className="cs_secondary_font cs_fs_36 cs_medium">
                {aboutData.title}
              </h2>
              <p
                className="mb-0"
                dangerouslySetInnerHTML={{ __html: aboutData.description }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
      {/* Start Our Values */}
      <section>
        <Spacing lg={70} md={120} />
        <div className="container">
          <div className="cs_slider cs_style_1 cs_slider_gap_20">
            <div className="cs_slider_heading_1">
              <div className="cs_fs_36 cs_medium cs_primary_color">
                OUR VALUES
              </div>
              <div className="cs_slider_arrows cs_style_1 cs_type_1 cs_mobile_hide">
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
            <Slider {...settings} ref={sliderRef}>
              {aboutData.sliderData.map((slide, index) => (
                <div className="cs_slider" key={index}>
                  <div className="cs_value_box cs_radius_8">
                    <div className="cs_value_box_icon">
                      <img src={slide.icon} alt="Icon" />
                    </div>
                    <h2 className="cs_value_box_title cs_secondary_font cs_fs_24 cs_medium cs_secondary_color">
                      {slide.title}
                    </h2>
                    <p className="cs_value_box_subtitle mb-0">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="cs_pagination cs_style_1 cs_mobile_show" />
          </div>
        </div>
      </section>
      {/* End Our Values */}
      {/* Start Road Map */}
      <Spacing lg={70} md={120} />
      <div className="container">
        <div className="cs_accent_light_bg">
          <Spacing lg={70} md={100} />
          <div className="text-center cs_fs_36 cs_medium cs_primary_color">
            MILESTONES
          </div>
          <Spacing lg={30} md={30} />
          <div className="cs_roadmap_list_wrap">
            <Spacing lg={10} md={30} />
            <div className="cs_roadmap_list_seperator">
              <div className="cs_roadmap_list_seperator_in" />
            </div>
            <ul className="cs_roadmap_list cs_mp_0">
              {aboutData.milestonesData.map((milestone, index) => (
                <li key={index}>
                  <div className="cs_roadmap_item">
                    <span className="cs_shape_box">
                      <span />
                    </span>
                    <div className="cs_roadmap_year cs_accent_color cs_semibold cs_fs_36">
                      {milestone.year}
                    </div>
                    <div className="cs_roadmap_right">
                      <h3 className="cs_fs_24 cs_medium cs_secondary_color cs_secondary_font">
                        {milestone.title}
                      </h3>
                      <p className="mb-0 cs_light">{milestone.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Spacing lg={70} md={100} />
        </div>
      </div>
      {/* End Road Map */}
      {/* Start CTA Section */}

      <Spacing lg={70} md={120} />
      <BlogCta data={aboutData.ctaData} bgColor={true} />
      <Spacing lg={70} md={120} />
      {/* End CTA Section */}
    </>
  );
};

export default About;
