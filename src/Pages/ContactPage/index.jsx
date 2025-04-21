import React from "react";
import BreadCamp from "../../components/BreadCamp";
import Spacing from "../../components/Spacing";
import { Link } from "react-router-dom";
import { PageTitle } from "../../Helper/PageTitle";
const breadcrumbData = [
  { label: "Home", url: "/home-v2", active: false },
  { label: "Contact", url: "contact", active: true },
];
const contactData = {
  title: "GET IN TOUCH",
  description:
    "Have a question or need assistance? Feel free to reach out to us by filling out the contact form below. We'll get back to you as soon as possible.",
  formFields: [
    { label: "Name", type: "text", required: true, className: "col-lg-6" },
    {
      label: "Email Address",
      type: "email",
      required: true,
      className: "col-lg-6",
    },
    { label: "Subject", type: "text", required: true, className: "col-lg-12" },
    {
      label: "Message",
      type: "textarea",
      required: true,
      className: "col-lg-12",
    },
  ],
  buttonText: "SEND MESSAGE",
  contactInfo: {
    title: "CONTACT INFORMATION",
    description: "For immediate assistance, you can contact us directly:",
    items: [
      {
        icon: "/assets/images/icons/contact_icon_1.svg",
        label: "Customer Support",
        contact: "support@glowify.com",
        link: "mailto:support@glowify.com",
      },
      {
        icon: "/assets/images/icons/contact_icon_2.svg",
        label: "Sales Inquiries",
        contact: "sales@glowify.com",
        link: "mailto:sales@glowify.com",
      },
      {
        icon: "/assets/images/icons/contact_icon_3.svg",
        label: "Phone",
        contact: "+1-800-123-4567",
        link: "tel:+1-800-123-4567",
      },
    ],
  },
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd",
};
const Contact = () => {
  PageTitle("Contact");
  return (
    <>
      {/* Start Breadcamp */}
      <BreadCamp
        backgroundImage="/assets/images/login_banner.jpeg"
        title="Contact Us"
        breadcrumbItems={breadcrumbData}
        type={true}
      />
      {/* End Breadcamp */}
      <Spacing lg={70} md={120} />
      <div className="container">
        <div className="cs_contact_section cs_gray_bg_4 cs_radius_10">
          <div className="row align-items-center cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_contact_form_wrap">
                <h2 className="cs_fs_36 cs_medium text-uppercase cs_secondary_font">
                  {contactData.title}
                </h2>
                <p className="cs_light">{contactData.description}</p>
                <form action="#" className="cs_contact_form">
                  <div className="row">
                    {contactData.formFields.map((field, index) => (
                      <div key={index} className={field.className}>
                        <label className="cs_semibold">
                          {field.label}
                          {field.required && <span>*</span>}
                        </label>
                        {field.type === "textarea" ? (
                          <textarea
                            className="cs_form_field"
                            required={field.required}
                            rows={10}
                          ></textarea>
                        ) : (
                          <input
                            type={field.type}
                            className="cs_form_field"
                            required={field.required}
                          />
                        )}
                        <Spacing lg={15} md={15} />
                      </div>
                    ))}
                    <div className="col-lg-12">
                      <button className="cs_btn cs_style_1 cs_fs_18 w-100">
                        <span>{contactData.buttonText}</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 offset-xl-1">
              <div className="cs_contact_info cs_radius_8 cs_accent_bg">
                <img
                  src="/assets/images/contact_info_img.svg"
                  alt="Contact Information"
                  className="cs_contact_info_img"
                />
                <h2 className="cs_normal cs_fs_36 cs_white_color cs_secondary_font">
                  {contactData.contactInfo.title}
                </h2>
                <p className="cs_white_color cs_light">
                  {contactData.contactInfo.description}
                </p>
                {contactData.contactInfo.items.map((info, index) => (
                  <div key={index} className="cs_contact_info_item">
                    <div className="cs_contact_info_icon">
                      <img src={info.icon} alt="Icon" />
                    </div>
                    <div className="cs_contact_info_right">
                      <h4 className="cs_fs_16 cs_semibold cs_white_color cs_secondary_font">
                        {info.label}
                      </h4>
                      <Link to={info.link} className="cs_light cs_white_color">
                        {info.contact}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Spacing lg={70} md={120} />
        {/* Start Google Map */}
        <div className="cs_map">
          <iframe id="map" src={contactData.mapSrc} allowFullScreen="" />
        </div>
        {/* End Google Map */}
      </div>
      <Spacing lg={70} md={120} />
    </>
  );
};

export default Contact;
