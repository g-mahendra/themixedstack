import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main className="md:w-3/5 m-auto pb-10">{children}</main>
    </React.Fragment>
  );
};
export default Layout;
