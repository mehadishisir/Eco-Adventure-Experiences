import React, { useContext } from "react";
import { authContext } from "../Auth/AuthProvider";
import { Navigate } from "react-router";
import Loading from "../component/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
