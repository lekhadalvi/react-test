import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const sessionUser = sessionStorage.getItem("sessionUser");

  if (!sessionUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
