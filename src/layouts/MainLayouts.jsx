import React from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/shared/header/Navbar";
import Footer from "../pages/shared/footer/Footer";

const MainLayouts = () => {
  return (
    <div>
      <div className="sticky top-0 z-10 ">
        <Navbar></Navbar>
      </div>

      <div className="min-h-[calc(100vh-300px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
