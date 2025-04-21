import { useState } from "react";
import Spacing from "../../components/Spacing";
import { Link } from "react-router-dom";
import { PageTitle } from "../../Helper/PageTitle";
const bannerData = {
  backgroundImage: "/assets/images/signup_banner.jpeg",
  title: "Sign-Up for a Radiant<br> Experience",
  description: "Fill out the form below, and let's get started.",
};

const formData = {
  title: "CREATE ACCOUNT",
  subtitle: "Enter your credential to access your account",
  inputs: [
    { label: "Full Name", type: "text" },
    { label: "Email Address", type: "email" },
    {
      label: "Create Password",
      type: "password",
      placeholder: "Create a password",
      isPassword: true,
    },
    {
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm your password",
      isPassword: true,
    },
  ],
  checkboxText: "I agree to the Terms & Privacy",
  buttonText: "SIGN UP",
  loginText: "Already have an account?",
  loginLinkText: "Login Here",
  loginLinkUrl: "/login",
  backgroundImage: "/assets/images/signup_img.jpeg",
};

const Signup = () => {
  PageTitle("Signup");
  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  return (
    <>
      {/* Start Breadcamp */}
      <Spacing lg={30} md={40} />
      <div className="container">
        <div
          className="cs_breadcamp_wrap cs_style_1 cs_accent_light_bg cs_bg_filed cs_radius_8"
          style={{ backgroundImage: `url(${bannerData.backgroundImage})` }}
        >
          <div>
            <h1
              className="cs_breadcamp_title cs_fs_54 cs_semibold"
              dangerouslySetInnerHTML={{ __html: bannerData.title }}
            />
            <p className="mb-0 cs_fs_18">{bannerData.description}</p>
          </div>
        </div>
      </div>
      {/* End Breadcamp */}
      <Spacing lg={80} md={80} />
      <div className="container">
        <div
          className="cs_signup_card_wrap cs_gray_bg_4 cs_radius_10 cs_bg_filed"
          style={{ backgroundImage: `url(${formData.backgroundImage})` }}
        >
          <div className="cs_signup_card">
            <h2 className="cs_fs_36 cs_medium">{formData.title}</h2>
            <p className="cs_light mb-0">{formData.subtitle}</p>
            <Spacing lg={30} md={30} />
            <form action="#">
              {formData.inputs.map((input, index) => (
                <div key={index}>
                  <label className="cs_semibold">
                    {input.label}
                    <span>*</span>
                  </label>
                  <div
                    className={`cs_password ${
                      input.isPassword ? "cs_password" : ""
                    }`}
                  >
                    <input
                      type={
                        input.isPassword
                          ? index === 2
                            ? showCreatePass
                              ? "text"
                              : "password"
                            : showConfirmPass
                            ? "text"
                            : "password"
                          : input.type
                      }
                      className="cs_form_field"
                    />
                    {input.isPassword && (
                      <button
                        className={`cs_eye_btn ${
                          (index === 2 && showCreatePass) ||
                          (index === 3 && showConfirmPass)
                            ? "show"
                            : ""
                        }`}
                        type="button"
                        onClick={() =>
                          index === 2
                            ? setShowCreatePass(!showCreatePass)
                            : setShowConfirmPass(!showConfirmPass)
                        }
                      >
                        <svg
                          width={29}
                          height={16}
                          viewBox="0 0 29 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.5 0C8.95924 0 3.93459 2.80577 0.22691 7.36308C-0.0756367 7.73644 -0.0756367 8.25807 0.22691 8.63144C3.93459 13.1942 8.95924 16 14.5 16C20.0408 16 25.0654 13.1942 28.7731 8.63692C29.0756 8.26355 29.0756 7.74194 28.7731 7.36857C25.0654 2.80577 20.0408 0 14.5 0ZM14.8975 13.6335C11.2194 13.8476 8.18211 11.0419 8.41347 7.63212C8.6033 4.82086 11.0652 2.54221 14.1025 2.36651C17.7806 2.15237 20.8179 4.95813 20.5865 8.36788C20.3908 11.1736 17.9289 13.4523 14.8975 13.6335ZM14.7136 11.0309C12.7322 11.1462 11.0949 9.63624 11.2254 7.80233C11.3262 6.28689 12.6551 5.06246 14.2924 4.96362C16.2738 4.84832 17.9111 6.35827 17.7806 8.19218C17.6738 9.71311 16.3449 10.9375 14.7136 11.0309Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                  <Spacing lg={20} md={20} />
                </div>
              ))}
              <div className="cs_custom_checkbox cs_style_1 cs_light">
                <input type="checkbox" />
                <span>{formData.checkboxText}</span>
              </div>
              <Spacing lg={30} md={30} />
              <button className="cs_btn cs_style_1 cs_fs_18 cs_medium w-100">
                {formData.buttonText}
              </button>
              <Spacing lg={30} md={30} />
              <p className="mb-0 cs_light cs_primary_color">
                {formData.loginText}{" "}
                <Link
                  to={formData.loginLinkUrl}
                  className="cs_accent_color cs_semibold"
                >
                  {formData.loginLinkText}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Spacing lg={80} md={150} />
    </>
  );
};

export default Signup;
