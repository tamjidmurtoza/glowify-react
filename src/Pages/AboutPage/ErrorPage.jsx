import React from "react";
import Header from "../../components/Header";
import FooterSection1 from "../../components/Footer/FooterSection1";
import Spacing from "../../components/Spacing";
import { Link } from "react-router-dom";
import { PageTitle } from "../../Helper/PageTitle";
const errorData = {
  imageSrc: "/assets/images/404.svg",
  title: "Oops! Something Went Wrong",
  buttonText: "Back to Home",
  buttonLink: "/",
};
const ErrorPage = () => {
  PageTitle("Error404");
  return (
    <>
      <Header />
      {/* Start Error Section */}
      <Spacing lg={70} md={100} />
      <div className="container">
        <div className="cs_error text-center">
          <img src={errorData.imageSrc} alt="Error" />
          <h1 className="cs_fs_54">{errorData.title}</h1>
          <Link
            to={errorData.buttonLink}
            className="cs_btn cs_style_1 cs_fs_18 cs_medium"
          >
            {errorData.buttonText}
          </Link>
        </div>
      </div>
      <Spacing lg={70} md={100} />
      {/* End Error Section */}
      <FooterSection1 />
    </>
  );
};

export default ErrorPage;
