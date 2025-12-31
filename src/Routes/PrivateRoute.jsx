import React, { useContext } from "react";
import { authContext } from "../Auth/AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(authContext);
  if (!user) {
    return <Navigate to="/login" replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
