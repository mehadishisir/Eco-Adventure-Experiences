import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home";
import AdvantureDetails from "../component/AdvantureDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/adventures.json"),
      },
      {
        path: "/adventure/:id",
        element: <AdvantureDetails></AdvantureDetails>,
        loader: () => fetch("/adventures.json"),
      },
    ],
  },
]);

export default Router;
