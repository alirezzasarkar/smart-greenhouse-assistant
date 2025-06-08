import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import LoadingPage from "./Loading";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) return <LoadingPage />;
  if (!isAuthenticated) return <Navigate to="/signup-login" replace />;

  return children;
};

export default ProtectedRoute;
