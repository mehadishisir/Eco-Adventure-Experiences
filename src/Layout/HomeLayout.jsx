import React from "react";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import { Outlet } from "react-router";
import Footer from "../component/Footer";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
