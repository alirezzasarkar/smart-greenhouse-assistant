import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import LoadingPage from "./Loading";

const ProtectedRoute = ({ children }) => {
  const { loading, firstCustomerVisit } = useContext(AuthContext);

  if (firstCustomerVisit) {
    return <Navigate to="/onboarding" replace={true} />;
  }

  if (loading) return <LoadingPage />;

  return children;
};

export default ProtectedRoute;
