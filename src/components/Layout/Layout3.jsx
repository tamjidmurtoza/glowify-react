import React from "react";
import { Outlet } from "react-router-dom";
import Header2 from "../Header/Header2";
import Footer2 from "../Footer/FooterSection2";

const Layout3 = () => {
  return (
    <div>
      <Header2 />
      <Outlet />
      <Footer2 />
    </div>
  );
};

export default Layout3;
