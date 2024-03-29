import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({ children, ...rest }) => {
  const auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoutes;
