import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectRouterPage({ children }) {
  const auth_token = useSelector((state) => state.users.auth_token);

  const isSignin = auth_token;
  if (!isSignin) {
    return <Navigate to={"/signin"} replace={true} />;
  }
  return children || <Outlet />;
}
