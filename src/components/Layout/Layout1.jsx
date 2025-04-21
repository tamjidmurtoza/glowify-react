import React from "react";
import { Outlet } from "react-router-dom";
import Header1 from "../Header/Header1";
import FooterSection1 from "../Footer/FooterSection1";

const Layout1 = () => {
  return (
    <div>
      <Header1 />
      <Outlet />
      <FooterSection1 />
    </div>
  );
};

export default Layout1;
