import React from "react";
import Header from "../Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer";
import Footer2 from "../Footer/FooterSection2";

const Layout = () => {
  const location = useLocation();
  const pathsWithFooter2 = [
    "/about",
    "/blog",
    "/blog-list",
    "/blog-grid",
    "/blog-grid-sidebar",
    "/blog-details",
    "/blog-details-right-sidebar",
    "/about-me",
    "/contact",
    "/store-location",
    "/faq",
  ];
  return (
    <div>
      <Header />
      <Outlet />
      {pathsWithFooter2.includes(location.pathname) ? <Footer2 /> : <Footer />}
    </div>
  );
};

export default Layout;
