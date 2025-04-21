import { Link } from "react-router-dom";

const footerData = {
  newsletter: {
    title: "Subscribe to Our Newsletter",
    placeholder: "Enter your email address ...",
    buttonText: "SUBSCRIBE",
  },
  footerWidgets: [
    {
      title: "MY ACCOUNT",
      links: [
        { name: "Sign In", url: "/login" },
        { name: "New Bag", url: "/blog" },
        { name: "My Wishlist", url: "/wishlist" },
        { name: "Track My Order", url: "#" },
        { name: "Help", url: "#" },
      ],
    },
    {
      title: "INFORMATION",
      links: [
        { name: "Delivery Information", url: "#" },
        { name: "Blog", url: "/blog" },
        { name: "FAQ", url: "#" },
        { name: "Contact Us", url: "/contact" },
        { name: "Sitemap", url: "#" },
      ],
    },
    {
      title: "CUSTOMER SERVICES",
      links: [
        { name: "Shipping & Returns", url: "#" },
        { name: "Secure Shopping", url: "#" },
        { name: "International Shipping", url: "#" },
        { name: "Affiliates", url: "#" },
        { name: "Contact", url: "#" },
      ],
    },
    {
      title: "PAYMENT & SHIPPING",
      links: [
        { name: "Terms of Us", url: "#" },
        { name: "Payment Methods", url: "#" },
        { name: "Shipping Guide", url: "#" },
        { name: "Locations We Ship To", url: "#" },
        { name: "Estimated Delivery Time", url: "#" },
      ],
    },
  ],
  contactInfo: {
    phone: "+1 (555) 123-4567",
    email: "cs@glowify.com",
  },
  paymentImg: "/assets/images/payment.svg",
  bottomLinks: [
    { name: "Privacy Policy", url: "#" },
    { name: "Terms & Condition", url: "#" },
  ],
  copyright: "Copyright © 2024 Glowify. All Rights Reserved.",
};

const Footer2 = () => {
  return (
    <footer className="cs_footer cs_style_2 cs_type_1 cs_primary_bg cs_white_color cs_light">
      <div className="container">
        <div className="cs_newsletter cs_style_3">
          <h2 className="cs_newsletter_title cs_fs_36 cs_medium mb-0 cs_white_color cs_secondary_font">
            {footerData.newsletter.title}
          </h2>
          <form action="#" className="cs_subscribe_form">
            <input
              type="text"
              placeholder={footerData.newsletter.placeholder}
            />
            <button className="cs_btn cs_style_1 cs_fs_18 cs_medium">
              {footerData.newsletter.buttonText}
            </button>
          </form>
        </div>
        <div className="cs_footer_row">
          {footerData.footerWidgets.map((widget, index) => (
            <div className="cs_footer_col" key={index}>
              <div className="cs_footer_widget">
                <h2 className="cs_widget_title cs_secondary_font cs_semibold cs_fs_16 text-uppercase cs_white_color">
                  {widget.title}
                </h2>
                <ul className="cs_menu_widget cs_mp_0">
                  {widget.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link to={link.url}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <h2 className="cs_widget_title cs_secondary_font cs_semibold cs_fs_16 text-uppercase cs_white_color">
                PAYMENT
              </h2>
              <div className="cs_payment_img">
                <img src={footerData.paymentImg} alt="Payment" />
              </div>
            </div>
            <div className="cs_footer_widget">
              <h2 className="cs_widget_title cs_secondary_font cs_semibold cs_fs_16 text-uppercase cs_white_color">
                CONTACT INFORMATION
              </h2>
              <ul className="cs_contact_widget cs_mp_0">
                <li>
                  <i>
                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.2324 13.9201C16.0242 12.8867 14.798 12.2608 13.6047 13.2926L12.8921 13.9162C12.3707 14.3689 11.4014 16.484 7.65346 12.1726C3.90634 7.86665 6.1362 7.19621 6.65834 6.74743L7.37483 6.12304C8.56195 5.08889 8.11395 3.78704 7.25776 2.44694L6.74107 1.63524C5.88098 0.29826 4.94439 -0.579789 3.75415 0.452797L3.11102 1.01475C2.58498 1.39797 1.11454 2.64363 0.757853 5.01007C0.328585 7.84948 1.68273 11.101 4.78517 14.6686C7.88371 18.2378 10.9175 20.0306 13.7912 19.9993C16.1795 19.9736 17.6219 18.692 18.073 18.2261L18.7184 17.6633C19.9056 16.6315 19.168 15.581 17.959 14.5453L17.2324 13.9201Z"
                          fill="currentColor"
                        />
                      </svg>
                    </svg>
                  </i>
                  <Link to={`tel:${footerData.contactInfo.phone}`}>
                    {footerData.contactInfo.phone}
                  </Link>
                </li>
                <li>
                  <i>
                    <svg width={18} height={14} viewBox="0 0 18 14" fill="none">
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
        <div className="cs_bottom_footer d-flex cs_fs_14">
          <ul className="cs_footer_links cs_mp_0">
            {footerData.bottomLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <p className="cs_copyright mb-0">{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
