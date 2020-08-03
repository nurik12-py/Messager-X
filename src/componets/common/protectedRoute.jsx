import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getCurrentEmail } from "../../services/authService";
const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!getCurrentEmail()) return <Redirect to="/login" />;
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
