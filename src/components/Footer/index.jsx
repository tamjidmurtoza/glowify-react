import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Spacing from "../Spacing";

const Footer = () => {
  const newsletterData = {
    title: "Sign up for our newsletter",
    subtitle:
      "to receive the latest beauty tips, exclusive offers, and updates.",
    backgroundImage: "/assets/images/newsletter_1.jpeg",
    placeholder: "Enter your email address ...",
    buttonText: "SUBSCRIBE",
  };

  const footerData = {
    contactInfo: {
      phone: "+1 (555) 123-4567",
      email: "cs@glowify.com",
      address: "123 Anywhere Street, Anytown USA",
    },
    links: {
      myAccount: [
        "Sign In",
        "New Bag",
        "My Wishlist",
        "Track My Order",
        "Help",
      ],
      information: [
        "Delivery Information",
        "Blog",
        "FAQ",
        "Contact Us",
        "Sitemap",
      ],
      customerServices: [
        "Shipping & Returns",
        "Secure Shopping",
        "International Shipping",
        "Affiliates",
        "Contact",
      ],
      paymentShipping: [
        "Terms of Use",
        "Payment Methods",
        "Shipping Guide",
        "Locations We Ship To",
        "Estimated Delivery Time",
      ],
    },
    footerLogo: "/assets/images/footer_logo.svg",
    bottomText: "2024 Glowify - All Rights Reserved",
  };

  return (
    <>
      <div className="container">
        <div
          className="cs_newsletter cs_style_1 cs_bg_filed cs_radius_16"
          style={{ backgroundImage: `url(${newsletterData.backgroundImage})` }}
        >
          <div className="cs_newsletter_in">
            <h2 className="cs_newsletter_title cs_fs_54 cs_semibold">
              {newsletterData.title}
            </h2>
            <p className="cs_newsletter_subtitle cs_fs_18">
              {newsletterData.subtitle}
            </p>
            <form action="#" className="cs_subscribe_form">
              <input type="text" placeholder={newsletterData.placeholder} />
              <button className="cs_btn cs_style_1 cs_color_1 cs_fs_18 cs_medium">
                {newsletterData.buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="cs_footer cs_style_1 cs_primary_color cs_light cs_white_bg">
        <Spacing lg={80} md={150} />
        <div className="container">
          <div className="text-center">
            <img src={footerData.footerLogo} alt="Logo" />
          </div>
          <div className="cs_footer_row">
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_widget_title cs_secondary_font cs_semibold cs_fs_16 text-uppercase">
                  CONTACT INFORMATION
                </h2>
                <ul className="cs_contact_widget cs_mp_0">
                  <li>
                    <i>
                      <FaPhoneAlt />
                    </i>
                    <Link to={`tel:${footerData.contactInfo.phone}`}>
                      {footerData.contactInfo.phone}
                    </Link>
                  </li>
                  <li>
                    <i>
                      <MdEmail />
                    </i>
                    <Link to={`mailto:${footerData.contactInfo.email}`}>
                      {footerData.contactInfo.email}
                    </Link>
                  </li>
                  <li>
                    <i>
                      <IoLocationSharp />
                    </i>
                    {footerData.contactInfo.address}
                  </li>
                </ul>
              </div>
            </div>

            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_widget_title cs_secondary_font cs_semibold cs_fs_16 text-uppercase">
                  MY ACCOUNT
                </h2>
                <ul className="cs_menu_widget cs_mp_0">
                  {footerData.links.myAccount.map((link, index) => (
                    <li key={index}>
                      <Link to="#">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_widget_title cs_secondary_font cs_semibold cs_fs_16 text-uppercase">
                  INFORMATION
                </h2>
                <ul className="cs_menu_widget cs_mp_0">
                  {footerData.links.information.map((link, index) => (
                    <li key={index}>
                      <Link to="#">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_widget_title cs_secondary_font cs_semibold cs_fs_16 text-uppercase">
                  CUSTOMER SERVICES
                </h2>
                <ul className="cs_menu_widget cs_mp_0">
                  {footerData.links.customerServices.map((link, index) => (
                    <li key={index}>
                      <Link to="#">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_widget_title cs_secondary_font cs_semibold cs_fs_16 text-uppercase">
                  PAYMENT & SHIPPING
                </h2>
                <ul className="cs_menu_widget cs_mp_0">
                  {footerData.links.paymentShipping.map((link, index) => (
                    <li key={index}>
                      <Link to="#">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="cs_bottom_footer d-flex justify-content-center cs_fs_14">
            <p>{footerData.bottomText}</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
