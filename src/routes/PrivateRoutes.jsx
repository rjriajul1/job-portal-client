import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router";
import { div } from "motion/react-client";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();


  if (loading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/signIn"></Navigate>;
  }

  return children;
};

export default PrivateRoutes;
