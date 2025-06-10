import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import LoadingPage from "./Loading";

const ProtectedRoute = ({ children }) => {
  const { loading } = useContext(AuthContext);

  if (loading) return <LoadingPage />;

  return children;
};

export default ProtectedRoute;
