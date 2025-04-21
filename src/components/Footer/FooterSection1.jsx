import { Link } from "react-router-dom";

const FooterSection1 = () => {
  const footerData = {
    newsletterData: {
      title:
        "Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and beauty tips.",
      backgroundImage: "/assets/images/newsletter_2.jpeg",
      placeholder: "Enter your email address ...",
      buttonText: "SUBSCRIBE",
    },

    sections: [
      {
        title: "MY ACCOUNT",
        links: [
          { text: "Sign In", url: "/login" },
          { text: "New Bag", url: "/blog" },
          { text: "My Wishlist", url: "/wishlist" },
          { text: "Track My Order", url: "#" },
          { text: "Help", url: "#" },
        ],
      },
      {
        title: "INFORMATION",
        links: [
          { text: "Delivery Information", url: "#" },
          { text: "Blog", url: "/blog" },
          { text: "FAQ", url: "#" },
          { text: "Contact Us", url: "/contact" },
          { text: "Sitemap", url: "#" },
        ],
      },
      {
        title: "CUSTOMER SERVICES",
        links: [
          { text: "Shipping & Returns", url: "#" },
          { text: "Secure Shopping", url: "#" },
          { text: "International Shipping", url: "#" },
          { text: "Affiliates", url: "#" },
          { text: "Contact", url: "#" },
        ],
      },
      {
        title: "PAYMENT & SHIPPING",
        links: [
          { text: "Terms of Us", url: "#" },
          { text: "Payment Methods", url: "#" },
          { text: "Shipping Guide", url: "#" },
          { text: "Locations We Ship To", url: "#" },
          { text: "Estimated Delivery Time", url: "#" },
        ],
      },
    ],
    paymentImage: "/assets/images/payment.svg",
    contactInfo: {
      phone: "+1 (555) 123-4567",
      email: "cs@glowify.com",
    },
    bottomLinks: [
      { text: "Privacy Policy", url: "#" },
      { text: "Terms & Condition", url: "#" },
    ],
    copyright: "Copyright © 2023 Glowify. All Rights Reserved.",
  };

  return (
    <>
      <div className="cs_newsletter_2_wrap">
        <div className="container">
          <div
            className="cs_newsletter cs_style_2 cs_bg_filed cs_radius_16 text-center"
            style={{
              backgroundImage: `url(${footerData.newsletterData.backgroundImage})`,
            }}
          >
            <div className="cs_newsletter_in">
              <h2 className="cs_newsletter_title cs_fs_54 cs_semibold">
                {footerData.newsletterData.title}
              </h2>
              <form action="#" className="cs_subscribe_form">
                <input
                  type="text"
                  placeholder={footerData.newsletterData.placeholder}
                />
                <button className="cs_btn cs_style_1 cs_fs_18 cs_medium">
                  {footerData.newsletterData.buttonText}
                </button>
              </form>
            </div>
            <div className="cs_star_shape_1 cs_accent_strong_color">
              <svg
                width={29}
                height={29}
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.55475 13.7329L4.71528 12.5414C6.58887 12.012 8.29557 11.0096 9.67204 9.63019C11.0485 8.25073 12.0487 6.54034 12.5769 4.66269L13.7659 0.493151C13.8257 0.347273 13.9274 0.222502 14.0581 0.134693C14.1888 0.0468833 14.3426 0 14.5 0C14.6574 0 14.8112 0.0468833 14.9419 0.134693C15.0726 0.222502 15.1743 0.347273 15.2341 0.493151L16.4231 4.66269C16.9513 6.54034 17.9515 8.25073 19.328 9.63019C20.7044 11.0096 22.4111 12.012 24.2847 12.5414L28.4452 13.7329C28.605 13.7783 28.7456 13.8748 28.8457 14.0075C28.9458 14.1403 29 14.3022 29 14.4686C29 14.635 28.9458 14.7969 28.8457 14.9297C28.7456 15.0624 28.605 15.1589 28.4452 15.2043L24.2847 16.3958C22.4111 16.9252 20.7044 17.9276 19.328 19.307C17.9515 20.6865 16.9513 22.3969 16.4231 24.2745L15.2341 28.444C15.1888 28.6041 15.0926 28.745 14.9601 28.8454C14.8276 28.9457 14.6661 29 14.5 29C14.3339 29 14.1724 28.9457 14.0399 28.8454C13.9074 28.745 13.8112 28.6041 13.7659 28.444L12.5769 24.2745C12.0487 22.3969 11.0485 20.6865 9.67204 19.307C8.29557 17.9276 6.58887 16.9252 4.71528 16.3958L0.55475 15.2043C0.395 15.1589 0.2544 15.0624 0.154284 14.9297C0.0541674 14.7969 0 14.635 0 14.4686C0 14.3022 0.0541674 14.1403 0.154284 14.0075C0.2544 13.8748 0.395 13.7783 0.55475 13.7329Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="cs_star_shape_2 cs_accent_strong_color">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.459103 11.3652L3.9023 10.3791C5.45286 9.94098 6.8653 9.11143 8.00445 7.96981C9.1436 6.82819 9.97135 5.4127 10.4085 3.85878L11.3925 0.408125C11.4419 0.287398 11.5261 0.18414 11.6343 0.11147C11.7425 0.0388 11.8698 0 12 0C12.1302 0 12.2575 0.0388 12.3657 0.11147C12.4739 0.18414 12.5581 0.287398 12.6075 0.408125L13.5915 3.85878C14.0286 5.4127 14.8564 6.82819 15.9956 7.96981C17.1347 9.11143 18.5471 9.94098 20.0977 10.3791L23.5409 11.3652C23.6731 11.4028 23.7895 11.4826 23.8723 11.5924C23.9552 11.7023 24 11.8363 24 11.974C24 12.1117 23.9552 12.2457 23.8723 12.3556C23.7895 12.4655 23.6731 12.5453 23.5409 12.5829L20.0977 13.569C18.5471 14.0071 17.1347 14.8366 15.9956 15.9782C14.8564 17.1198 14.0286 18.5353 13.5915 20.0892L12.6075 23.5399C12.57 23.6724 12.4904 23.789 12.3808 23.872C12.2711 23.9551 12.1374 24 12 24C11.8626 24 11.7289 23.9551 11.6192 23.872C11.5096 23.789 11.43 23.6724 11.3925 23.5399L10.4085 20.0892C9.97135 18.5353 9.1436 17.1198 8.00445 15.9782C6.8653 14.8366 5.45286 14.0071 3.9023 13.569L0.459103 12.5829C0.326896 12.5453 0.210537 12.4655 0.127682 12.3556C0.0448274 12.2457 -7.7486e-07 12.1117 -7.7486e-07 11.974C-7.7486e-07 11.8363 0.0448274 11.7023 0.127682 11.5924C0.210537 11.4826 0.326896 11.4028 0.459103 11.3652Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="cs_star_shape_3 cs_accent_strong_color">
              <svg
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.975594 24.1509L8.29239 22.0555C11.5873 21.1246 14.5888 19.3618 17.0095 16.9358C19.4302 14.5099 21.1891 11.502 22.1181 8.1999L24.209 0.867266C24.3141 0.610722 24.493 0.391297 24.7229 0.236873C24.9528 0.0824499 25.2233 0 25.5 0C25.7767 0 26.0472 0.0824499 26.2771 0.236873C26.507 0.391297 26.6859 0.610722 26.791 0.867266L28.8819 8.1999C29.8109 11.502 31.5698 14.5099 33.9905 16.9358C36.4112 19.3618 39.4127 21.1246 42.7076 22.0555L50.0244 24.1509C50.3053 24.2309 50.5526 24.4004 50.7287 24.6339C50.9047 24.8674 51 25.1521 51 25.4448C51 25.7375 50.9047 26.0221 50.7287 26.2556C50.5526 26.4891 50.3053 26.6587 50.0244 26.7386L42.7076 28.834C39.4127 29.765 36.4112 31.5278 33.9905 33.9537C31.5698 36.3797 29.8109 39.3876 28.8819 42.6897L26.791 50.0223C26.7113 50.3038 26.5421 50.5516 26.3091 50.7281C26.0761 50.9045 25.792 51 25.5 51C25.208 51 24.9239 50.9045 24.6909 50.7281C24.4579 50.5516 24.2887 50.3038 24.209 50.0223L22.1181 42.6897C21.1891 39.3876 19.4302 36.3797 17.0095 33.9537C14.5888 31.5278 11.5873 29.765 8.29239 28.834L0.975594 26.7386C0.694654 26.6587 0.447391 26.4891 0.271325 26.2556C0.0952584 26.0221 -1.43051e-06 25.7375 -1.43051e-06 25.4448C-1.43051e-06 25.1521 0.0952584 24.8674 0.271325 24.6339C0.447391 24.4004 0.694654 24.2309 0.975594 24.1509Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <footer className="cs_footer cs_style_2 cs_primary_bg cs_white_color cs_light">
        <div className="container">
          <div className="cs_footer_row">
            {footerData.sections.map((section, index) => (
              <div className="cs_footer_col" key={index}>
                <div className="cs_footer_widget">
                  <h2 className="cs_widget_title cs_secondary_font cs_semibold cs_fs_16 text-uppercase cs_white_color">
                    {section.title}
                  </h2>
                  <ul className="cs_menu_widget cs_mp_0">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <Link href={link.url}>{link.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Payment Section */}
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_widget_title cs_secondary_font cs_semibold cs_fs_16 text-uppercase cs_white_color">
                  PAYMENT
                </h2>
                <div className="cs_payment_img">
                  <img src={footerData.paymentImage} alt="Payment" />
                </div>
              </div>
              {/* Contact Information */}
              <div className="cs_footer_widget">
                <h2 className="cs_widget_title cs_secondary_font cs_semibold cs_fs_16 text-uppercase cs_white_color">
                  CONTACT INFORMATION
                </h2>
                <ul className="cs_contact_widget cs_mp_0">
                  <li>
                    <i>
                      {/* Phone Icon */}
                      <svg width={20} height={20} viewBox="0 0 20 20">
                        <path
                          d="M17.2324 13.9201C16.0242 12.8867 14.798 12.2608 13.6047 13.2926L12.8921 13.9162C12.3707 14.3689 11.4014 16.484 7.65346 12.1726C3.90634 7.86665 6.1362 7.19621 6.65834 6.74743L7.37483 6.12304C8.56195 5.08889 8.11395 3.78704 7.25776 2.44694L6.74107 1.63524C5.88098 0.29826 4.94439 -0.579789 3.75415 0.452797L3.11102 1.01475C2.58498 1.39797 1.11454 2.64363 0.757853 5.01007C0.328585 7.84948 1.68273 11.101 4.78517 14.6686C7.88371 18.2378 10.9175 20.0306 13.7912 19.9993C16.1795 19.9736 17.6219 18.692 18.073 18.2261L18.7184 17.6633C19.9056 16.6315 19.168 15.581 17.959 14.5453L17.2324 13.9201Z"
                          fill="currentColor"
                        />
                      </svg>
                    </i>
                    <Link to={`tel:${footerData.contactInfo.phone}`}>
                      {footerData.contactInfo.phone}
                    </Link>
                  </li>
                  <li>
                    <i>
                      {/* Email Icon */}
                      <svg
                        width={18}
                        height={14}
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.29341 13.0642C1.54501 13.1854 1.82301 13.2502 2.10761 13.2502H15.875C16.0806 13.2502 16.2828 13.2164 16.4742 13.1518L11.0422 7.47281C10.7594 7.74421 10.5068 7.98641 10.296 8.18781C9.57121 8.88121 8.42881 8.88121 7.70401 8.18781C7.45421 7.94901 7.14441 7.65181 6.79501 7.31641L1.29341 13.0642Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.3198 1.42969C16.5204 2.20029 13.9042 4.72209 11.9436 6.60649L17.461 12.3747C17.6484 12.0777 17.75 11.7315 17.75 11.3747V2.62469C17.75 2.18669 17.5968 1.76449 17.3198 1.42969Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.671405 1.41992C0.389005 1.75632 0.232605 2.18272 0.232605 2.62532V11.3753C0.232605 11.6551 0.295205 11.9285 0.412605 12.1767L5.8936 6.45032C3.9758 4.60612 1.506 2.22492 0.671405 1.41992Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.8044 0.7748L8.568 7.2844C8.8096 7.5156 9.1904 7.5156 9.432 7.2844C10.9856 5.7982 14.8192 2.1044 16.1956 0.7776C16.0904 0.7594 15.9832 0.75 15.875 0.75H2.1076C2.0054 0.75 1.904 0.7584 1.8044 0.7748Z"
                          fill="currentColor"
                        />
                      </svg>
                    </i>
                    <Link to={`mailto:${footerData.contactInfo.email}`}>
                      {footerData.contactInfo.email}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="cs_bottom_footer d-flex cs_fs_14">
            <ul className="cs_footer_links cs_mp_0">
              {footerData.bottomLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
            <p className="cs_copyright mb-0">{footerData.copyright}</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection1;
