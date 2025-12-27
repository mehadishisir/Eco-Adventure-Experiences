import React from "react";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

export default HomeLayout;
