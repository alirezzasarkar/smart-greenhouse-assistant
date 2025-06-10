import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import LoadingPage from "./Loading";

const AuthProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);
  const [authenticated, setAuthenticated] = useState(true);
  useEffect(() => {
    setAuthenticated(isAuthenticated);
  }, [isAuthenticated]);

  if (loading) return <LoadingPage />;
  else if (authenticated) return <Navigate to="/" replace />;

  return children;
};

export default AuthProtectedRoute;
