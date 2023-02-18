import React from "react";
import { Route, Redirect, Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ element: Component, loggedIn: loggedIn, navigateTo: navigateTo, ...props }) => {
  return loggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to={navigateTo} replace />
  );
};

export default ProtectedRouteElement;
