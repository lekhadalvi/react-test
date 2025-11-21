import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = sessionStorage.getItem("sessionUser");

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
