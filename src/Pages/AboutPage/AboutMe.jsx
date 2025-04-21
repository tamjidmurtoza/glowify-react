import React from "react";
import BreadCamp from "../../components/BreadCamp";
import BlogCta from "../BlogPage/BlogCta";
import Spacing from "../../components/Spacing";
import { PageTitle } from "../../Helper/PageTitle";
const breadcrumbData = [
  { label: "Home", url: "/home-v2", active: false },
  { label: "About Me", url: "about-me", active: true },
];
const aboutData = {
  image: "/assets/images/about_img_2.jpeg",
  role: "Chief executive officer",
  name: "Edward Marey",
  greeting: "Hi There! I'm Edward Marey",
  mission: `Our mission is to empower every individual, regardless of age, background, or gender, 
              to embrace their unique beauty, rediscover their inner glow, and feel confident in their skin. 
              We believe that beauty is not one-size-fits-all, and our diverse range of curated products 
              caters to your distinct needs.`,
  missionContinued: `With our carefully selected products and expert guidance, we're here to support you 
                       at every step, so you can truly shine and radiate with confidence.`,
  signatureImage: "/assets/images/sign.png",

  ctaData: {
    title: "Your beauty journey is our journey",
    subtitle:
      "Join us, explore our handpicked selection of products, and let's embark on a radiant experience together.",
    buttonText: "JOIN THE GLOWIFY COMMUNITY",
    buttonLink: "#",
    imageUrl: "/assets/images/cta_img_1.png",
  },
  experienceData: [
    {
      year: "2016",
      role: "Junior Officer",
      description:
        "We expanded our product range, focusing on curating premium beauty products.",
    },
    {
      year: "2019",
      role: "Senior Officer",
      description:
        "Glowify launched its own brand, ensuring quality and affordability.",
    },
    {
      year: "2020",
      role: "Manager",
      description:
        "We hit 1 million satisfied customers, a testament to our commitment to excellence.",
    },
    {
      year: "2021",
      role: "CEO",
      description:
        "Introduction of eco-friendly packaging, contributing to a sustainable future.",
    },
  ],
};

const AboutMe = () => {
  PageTitle("About-me");
  return (
    <>
      {/* Start Breadcamp */}
      <BreadCamp
        backgroundImage="/assets/images/login_banner.jpeg"
        title="About Me"
        breadcrumbItems={breadcrumbData}
        type={true}
      />
      {/* End Breadcamp */}
      <Spacing lg={70} md={120} />
      <div className="container">
        <div className="cs_about">
          <div className="cs_about_left">
            <img src={aboutData.image} alt="About" className="cs_radius_7" />
          </div>
          <div className="cs_about_right">
            <h3 className="cs_fs_24">{aboutData.role}</h3>
            <h2 className="cs_secondary_font cs_fs_36 cs_medium">
              {aboutData.greeting}
            </h2>
            <p className="mb-0">
              {aboutData.mission}
              <br />
              <br />
              {aboutData.missionContinued}
            </p>
            <img src={aboutData.signatureImage} alt="Signature" />
          </div>
        </div>
      </div>
      {/* Start Experience */}
      <Spacing lg={70} md={120} />
      <div className="container">
        <div className="cs_accent_light_bg">
          <Spacing lg={70} md={100} />
          <div className="text-center cs_fs_36 cs_medium cs_primary_color">
            My Experience
          </div>
          <Spacing lg={30} md={30} />
          <div className="cs_roadmap_list_wrap">
            <Spacing lg={30} md={30} />
            <div className="cs_roadmap_list_seperator">
              <div className="cs_roadmap_list_seperator_in" />
            </div>
            <ul className="cs_roadmap_list cs_mp_0">
              {aboutData.experienceData.map((item, index) => (
                <li key={index}>
                  <div className="cs_roadmap_item">
                    <span className="cs_shape_box">
                      <span />
                    </span>
                    <div className="cs_roadmap_year cs_accent_color cs_semibold cs_fs_36">
                      {item.year}
                    </div>
                    <div className="cs_roadmap_right">
                      <h3 className="cs_fs_24 cs_medium cs_secondary_color cs_secondary_font">
                        {item.role}
                      </h3>
                      <p className="mb-0 cs_light">{item.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Spacing lg={70} md={100} />
        </div>
      </div>
      {/* End Experience */}
      {/* Start CTA Section */}
      <Spacing lg={70} md={120} />
      <BlogCta data={aboutData.ctaData} bgColor={true} />
      <Spacing lg={70} md={120} />
      {/* End CTA Section */}
    </>
  );
};

export default AboutMe;
