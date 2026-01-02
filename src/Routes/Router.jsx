import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home";
import AdvantureDetails from "../component/AdvantureDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import Profile from "../pages/profile";
import UpdateProfile from "../pages/UpdateProfile";
import ForgotPassword from "../pages/ForgotPassword";

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
        element: (
          <PrivateRoute>
            <AdvantureDetails></AdvantureDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/adventures.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
    ],
  },
]);

export default Router;
