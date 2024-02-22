import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return true;
  } else {
    return false;
  }
  //   return user && user.loggedIn;
};

const UnProtectedLoginRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Navigate to="/" /> : <Outlet />;
};

export default UnProtectedLoginRoute;