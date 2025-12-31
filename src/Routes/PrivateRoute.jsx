import React, { useContext } from "react";
import { authContext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../component/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
