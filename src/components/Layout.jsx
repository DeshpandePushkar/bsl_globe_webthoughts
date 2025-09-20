import React from "react";
import NavHeader from "./NavHeader";

const Layout = ({ children }) => {
  return (
    <div>
      <NavHeader />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
